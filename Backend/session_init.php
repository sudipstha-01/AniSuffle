<?php

ini_set("display_errors", "0");
ini_set("display_startup_errors", "0");

session_set_cookie_params([
    "lifetime" => 0,
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax"
]);
session_start();