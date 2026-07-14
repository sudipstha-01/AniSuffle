<?php

require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["error" => "Dude, You need to log in first"]);
    exit;
}

$user_id = $_SESSION["user_id"];

$input = json_decode(file_get_contents("php://input"), true);
$source = $input["source"];
$external_id = $input["external_id"];

$sql = "DELETE FROM saved_items WHERE user_id = ? AND source = ? AND external_id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "iss", $user_id, $source, $external_id);
mysqli_stmt_execute($stmt);
echo json_encode(["success" => true, "saved" => false]);