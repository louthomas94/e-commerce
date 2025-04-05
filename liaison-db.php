<?php
// Connexion à la base de données ecommerce
try {
    $pdo = new PDO(
        "mysql:host=localhost;dbname=ecommerce;charset=utf8mb4", 
        "root", // identifiant MySQL
        "root", // mot de passe MySQL
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
    echo "✅ Connexion à la base de données réussie.<br><br>";
} catch (PDOException $e) {
    die("❌ Erreur de connexion : " . $e->getMessage());
}

// Vérification des tables existantes
$tables = ['utilisateur', 'produit', 'categorie', 'commande', 'commande_produit', 'avis'];
foreach ($tables as $table) {
    $stmt = $pdo->query("SHOW TABLES LIKE '$table'");
    if ($stmt->rowCount() > 0) {
        echo "✅ Table `$table` trouvée.<br>";
    } else {
        echo "⚠️ Table `$table` manquante.<br>";
    }
}

// Inscription de l'utilisateur
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['register'])) {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $mot_de_passe = password_hash($_POST['mot_de_passe'], PASSWORD_DEFAULT);
    $adresse = $_POST['adresse'];
    $ville = $_POST['ville'];
    $code_postal = $_POST['code_postal'];

    // Insertion de l'utilisateur dans la base de données
    try {
        $sql = "INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, adresse, ville, code_postal) 
                VALUES (:nom, :prenom, :email, :mot_de_passe, :adresse, :ville, :code_postal)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':mot_de_passe', $mot_de_passe);
        $stmt->bindParam(':adresse', $adresse);
        $stmt->bindParam(':ville', $ville);
        $stmt->bindParam(':code_postal', $code_postal);
        $stmt->execute();
        echo "✅ Inscription réussie ! Vous pouvez maintenant vous connecter.";
    } catch (PDOException $e) {
        echo "❌ Erreur lors de l'inscription : " . $e->getMessage();
    }
}

?>

<!-- Formulaire d'inscription -->
<form method="POST" action="">
    <label for="nom">Nom :</label>
    <input type="text" name="nom" required><br>

    <label for="prenom">Prénom :</label>
    <input type="text" name="prenom" required><br>

    <label for="email">Email :</label>
    <input type="email" name="email" required><br>

    <label for="mot_de_passe">Mot de passe :</label>
    <input type="password" name="mot_de_passe" required><br>

    <label for="adresse">Adresse :</label>
    <input type="text" name="adresse" required><br>

    <label for="ville">Ville :</label>
    <input type="text" name="ville" required><br>

    <label for="code_postal">Code Postal :</label>
    <input type="text" name="code_postal" required><br>

    <button type="submit" name="register">S'inscrire</button>
</form>
