<?php
    session_start();


    session_unset();

    header("Location: index.php");
    echo '<script>
    // Clear values from localStorage
    localStorage.removeItem("points");
    localStorage.removeItem("pointsPerClick");

    // Redirect to index.php or any other desired location
    window.location.href = "index.php";
</script>';
?>