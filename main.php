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
    <title>Document</title>
</head>
<body>
    <?php
    echo "<p>Witaj " . $_SESSION['user'] . " ! </p>";
    ?>
    <p><a href="logout.php">Wyloguj się</a></p>
</body>
</html>