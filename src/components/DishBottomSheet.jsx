import React, { useEffect } from 'react';

export default function DishBottomSheet({ dish, onClose, isFavorite, onToggleFavorite }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!dish) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'entree': return 'Entrée 🥗';
      case 'plat': return 'Plat de résistance 🍲';
      case 'dessert': return 'Dessert 🍰';
      default: return cat;
    }
  };

  return (
    <div 
      className={`bottom-sheet-backdrop open`} 
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="bottom-sheet">
        <div className="bottom-sheet-handle-bar" onClick={onClose}></div>
        
        <div className="bottom-sheet-content">
          <div className="sheet-img-wrapper">
            <img src={dish.image} alt={dish.name} className="sheet-img" />
          </div>

          <div className="sheet-tags-container">
            <span className="sheet-tag-category">{getCategoryLabel(dish.category)}</span>
            {dish.badges && dish.badges.map((badge, idx) => (
              <span key={idx} className="sheet-tag">{badge}</span>
            ))}
          </div>

          <div className="sheet-title-wrapper">
            <h2 className="sheet-title">{dish.name}</h2>
            <button 
              className={`sheet-fav-btn touch-scale ${isFavorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(dish.id)}
              aria-label={isFavorite ? "Retirer de ma sélection" : "Ajouter à ma sélection"}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>

          {/* Petite histoire section */}
          <div className="sheet-story-box">
            <h3 className="sheet-story-title">📜 Petite Histoire...</h3>
            <p className="sheet-story-text">{dish.story}</p>
          </div>

          {/* Allergens warning banner */}
          <div className={`allergens-box ${dish.allergens.length === 0 ? 'safe' : 'warning'}`}>
            <span className="allergens-icon">
              {dish.allergens.length === 0 ? '🍃' : '⚠️'}
            </span>
            <div className="allergens-content-wrapper">
              <span className="allergens-label">Sécurité Allergies</span>
              <span className="allergens-text">
                {dish.allergens.length === 0 
                  ? "Aucun allergène majeur détecté" 
                  : `Contient : ${dish.allergens.join(', ')}`}
              </span>
            </div>
          </div>

          {/* Ingredients list */}
          <h3 className="sheet-section-title">🛒 Composition & Ingrédients</h3>
          <ul className="ingredients-list">
            {dish.ingredients.map((ing, idx) => (
              <li key={idx} className="ingredient-item">
                <span className="ingredient-bullet">✦</span>
                <span>{ing}</span>
              </li>
            ))}
          </ul>

          <button className="sheet-close-btn touch-scale" onClick={onClose}>
            Fermer la fiche
          </button>
        </div>
      </div>
    </div>
  );
}
