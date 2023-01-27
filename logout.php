<?php
    // session_regenerate_id();
    // session_destroy();

    session_start();
    unset($_SESSION['user']);
    header('Location: index.php')
?>