<?php
include 'db.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$id_client = $data['id_client'];
$articles = $data['articles']; // tableau d'objets : [ {id_article: 1, quantite: 2}, ... ]

if (empty($id_client) || empty($articles)) {
    echo json_encode(["success" => false, "message" => "Données invalides"]);
    exit;
}

// 1. Créer une commande
$sql_commande = "INSERT INTO commande (id_client) VALUES ('$id_client')";
if (mysqli_query($conn, $sql_commande)) {
    $id_commande = mysqli_insert_id($conn);

    // 2. Insérer les articles commandés
    foreach ($articles as $item) {
        $id_article = $item['id_article'];
        $quantite = $item['quantite'];
        $sql_article = "INSERT INTO commande_articles (id_commande, id_article, quantite) VALUES ('$id_commande', '$id_article', '$quantite')";
        mysqli_query($conn, $sql_article);
    }

    echo json_encode(["success" => true, "message" => "Commande passée avec succès", "id_commande" => $id_commande]);
} else {
    echo json_encode(["success" => false, "message" => "Erreur lors de la création de la commande"]);
}

mysqli_close($conn);
?>
