import React, { useState } from "react";
import "../styles/pages/connexion.css";

const Connexion = () => {
  const [nomUser, setNomUser] = useState("");
  const [mdp, setMdp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom_user: nomUser, mdp: mdp }),
    });

    try {
      const data = await response.json();

      if (response.ok) {
        setMessage("Connexion réussie !");
        // TODO : redirection ou stockage du token si nécessaire
      } else {
        setMessage(data.message || "Connexion échouée");
      }
    } catch (error) {
      setMessage("Erreur lors de la connexion au serveur.");
    }
  };

  return (
    <div className="connexion-container">
      <div className="connexion-image"></div>
      <div className="connexion-form">
        <h1 className="Tconnexion">Connexion à son compte</h1>
        {message && <p className="message">{message}</p>}
        <form className="Fconnexion" onSubmit={handleSubmit}>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="nom_user"
            value={nomUser}
            onChange={(e) => setNomUser(e.target.value)}
            required
          />

          <label>Mot de passe</label>
          <input
            type="password"
            name="mdp"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
            required
          />

          <input type="submit" value="Se connecter" />

          <div className="inscription-link">
            <p>Pas encore de compte ?</p>
            <a href="/inscription">Inscrivez-vous</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
