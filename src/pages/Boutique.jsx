import React from 'react';
import Box from '../components/Box';
import '../styles/pages/boutique.css';

const Boutique = () => {
  const products = [
    {
      name: "Tapis Coeur",
      description: "Tapis en forme de coeur pour la décoration.",
      image: "/assets/images/creme.jpg"
    },
    {
      name: "Rouge à lèvres",
      description: "Rouge à lèvres longue tenue.",
      image: "/assets/images/rouge.jpg"
    },
    {
      name: "Chocolat noir",
      description: "Chocolat intense à 70% de cacao.",
      image: "/assets/images/chocolat.jpg"
    },
    {
      name: "Thé vert",
      description: "Thé vert parfumé à la menthe.",
      image: "/assets/images/the.jpg"
    }
  ];

  return (
    <div className="boutique">
      <h1 className='titre'>Bienvenue dans notre boutique</h1>
      <div className="box-container">
        {products.map((product, index) => (
          <Box key={index} title={product.name} description={product.description} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Boutique;