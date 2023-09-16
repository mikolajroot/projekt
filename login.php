<?php

if (!isset($_POST["username-login"]) || !isset($_POST["password-login"])) {
    header("Location: index.php");
    exit();
}
$host = "localhost"; 
$user = "root";
$password = ""; 
$database = "api";

$con = mysqli_connect($host, $user, $password, $database);
if (mysqli_connect_errno()) {
    echo "Error: " . mysqli_connect_error();
    exit();
} else{
    $username = $_POST['username-login'];
    $password = $_POST['password-login'];

    $username = htmlentities($username, ENT_QUOTES, "UTF-8");
    $password = htmlentities($password, ENT_QUOTES, "UTF-8");

    $sql = "SELECT * FROM users WHERE username='$username' AND pass='$password'";

    $result = mysqli_query($con, $sql);
    if ($result !== false) {
        $numberOfUsers = mysqli_num_rows($result);
        session_start();
        if ($numberOfUsers > 0) {
            $row = mysqli_fetch_assoc($result);
            $_SESSION['loggedOn'] = true;
            $_SESSION['user'] = $row['username'];

            mysqli_free_result($result);
            header('Location: main.php');
        } else {
            $_SESSION['error'] = '<script>alert("Nieprawidłowy login lub hasło")</script>';
            header('Location: index.php');
        }
    } else {
        echo "Error executing SQL query: " . mysqli_error($con);
        header('Location: index.php');
    }

    mysqli_close($con);
}

?>