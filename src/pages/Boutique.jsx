import React from 'react';
import '../styles/pages/boutique.css';
import { usePanier } from '../context/PanierContext';


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import decor1 from '../assets/decor1.jpg';
import decor2 from '../assets/decor2.jpg';
import decor3 from '../assets/decor3.jpg';

const articles = [
  { id: 1, nom: "Cœur violet", image: img1, description: "Un petit cœur doux et moelleux 💜", prix: 20 },
  { id: 2, nom: "Burger", image: img2, description: "Un tapis burger fun et appétissant 🍔", prix: 25 },
  { id: 3, nom: "Croissant", image: img3, description: "Un croissant du matin plein de bonne humeur 🥐", prix: 18 },
  { id: 4, nom: "Pot rouge et violet", image: img4, description: "Cache-pot texturé violet et rouge ❤️💜", prix: 22 },
  { id: 5, nom: "Pot turquoise et rose", image: decor1, description: "Cache-pot moelleux et flashy 🌈", prix: 22 },
  { id: 6, nom: "Pot vert avec fleur", image: decor2, description: "Déco florale chic et douce 🌸", prix: 24 },
  { id: 7, nom: "Atelier tufting", image: decor3, description: "Un aperçu de notre atelier 🧵", prix: 0 },
];

const Boutique = () => {
  const { ajouterAuPanier } = usePanier();

  return (
    <div className="boutique-container">
      <h2>Boutique en ligne</h2>
      <div className="grid-boutique">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.nom} className="article-img" />
            <h3>{article.nom}</h3>
            <p>{article.description}</p>
            {article.prix > 0 && (
              <>
                <p><strong>{article.prix} €</strong></p>
                <button onClick={() => ajouterAuPanier(article)}>
                  Ajouter au panier
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boutique;
