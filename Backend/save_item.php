<?php 
require_once "session_init.php";
header("Content-Type: application/json");
require_once "db.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["error" => "You need to log in first =("]);
    exit;
}

$user_id = $_SESSION["user_id"];
$input = json_decode(file_get_contents("php://input"), true);

$item_type = $input["item_type"];
$source = $input["source"];
$external_id = $input["external_id"];

$title = $input["title"];
$image_url = $input["image_url"];
$rating = $input["rating"];
$status_label = $input["status_label"];
if(isset($input["genres"])){
    $genres = $input["genres"];
} else {
    $genres = null;
}

if(isset($input["synopsis"])){
    $synopsis = $input["synopsis"];
} else {
    $synopsis = null;
}

if(isset($input["trailer_url"])){
    $trailer_url = $input["trailer_url"];
} else {
    $trailer_url = null;
}

if($item_type == "" || $source == "" || $external_id == "" || $title == ""){
    echo json_encode(["error" => "Something is missing, cant save this"]);
    exit;
}
$sql = "INSERT INTO saved_items (user_id, item_type, source, external_id, title, image_url, rating, status_label, genres, synopsis, trailer_url)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE title = VALUES(title), genres = VALUES(genres), synopsis = VALUES(synopsis), trailer_url = VALUES(trailer_url)";

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param(
    $stmt,
    "issssssssss",
    $user_id,
    $item_type,
    $source,
    $external_id,
    $title,
    $image_url,
    $rating,
    $status_label,
    $genres,
    $synopsis,
    $trailer_url
);
mysqli_stmt_execute($stmt);

echo json_encode(["success" => true, "saved" => true]);