<?php
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // le reste de ton code PHP ici
}



// Connexion à la base de données
$host = "localhost";
$user = "root"; // modifie si besoin
$password = "root"; // modifie si besoin
$dbname = "ta_base_de_donnees"; // remplace par le nom de ta BDD

$conn = new mysqli($host, $user, $password, $dbname);

// Vérifie la connexion
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Erreur de connexion à la base de données."]);
    exit();
}

// Récupère les données JSON envoyées depuis le frontend
$data = json_decode(file_get_contents("php://input"), true);

$nom_user = $conn->real_escape_string($data["nom_user"] ?? '');
$mdp = $data["mdp"] ?? '';

// Requête pour récupérer l'utilisateur
$sql = "SELECT * FROM utilisateurs WHERE nom_user = '$nom_user'";
$result = $conn->query($sql);

if ($result && $result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // Vérifie le mot de passe (en clair ici, ajoute password_hash pour sécuriser plus tard)
    if ($user["mdp"] === $mdp) {
        echo json_encode(["success" => true, "message" => "Connexion réussie"]);
    } else {
        echo json_encode(["success" => false, "message" => "Mot de passe incorrect"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Utilisateur non trouvé"]);
}

$conn->close();
