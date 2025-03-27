import React from 'react';

const ProductCard = ({ name, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
