<?php

require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";
require_once "send_verification_email.php";

if (!isset($_SESSION["user_id"])) {
    echo json_encode(["error" => "You need to log in first"]);
    exit;
}

$user_id = $_SESSION["user_id"];

$sql = "SELECT username, email, is_verified FROM users WHERE id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $user_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$row = mysqli_fetch_assoc($result);

if (!$row) {
    echo json_encode(["error" => "Couldnt find your account"]);
    exit;
}

if ($row["is_verified"] == 1) {
    echo json_encode(["error" => "This account is already verified"]);
    exit;
}

$new_code = strval(random_int(100000, 999999));
$new_expires_at = date("Y-m-d H:i:s", strtotime("+1 hour"));

$update_sql = "UPDATE users SET verification_code = ?, verification_expires_at = ? WHERE id = ?";
$update_stmt = mysqli_prepare($conn, $update_sql);
mysqli_stmt_bind_param($update_stmt, "ssi", $new_code, $new_expires_at, $user_id);
mysqli_stmt_execute($update_stmt);

$sent_ok = sendVerificationEmail($row["email"], $row["username"], $new_code);

if (!$sent_ok) {
    echo json_encode(["error" => "Couldnt send the email right now, try again in a bit"]);
    exit;
}

$_SESSION["verify_attempts"] = 0;

echo json_encode(["success" => true]);