<?php 
include "db.php";

$select = mysqli_query($connect, "SELECT crimes.iso AS iso, subjects.name AS subject, factor_id, value FROM `crimes` 
    JOIN subjects ON crimes.iso = subjects.iso AND subjects.name LIKE '%округ'");

$data_result = [];

while($result = mysqli_fetch_assoc($select)) {
    $data_result[] = $result;
}


// echo '<pre>';
// var_dump($data_result);


$data = json_encode($data_result);

?>
