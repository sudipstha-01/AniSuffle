<?php

require_once "config.php";

mysqli_report(MYSQLI_REPORT_OFF);

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if(!$conn){
    die("Could not connect to the database: " .mysqli_connect_error());
}