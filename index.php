<?php require("template.php"); ?>

    <section class="home_section ">
        <h1 class="title container">Статистика преступности и расследования преступлений России</h1>
        <!-- Состояние преступности и результаты расследования преступлений по регионам россии -->
        <img class="main_img img-fluid" src="img/icon_mvd.jpg" alt="МВД">
    </section>

    <section class="m-5">
        <div class="container section2">
            <h1>Cover your page.</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
              <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
            </p>
        </div>
        

      <!-- <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer> -->
    </section>

      <!-- <div class="container">
        <h1 class="d-flex justify-content-center mb-5">С января по ноябрь 2022 года в России было зарегистрированно 324234 преступлений</h1>
        -->

        <!-- <div class="row">
          <div class="col-lg-4 card_item">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"  focusable="false">
              <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h2 class="fw-normal">Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>

        </div> -->
      <!-- </div> -->

    <section class="m-5">
      <div class="container">
        <h1 class="d-flex justify-content-center mb-5">Карта преступлений по регионам России</h1>
        
        
        <div id="map" style="width: 100%; height: 600px"></div>
        
        <!-- <div class="json" data-attr=""></div> -->

        
      </div>
      
    </section>

    <?php require "result.php"?>
    <script>
      // получаем json из базы данных
      let data = <?=$data?>;
 
    </script>


    <script src="https://api-maps.yandex.ru/2.1/?apikey=68af2958-e8f6-4a39-b236-1939f3b0f6c9&lang=ru_RU" type="text/javascript"></script>
    <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
    <script src="js/data.js" type="text/javascript"></script>

