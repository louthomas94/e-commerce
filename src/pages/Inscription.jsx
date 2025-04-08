import React, { useState } from "react";
import "../styles/pages/inscription.css";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    nom_user: "",
    mdp: "",
    confirm_mdp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mdp !== formData.confirm_mdp) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      delete formData.confirm_mdp;

      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Réponse serveur :", data);

      if (data.success) {
        alert("Inscription réussie !");
      } else {
        alert("Erreur : " + (data.message || "inscription réussi"));
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      alert("Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="inscription-container">
      <div className="inscription-image"></div>
      <div className="inscription-form">
        <h1 className="Tinscription">Créer un compte</h1>
        <form className="Finscription" onSubmit={handleSubmit}>
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />

          <label>Prénom</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="nom_user"
            value={formData.nom_user}
            onChange={handleChange}
            required
          />

          <label>Mot de passe</label>
          <input
            type="password"
            name="mdp"
            value={formData.mdp}
            onChange={handleChange}
            required
          />

          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirm_mdp"
            value={formData.confirm_mdp}
            onChange={handleChange}
            required
          />

          <input type="submit" value="S'inscrire" />
        </form>
      </div>
    </div>
  );
};

export default Inscription;
