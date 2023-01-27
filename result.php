<?php 
include "db.php";

$select = mysqli_query($connect, "SELECT * FROM `crimes` WHERE `subject` LIKE '%округ'");
$data_result = [];

while($result = mysqli_fetch_assoc($select)) {
    $data_result[] = $result;
}

// while($result = mysqli_fetch_assoc($select)) {
//     $a = [
//         $result['iso'] => [
//             "value" => $result['value'],
//             "factor_id" => $result['factor_id']
//         ]
//     ];
//     array_push($data_result, $a);
    
// }

echo '<pre>';
var_dump($data_result);


$data = json_encode($data_result);

?>
