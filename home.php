<?php
session_start();

if(!isset($_SESSION["user"])){
    include("template.php");
	echo "Необходимо авторизоваться.";
	exit;
}
include("template_user.php");
include("check_auth.php");
?>

<section class="home_section container">
    <h1 class="home-title mb-3">Карта преступности по субъектам России</h1>
<!-- Состояние преступности и результаты расследования преступлений по регионам россии -->
<!-- <img class="main_img img-fluid" src="img/icon_mvd.jpg" alt="МВД"> -->
    <div id="map" class="my-3" style="width: 100%; height: 600px"></div>
    <?php include("get_city.php");?>
    <script>
      // получаем json из базы данных
      let data = <?=$data?>;
    </script>
</section>


<script src="https://api-maps.yandex.ru/2.1/?apikey=68af2958-e8f6-4a39-b236-1939f3b0f6c9&lang=ru_RU" type="text/javascript"></script>
<script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
<script src="js/cityMap.js" type="text/javascript"></script>
<script src="js/city.js" type="text/javascript"></script>