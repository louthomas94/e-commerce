<?php
include 'db.php';

header('Content-Type: application/json');

$sql = "SELECT * FROM articles";
$result = mysqli_query($conn, $sql);

$articles = [];

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $articles[] = $row;
    }
    echo json_encode(["success" => true, "articles" => $articles]);
} else {
    echo json_encode(["success" => false, "message" => "Erreur de récupération des articles"]);
}

mysqli_close($conn);
?>
