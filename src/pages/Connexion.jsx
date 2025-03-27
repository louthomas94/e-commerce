import React from "react";
import "../styles/pages/connexion.css";

const Connexion = () => {
  return (
    <div className="connexion-container">
      <div className="connexion-image"></div> {/* Section Image */}
      <div className="connexion-form">       {/* Section Formulaire */}
        <h1 className="Tconnexion">Connexion à son compte</h1>
        <form className="Fconnexion" action="" method="POST">
          <label>Nom d'utilisateur</label>
          <input type="text" name="nom_user" required />

          <label>Mot de passe</label>
          <input type="password" name="mdp" required />

          <input type="submit" value="Se connecter" name="boutton-valider" />
        </form>
      </div>
    </div>
  );
}

export default Connexion;
