import React from 'react';

const CustomerReview = ({ name, image, review }) => {
  return (
    <div className="customer-review">
      <div className="review-content">
        <img src={image} alt={`${name}'s profile`} className="review-avatar" />
        <div className="review-details">
          <h3 className="review-name">{name}</h3>
          <p className="review-text">"{review}"</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;