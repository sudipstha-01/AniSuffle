<?php

require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";
require_once "send_verification_email.php"; 

$input = json_decode(file_get_contents("php://input"),true);

$username = trim($input["username"]);
$email = trim($input["email"]);
$password = $input["password"];

if($username == "" || $email == "" || $password == ""){
    echo json_encode(["error" => "C'Mon dude , fill all these fields"]);
    exit;
}

if(strlen($password) < 6){
    echo json_encode(["error" => "Too small -_-, Password needs to be at least 6 characters long..."]);
    exit;
}
//dont worry i wont look at your passwords, your privacy will be respected by me  =)
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$verification_code = strval(random_int(100000, 999999));
$verification_expires_at = date("Y-m-d H:i:s", strtotime("+1 hour"));

$insert_sql = "INSERT INTO users (username, email, password_hash, is_verified, verification_code, verification_expires_at) VALUES (?, ?, ?, 0, ?, ?)";
$insert_stmt = mysqli_prepare($conn, $insert_sql);
mysqli_stmt_bind_param($insert_stmt, "sssss", $username, $email, $hashed_password, $verification_code, $verification_expires_at);
$insert_worked = mysqli_stmt_execute($insert_stmt);

if (!$insert_worked) {
    echo json_encode(["error" => "That username or email is already taken."]);
    exit;
}

$new_user_id = mysqli_insert_id($conn);

$_SESSION["user_id"] = $new_user_id;
$_SESSION["username"] = $username;

try {
    sendVerificationEmail($email, $username, $verification_code);
} catch (Throwable $e){
    error_log($e->getMessage());
}

echo json_encode(["success" => true, "username" => $username, "is_verified" => false]);