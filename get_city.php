<?php 
include "db.php";

$select = mysqli_query($connect, "SELECT iso, value FROM `crimes` WHERE factor_id = 1");

$data_result = [];

while($result = mysqli_fetch_assoc($select)) {
    $data_result[] = $result;
}

$data = json_encode($data_result);

?>
