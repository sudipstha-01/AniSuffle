<?php

require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["error" => "You need to log in first"]);
    exit;
}

$user_id = $_SESSION["user_id"];

if(isset($_GET["type"])){
    $item_type = $_GET["type"];
} else {
    $item_type = "";
}
if($item_type == "anime" || $item_type == "manga"){
    $sql = "SELECT * FROM saved_items WHERE user_id = ? AND item_type = ? ORDER BY saved_at DESC";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "is", $user_id, $item_type);
} else {
    $sql = "SELECT * FROM saved_items WHERE user_id = ? ORDER BY saved_at DESC";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $user_id);
}
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

$all_items = [];
while ($row = mysqli_fetch_assoc($result)){
    $all_items[] = $row;
}
echo json_encode(["success" => true, "items"=> $all_items]);