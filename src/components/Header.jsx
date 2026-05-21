import React from 'react';

export default function Header({ plateCount, onOpenPlate }) {
  return (
    <header className="header glass">
      <div className="header-title-container">
        <span className="header-subtitle">Soirée Culturelle</span>
        <h1 className="header-title">Le Festin</h1>
      </div>
      <button 
        className="plate-badge-btn touch-scale" 
        onClick={onOpenPlate}
        aria-label="Mon assiette de dégustation"
      >
        🍽️
        {plateCount > 0 && (
          <span className="plate-badge-count">{plateCount}</span>
        )}
      </button>
    </header>
  );
}
