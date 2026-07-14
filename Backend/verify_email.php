<?php

require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";

if (!isset($_SESSION["user_id"])) {
    echo json_encode(["error" => "You need to log in first"]);
    exit;
}

$user_id = $_SESSION["user_id"];
$input = json_decode(file_get_contents("php://input"), true);
if(isset($input["code"])){
    $entered_code = trim($input["code"]);
} else {
    $entered_code = "";
}

if ($entered_code == "") {
    echo json_encode(["error" => "Please enter the code"]);
    exit;
}

if (!isset($_SESSION["verify_attempts"])) {
    $_SESSION["verify_attempts"] = 0;
}

if ($_SESSION["verify_attempts"] >= 6) {
    echo json_encode(["error" => "Too many wrong attempts, hit resend to get a new code"]);
    exit;
}

$sql = "SELECT verification_code, verification_expires_at FROM users WHERE id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $user_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$row = mysqli_fetch_assoc($result);

if (!$row || $row["verification_code"] === null) {
    echo json_encode(["error" => "No code found, try resending it"]);
    exit;
}

if (strtotime($row["verification_expires_at"]) < time()) {
    echo json_encode(["error" => "That code expired, hit resend to get a new one"]);
    exit;
}

if ($entered_code !== $row["verification_code"]) {
    $_SESSION["verify_attempts"]++;
    echo json_encode(["error" => "That code isnt right, double check and try again"]);
    exit;
}

$_SESSION["verify_attempts"] = 0;

$update_sql = "UPDATE users SET is_verified = 1, verification_code = NULL, verification_expires_at = NULL WHERE id = ?";
$update_stmt = mysqli_prepare($conn, $update_sql);
mysqli_stmt_bind_param($update_stmt, "i", $user_id);
mysqli_stmt_execute($update_stmt);

echo json_encode(["success" => true]);