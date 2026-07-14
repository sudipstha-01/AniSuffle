<?php

require_once "session_init.php";
header("Content-Type: application/json");

session_unset();
session_destroy();
echo json_encode(["success" => true]);