<?php
include("template.php");
include("db.php");
$subjects = mysqli_query($connect, 'SELECT value FROM crimes WHERE factor_id=7');

while ($res = mysqli_fetch_assoc($subjects)) {
    // echo '<pre>';
    echo 'UPDATE `crimes` SET value = REPLACE("'.$res['value'].'" , "," ,".") WHERE factor_id = 7 LIMIT 2';

    $crimes = mysqli_query($connect, 'UPDATE `crimes` SET value = REPLACE("'.$res['value'].'" , ",", ".") WHERE factor_id = 7');

    // echo var_dump($result);
}

echo 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </br>';
echo mysqli_fetch_assoc($result)['name'];


?>