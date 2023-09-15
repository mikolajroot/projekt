<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elektryk Clicker</title>
    <link rel="stylesheet" href="login.css">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
  </head>
  <body>
    <header> <img src="ElektrykLogo.png" alt="LogoElektryka" width="35px" height="45px"> <a class="HeaderTitle">Elektryk Clicker</a></header>
    <div class="form-container">
      <h2>Zaloguj się</h2>
      <form id="login-form" onsubmit="return validateForm()" action="login.php" method="post" autocomplete="off">
        <div class="form-group">
          <label for="username">Nazwa użytkownika:</label>
          <input type="text" id="username" name="username-login">
          <span id="username-error" class="error-message"></span>
        </div>
        <div class="form-group">
          <label for="password">Hasło:</label>
          <input type="password" id="password" name="password-login">
          <span id="password-error" class="error-message"></span>
          <?php
            if(isset($_SESSION['error'])){
              echo $_SESSION['error'];
              unset($_SESSION['error']);
            }
            ?>
        </div>
        <input type="submit" value="Zaloguj się">
        <input type="reset" value="Zresetuj hasło" id="reset"><br>
        <a href="registerMain.php" class="register">Zajerestruj się </a>
      </form>
    <script src="login.js"></script>
    </div>
    
    <footer>Projekt stworzony przez: Mikołaj Miszka & Kamil Piekarski</footer>
</body>
</html>