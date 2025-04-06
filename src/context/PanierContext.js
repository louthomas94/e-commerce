import React, { createContext, useContext, useState, useEffect } from 'react';

const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState(() => {
    
    const saved = localStorage.getItem("panier");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    
    localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier]);

  const ajouterAuPanier = (article) => {
    const exist = panier.find(a => a.id === article.id);
    if (exist) {
      setPanier(panier.map(a =>
        a.id === article.id
          ? { ...a, quantite: a.quantite + 1 }
          : a
      ));
    } else {
      setPanier([...panier, { ...article, quantite: 1 }]);
    }
  };

  const viderPanier = () => setPanier([]);

  return (
    <PanierContext.Provider value={{ panier, ajouterAuPanier, viderPanier }}>
      {children}
    </PanierContext.Provider>
  );
};

export const usePanier = () => useContext(PanierContext);
