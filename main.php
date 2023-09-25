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
    ?> 
    <p><a href="logout.php" class="logout">Wyloguj się</a></p>
</header>
    <main>
    <div class="store">
    <div class="store-name">SKLEP</div>
    <!-- <img> tu bedzie zdjecie czegos--><a class="store-buy">Testowy zakup 1 </a><button class="level1">Kup</button> <br><hr>
    <!-- <img> tu bedzie zdjecie czegos--><a class="store-buy">Testowy zakup 2 </a><button class='level2'>Kup</button> <br><hr>
    <!-- <img> tu bedzie zdjecie czegos--><a class="store-buy">Testowy zakup 3 </a><button class="level3">Kup</button> <br><hr>
    <!-- <img> tu bedzie zdjecie czegos--><a class="store-buy">Testowy zakup 4 </a><button class="level4">Kup</button> <br><hr>
    <!-- <img> tu bedzie zdjecie czegos--><a class="store-buy">Testowy zakup 5 </a><button class="level5">Kup</button> <br><hr>
    <!-- <img> tu bedzie zdjecie czegos--><a class="store-buy">Testowy zakup 6 </a><button class="level6">Kup</button> <br><hr>
    <!-- <img> tu bedzie zdjecie czegos--><a class="store-buy">Testowy zakup 7 </a><button class="level7">Kup</button> <br>
    </div>
    <div class="clicker">
      <div class="nickname">
      <p class="score">Twoje kliknięcia: <span></span><br></p>
      <div class="clicks">Za jedno kliknięcie dostajesz: <span></span></div>
      </div>
      <img src="ElektrykLogo.png" alt="LogoElektryka" class="click">
      </div>
    <div class="leaderboard">
    <a>RANKING<a>
    </div>

    <main>
    <footer>Projekt stworzony przez: Mikołaj Miszka & Kamil Piekarski</footer>
    <script src="main.js"></script>
</body>
</html>
