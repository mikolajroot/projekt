<?php
session_start();


$points = $_POST['points'];
$username = $_SESSION['user'];

echo $points;

$host = "localhost";
$user = "root";
$password = "";
$database = "api";

$con = mysqli_connect($host, $user, $password, $database);

if (mysqli_connect_errno()) {
  echo "Error: " . mysqli_connect_error();
  exit();
}

$sql = "SELECT score FROM users WHERE username = '$username'";
$result = mysqli_query($con, $sql);

if ($result) {
  $row = mysqli_fetch_assoc($result);
  $existingHighScore = $row['score'];

  if ($points > $existingHighScore) {

    $sql = "UPDATE users SET score = $points WHERE username = '$username'";
    if (mysqli_query($con, $sql)) {
        $_SESSION['saved'] = true;
        header('Location:main.php');
    } else {
      echo "Error updating score: " . mysqli_error($con);
    }
  } else {
        $_SESSION['notSaved'] = true;
        header('Location:main.php');
  }
} else {
  echo "Error checking score : " . mysqli_error($con);
}
mysqli_close($con);


?>