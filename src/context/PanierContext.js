// src/context/PanierContext.js
import React, { createContext, useContext, useState } from 'react';

const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

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

  const viderPanier = () => setPanier([]);

  return (
    <PanierContext.Provider value={{ panier, setPanier, ajouterAuPanier, viderPanier }}>
      {children}
    </PanierContext.Provider>
  );
};

export const usePanier = () => useContext(PanierContext);
