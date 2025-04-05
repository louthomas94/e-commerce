<?php
$host = "localhost";
$user = "root";
$password = "root";
$dbname = "ecommerce";

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
    die("Connexion échouée : " . mysqli_connect_error());
}
?>
