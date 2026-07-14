<?php
require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["loggedIn" => false, "saved" => false]);
    exit;
}

$user_id = $_SESSION["user_id"];
if(isset($_GET["source"])){
    $source = $_GET["source"];
} else {
    $source = "";
}

if(isset($_GET["external_id"])){
    $external_id = $_GET["external_id"];
} else {
    $external_id = "";
}

$sql = "SELECT id FROM saved_items WHERE user_id = ? AND source = ? AND external_id = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "iss", $user_id, $source, $external_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

$is_saved = mysqli_num_rows($result) > 0;

echo json_encode(["loggedIn" => true, "saved" => $is_saved]);