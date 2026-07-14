<?php
require_once "session_init.php";
header("Content-Type: application/json");
if(isset($_SESSION["user_id"])){
    // session only stored user_id/username before, so we gotta
    // look up is_verified fresh from the db each time, ya know (｡•́‿  •̀｡)
    require_once "db.php";
    $sql = "SELECT is_verified FROM users WHERE id = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $_SESSION["user_id"]);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($result);
    if($row){
        $is_verified = (bool)$row["is_verified"];
    } else {
        $is_verified = false;
    }

    echo json_encode(["loggedIn" => true, "username" => $_SESSION["username"], "is_verified" => $is_verified]);
} else {
    echo json_encode(["loggedIn" => false]);
}