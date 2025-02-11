import React from "react";
import "../styles/pages/connexion.css";

const Connexion = () => {
  return (
    <section>
      <h1>Connexion à son compte</h1>
      <form action="" method="POST">
        <label>Nom d'utilisateur</label>
        <input type="text" name="nom_user" required />
        <label>Mot de passe</label>
        <input type="password" name="mdp" required />
        <input type="submit" value="Se connecter" name="boutton-valider" />
      </form>
    </section>
  );
}

export default Connexion;