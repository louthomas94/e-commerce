import React from 'react';
import { usePanier } from '../context/PanierContext';
import '../styles/pages/panier.css'; 

const Panier = () => {
  const { panier, viderPanier } = usePanier();

  const passerCommande = () => {
    if (panier.length === 0) return alert("Votre panier est vide !");
    alert("Commande fictive passée 😄 (fonction à connecter à l'API)");
    viderPanier();
  };

  const total = panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);

  return (
    <div className="panier-container">
      <h2>🛍️ Mon Panier</h2>

      {panier.length === 0 ? (
        <p className="panier-vide">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="panier-liste">
            {panier.map(item => (
              <li key={item.id} className="panier-item">
                <span className="nom">{item.nom}</span>
                <span className="quantite">× {item.quantite}</span>
                <span className="prix">{item.prix}€</span>
              </li>
            ))}
          </ul>

          <div className="panier-total">
            <strong>Total : </strong>{total.toFixed(2)} €
          </div>

          <button className="btn-commander" onClick={passerCommande}>✅ Passer commande</button>
        </>
      )}
    </div>
  );
};

export default Panier;
