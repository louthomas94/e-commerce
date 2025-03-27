import React from 'react';

const Box = ({ title, description, image }) => {
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>{description}</p>
      <img className='img-produit' src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  );
};

export default Box;
