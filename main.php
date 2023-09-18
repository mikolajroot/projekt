<?php
session_start();

if (!isset($_SESSION['loggedOn'])) {
  header('Location: index.php');
  exit();
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elektryk Clicker</title>
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
  <link rel="stylesheet" href="main.css">
</head>
<body>
<header>
  <div class="header-content"> 
    <img src="ElektrykLogo.png" alt="LogoElektryka" width="35px" height="45px"> 
    <a class="HeaderTitle">Elektryk Clicker</a>     
  </div>
    <?php
    echo "<p class='welcome'>Witaj " . $_SESSION['user'] . "! </p>";
    ?> <p><a href="logout.php" class="logout">Wyloguj się</a></p></header>
    





    <footer>Projekt stworzony przez: Mikołaj Miszka & Kamil Piekarski</footer>
</body>
</html>