<?php

require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";

$input = json_decode(file_get_contents("php://input"),true);
$identifier = trim($input["identifier"]);
$password = $input["password"];
if($identifier == "" || $password == ""){
    echo json_encode(["error" => "Please enter your username/email and password"]);
    exit;
}

$sql = "SELECT id, username, password_hash, is_verified FROM users WHERE username = ? OR email = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ss", $identifier, $identifier);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$user = mysqli_fetch_assoc($result);

if(!$user || !password_verify($password, $user["password_hash"])){
    echo json_encode(["error"=>"Wrong username/email or maybe password"]);
    exit;
}

$_SESSION["user_id"] = $user["id"];
$_SESSION["username"] = $user["username"];

echo json_encode(["success" => true, "username" => $user["username"], "is_verified" => (bool)$user["is_verified"]]);