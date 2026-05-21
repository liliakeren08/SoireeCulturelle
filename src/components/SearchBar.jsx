import React from 'react';

export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-container">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un plat, ingrédient..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Rechercher dans le menu"
        />
        {searchQuery && (
          <button 
            className="clear-search-btn" 
            onClick={() => onSearchChange('')}
            aria-label="Effacer la recherche"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
