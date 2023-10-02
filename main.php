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
    <p><a class='save'>Zapisz swój rekord</a><a href="logout.php" class="logout">Wyloguj się</a></p>
  </header>
  <main>
    <?php
    if (isset($_SESSION['saved'])) {
      echo "<script>alert('Zapisano najwyższy wynik')</script>";
      unset($_SESSION['saved']);
    }

    if (isset($_SESSION['notSaved'])) {
      echo "<script>alert('Twój wynik jest mniejszy niż rekord')</script>";
      unset($_SESSION['notSaved']);
    }

    ?>
    <div class="store">
      <div class="store-name">SKLEP</div>
      <a class="store-buy">Uwaga za nieodpowiedni strój </a>
      <button class="level1">Kup</button>
      <p class="price">Cena: <a class="pricel1" id="PriceAndAmount">10</a> | Dodaje +1 | Łącznie zakupiono:
        <a class="amount1" id="PriceAndAmount">0</a>
      </p>
      <hr>
      <a class="store-buy">Kartkowka z matematyki </a>
      <button class='level2'>Kup</button>
      <p class="price">Cena: <a class="pricel2" id="PriceAndAmount">250</a> | Dodaje +5 | Łącznie zakupiono:
        <a class="amount2" id="PriceAndAmount">0</a>
      </p>
      <hr>
      <a class="store-buy">Marynarka z emblematem </a>
      <button class="level3">Kup</button>
      <p class="price">Cena: <a class="pricel3" id="PriceAndAmount">1000</a> | Dodaje +20 | Łącznie zakupiono:
        <a class="amount3" id="PriceAndAmount">0</a>
      </p>
      <hr>
      <a class="store-buy">Odblokuj parking szkolny </a>
      <button class="level4">Kup</button>
      <p class="price">Cena: <a class="pricel4" id="PriceAndAmount">35000</a> | Dodaje +45 | Łącznie zakupiono:
        <a class="amount4" id="PriceAndAmount">0</a>
      </p>
      <hr>
      <a class="store-buy">Zdaj z matematyki </a>
      <button class="level5">Kup</button>
      <p class="price">Cena: <a class="pricel5" id="PriceAndAmount">125000</a> | Dodaje +100 | Łącznie zakupiono:
        <a class="amount5" id="PriceAndAmount">0</a>
      </p>
      <hr>
      <a class="store-buy">Zdany egzamin zawodowy </a>
      <button class="level6">Kup</button>
      <p class="price">Cena: <a class="pricel6" id="PriceAndAmount">825000</a> | Dodaje +250 | Łącznie zakupiono:
        <a class="amount6" id="PriceAndAmount">0</a>
      </p>
      <hr>
      <a class="store-buy">Zdana matura </a>
      <button class="level7">Kup</button>
      <p class="price">Cena: <a class="pricel7" id="PriceAndAmount">5000000</a> | Dodaje +750 | Łącznie zakupiono:
        <a class="amount7" id="PriceAndAmount">0</a>
      </p> <br>
    </div>
    <div class="clicker">
      <div class="nickname">
        <p class="score">Twoje kliknięcia: <span></span><br></p>
        <div class="clicks">Za jedno kliknięcie dostajesz: <span></span></div>
      </div>
      <img src="ElektrykLogo.png" alt="LogoElektryka" class="click">
    </div>
    <div class="leaderboard">
      <div class="leaderboard-name">RANKING</div>

      <?php
      $host = "localhost";
      $user = "root";
      $password = "";
      $database = "api";

      $con = mysqli_connect($host, $user, $password, $database);

      if (mysqli_connect_errno()) {
        echo "Error: " . mysqli_connect_error();
        exit();
      }

      $sql = "SELECT username, score FROM users
        WHERE score > 0
        ORDER BY score DESC ";

      $result = mysqli_query($con, $sql);

      $total_rows = mysqli_num_rows($result);

      // Wygeneruj HTML dla rankingu
      $position = 1;
      while ($row = mysqli_fetch_assoc($result)) {
        $username = $row['username'];
        $score = $row['score'];

        // określ klasę na podstawie pozycji
        $class = "";
        if ($position === 1 || $position === 2 || $position === 3) {
          $class = "leaderboard-position-top";
        } else {
          $class = "leaderboard-position";
        }

        $medal = "";
        if ($position === 1) {
          $medal = "🥇";
        } elseif ($position === 2) {
          $medal = "🥈";
        } elseif ($position === 3) {
          $medal = "🥉";
        }

        echo "<p class='$class'>$medal $username | Wynik: $score </p>";

        if ($position < $total_rows) {
          echo "<hr>";
        }

        $position++;
      }

      // Zamknij połączenie bazy danych
      mysqli_close($con);

      ?>

    </div>

    <main>
      <footer>Projekt stworzony przez: Mikołaj Miszka & Kamil Piekarski</footer>
      <form method="POST" action="save.php" class="form">
        <input type="hidden" name="points" class="hidden">
      </form>
      <script src="main.js"></script>
      <script src="audio.js"></script>
</body>

</html>