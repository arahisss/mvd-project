<?php 
    define('DB_HOST', 'std-mysql'); 
    define('DB_USER', 'std_1971_mvd_project'); 
    define('DB_PASSWORD', 'root1234'); 
    define('DB_NAME', 'std_1971_mvd_project'); 

    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>