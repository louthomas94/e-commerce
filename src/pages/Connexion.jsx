import React from "react";

const Connexion = () => {
  return (
    <div>
      <h1>Connexion</h1>
      <p>Connectez-vous pour accéder à votre espace personnel.</p>
      <form>
        <label htmlFor="email">Adresse email : </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Mot de passe : </label>
        <input type="password" id="password" name="password" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;