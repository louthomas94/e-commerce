import React from "react";
import "../styles/pages/inscription.css";

const Inscription = () => {
    return (
        <div className="inscription-container">
            <div className="inscription-image"></div>
            <div className="inscription-form">
                <h1 className="Tinscription">Créer un compte</h1>
                <form className="Finscription" action="" method="POST">
                    <label>Nom</label>
                    <input type="text" name="nom" required />

                    <label>Prénom</label>
                    <input type="text" name="prenom" required />

                    <label>Email</label>
                    <input type="email" name="email" required />

                    <label>Nom d'utilisateur</label>
                    <input type="text" name="nom_user" required />

                    <label>Mot de passe</label>
                    <input type="password" name="mdp" required />

                    <label>Confirmer le mot de passe</label>
                    <input type="password" name="confirm_mdp" required />

                    <input type="submit" value="S'inscrire" name="boutton-valider" />
                </form>
                <div className="connexion-link">
                    <p>Déjà un compte ?</p>
                    <a href="/connexion">Connectez-vous ici !</a>
                </div>
            </div>
        </div>
    );
}

export default Inscription;