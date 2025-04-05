<?php
// inscription.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header('Content-Type: application/json');

// Récupérer les données JSON envoyées par le client
$inputData = json_decode(file_get_contents('php://input'), true);

// Vérifications des champs nécessaires
if (
    !isset($inputData['nom']) || 
    empty($inputData['nom']) ||
    !isset($inputData['prenom']) || 
    empty($inputData['prenom']) ||
    !isset($inputData['email']) || 
    empty($inputData['email']) ||
    !isset($inputData['nom_user']) || 
    empty($inputData['nom_user']) ||
    !isset($inputData['mdp']) || 
    empty($inputData['mdp']) ||
    !isset($inputData['confirm_mdp']) || 
    empty($inputData['confirm_mdp'])
) {
    echo json_encode(['success' => false, 'message' => 'Tous les champs doivent être remplis.']);
    exit();
}

// Vérification du format de l'email
if (!filter_var($inputData['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'L\'email fourni n\'est pas valide.']);
    exit();
}

// Vérification que le nom d'utilisateur ne contient pas de caractères spéciaux ou d'espaces
if (!preg_match('/^[a-zA-Z0-9_]+$/', $inputData['nom_user'])) {
    echo json_encode(['success' => false, 'message' => 'Le nom d\'utilisateur ne peut contenir que des lettres, des chiffres et des underscores.']);
    exit();
}

// Vérification de la longueur du mot de passe
if (strlen($inputData['mdp']) < 8) {
    echo json_encode(['success' => false, 'message' => 'Le mot de passe doit contenir au moins 8 caractères.']);
    exit();
}

// Vérification si les mots de passe correspondent
if ($inputData['mdp'] !== $inputData['confirm_mdp']) {
    echo json_encode(['success' => false, 'message' => 'Les mots de passe ne correspondent pas.']);
    exit();
}

// Connexion à la base de données (remplacer avec vos propres paramètres)
$host = 'localhost';
$dbname = 'votre_base_de_donnees';
$username = 'votre_utilisateur';
$password = 'votre_mot_de_passe';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérification si l'email ou le nom d'utilisateur existe déjà
    $stmt = $pdo->prepare("SELECT * FROM clients WHERE email = :email OR nom_user = :nom_user");
    $stmt->bindParam(':email', $inputData['email']);
    $stmt->bindParam(':nom_user', $inputData['nom_user']);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => false, 'message' => 'Email ou nom d\'utilisateur déjà utilisé.']);
        exit();
    }
 
    // Hash du mot de passe
    $hashedPassword = password_hash($inputData['mdp'], PASSWORD_DEFAULT);

// Insertion dans la base
$stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, email, nom_user, mdp) VALUES (:nom, :prenom, :email, :nom_user, :mdp)");
try {
    $stmt->execute([
        ":nom" => $data["nom"],
        ":prenom" => $data["prenom"],
        ":email" => $data["email"],
        ":nom_user" => $data["nom_user"],
        ":mdp" => $mdp_hache
    ]);

    echo json_encode(["success" => true, "message" => "Inscription réussie !"]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Erreur lors de l'inscription."]);
}
?>
