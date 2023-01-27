<?php include("template.php");
include("db.php"); 


if (!empty($_POST)){
  $result = mysqli_query($connect, 'SELECT * FROM users WHERE email="'.$_POST['email'].'" AND name = "'.$_POST['name'].'"');

  if(mysqli_num_rows($result) == 0){
      mysqli_query($connect, 'INSERT INTO users (name, email, password) VALUES (
          "'.$_POST["name"].'", 
          "'.$_POST["email"].'",
          "'.md5($_POST["password"]).'"
          )'
      );
      // $new_user = mysqli_query($connect, "SELECT * FROM users WHERE login=\"".$_POST['login']."\"");

      // $_SESSION["user"] = mysqli_fetch_assoc($new_user);

  }


  header("Location: login.php");
}

?>
  <div class="container w-25">
    <div class="d-flex justify-content-center form-block" style="margin-top:40%;">
      <h1 class="mb-3">Регистрация</h1>

      <form method="POST" class="login-form" action="">
        <input type="hidden" name="_token" value="AjxHr0RfZHDuSsWRMLstaAPTpKrSDvtTJRfCUXbP">

        <div class="mb-3">
            <label for="name" class="form-label">Выше имя</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Имя">
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Ваш Email</label>
          <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Пароль">
        </div>

        <div class="login-btn mt-3">
          <button type="submit" name="sendMe" value="1" class="btn btn-primary  ">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  </div>



