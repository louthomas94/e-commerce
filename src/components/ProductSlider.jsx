import React from 'react';

const ProductSlider = ({ category, products }) => {
  return (
    <div className="product-slider">
      <h2 className="slider-category">{category}</h2>
      <div className="slider-container">
        {products.map((product) => (
          <div key={product.id} className="slider-item">
            <img src={product.image} alt={product.name} className="slider-img" />
            <p className="slider-text">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;