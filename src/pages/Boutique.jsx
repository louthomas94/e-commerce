import React, { useEffect, useState } from 'react';
import "../styles/pages/boutique.css"

function Boutique() {
  const [articles, setArticles] = useState([]);
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    fetch('/api/get_articles.php')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Erreur chargement articles:', err));
  }, []);

  const ajouterAuPanier = (article) => {
    const exist = panier.find(a => a.id_article === article.id_article);
    if (exist) {
      setPanier(panier.map(a =>
        a.id_article === article.id_article
          ? { ...a, quantite: a.quantite + 1 }
          : a
      ));
    } else {
      setPanier([...panier, { ...article, quantite: 1 }]);
    }
  };

  const passerCommande = () => {
    if (panier.length === 0) return alert("Le panier est vide !");
    
    fetch('/api/passer_commande.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ commande: panier, id_client: 1 }) // ← à adapter selon ton auth
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Commande passée !");
          setPanier([]);
        } else {
          alert("Erreur lors de la commande.");
        }
      })
      .catch(err => console.error('Erreur commande:', err));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Boutique</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {articles.map(article => (
          <div key={article.id_article} style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
            <h3>{article.nom_article}</h3>
            <p>{article.description}</p>
            <p><strong>{article.prix}€</strong></p>
            <button onClick={() => ajouterAuPanier(article)}>Ajouter au panier</button>
          </div>
        ))}
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h3>Panier</h3>
      {panier.length === 0 ? <p>Aucun article.</p> : (
        <ul>
          {panier.map(item => (
            <li key={item.id_article}>
              {item.nom_article} x {item.quantite}
            </li>
          ))}
        </ul>
      )}
      <button onClick={passerCommande} disabled={panier.length === 0}>
        Passer commande
      </button>
    </div>
  );
}

export default Boutique;
