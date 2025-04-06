// src/pages/Panier.jsx
import React from 'react';
import { usePanier } from '../context/PanierContext';

const Panier = () => {
  const { panier, setPanier, viderPanier } = usePanier();

  const passerCommande = () => {
    if (panier.length === 0) return alert("Votre panier est vide !");

    fetch('/api/passer_commande.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        commande: panier,
        id_client: 1 // TODO : à remplacer par le vrai id utilisateur connecté
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Commande passée avec succès !");
        viderPanier(); // on vide le panier une fois la commande faite
      } else {
        alert("Erreur lors de la commande.");
      }
    })
    .catch(err => {
      console.error("Erreur API :", err);
      alert("Une erreur s'est produite.");
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛍️ Mon Panier</h2>

      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {panier.map(item => (
              <li key={item.id_article}>
                {item.nom_article} — {item.quantite} × {item.prix}€
              </li>
            ))}
          </ul>
          <hr />
          <p><strong>Total :</strong> {
            panier.reduce((total, item) => total + item.prix * item.quantite, 0).toFixed(2)
          } €</p>

          <button onClick={passerCommande}>✅ Passer commande</button>
        </>
      )}
    </div>
  );
};

export default Panier;

