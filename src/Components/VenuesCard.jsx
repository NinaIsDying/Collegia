import React from "react";
import "../styles/VenuesCard.css"; 

export default function VenuesCard ({ title, image }) {
  return (
    <div className="venue-card">
      <div className="venue-image-container">
        <img className="venue-image" src={image} alt={title} />

        <button className="favorite-button" aria-label="Favorite">
          <img alt="favorite-button" src="icons/favorite.png" className="heart-icon"></img>
        </button>
      </div>

      <h3 className="venue-title">{title}</h3>
    </div>
  );
};

