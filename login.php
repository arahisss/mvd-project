<?php require("template.php"); 

include("db.php");

if (!empty($_POST)) {
  $result = mysqli_query($connect, 'SELECT * FROM users WHERE
    email="' . $_POST["email"].'" AND password="' . md5($_POST["password"]) . '"');

// echo $_POST["login"];
// echo md5($_POST["password"]);

  if (!$result || mysqli_num_rows($result) == 0) {
    echo "Такой пользователь не существует.";
    exit;
  }

  session_start();
  $_SESSION["user"] = mysqli_fetch_assoc($result);

  header("Location: home.php?id=" . $_SESSION["user"]["id"]);
}
?>

  <div class="container w-25">
    <div class="d-flex justify-content-center form-block" style="margin-top:30%;">
      <h1 class="mb-3">Вход</h1>

      <form method="POST" class="login-form" action="">
        <div class="mb-3">
          <label for="email" class="form-label">Ваш Email</label>
          <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Пароль">
        </div>

        <div class="login-btn mt-3">
          <button type="submit" name="sendMe" value="1" class="btn btn-primary">Войти</button>
        </div>
      </form>
    </div>
  </div>
