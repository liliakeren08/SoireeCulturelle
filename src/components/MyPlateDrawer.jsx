import React, { useEffect } from 'react';

export default function MyPlateDrawer({ isOpen, onClose, selectedDishes, onRemove, onSelectDish }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'entree': return 'Entrée';
      case 'plat': return 'Plat';
      case 'dessert': return 'Dessert';
      default: return cat;
    }
  };

  return (
    <div 
      className={`plate-drawer-backdrop open`} 
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="plate-drawer">
        <div className="plate-drawer-header">
          <h2 className="plate-drawer-title">🍽️ Ma Sélection</h2>
          <button className="plate-drawer-close touch-scale" onClick={onClose} aria-label="Fermer la sélection">
            ✕
          </button>
        </div>

        <div className="plate-drawer-content">
          {selectedDishes.length === 0 ? (
            <div className="plate-empty-state">
              <span className="plate-empty-icon">🍽️</span>
              <h3 className="plate-empty-title">Votre assiette est vide !</h3>
              <p className="plate-empty-desc">
                Parcourez le menu et ajoutez des plats avec le ❤️ pour préparer votre dégustation culinaire.
              </p>
            </div>
          ) : (
            selectedDishes.map((dish) => (
              <div 
                key={dish.id} 
                className="plate-item touch-scale"
                onClick={() => {
                  onSelectDish(dish);
                  onClose(); // Close wishlist drawer when opening dish detail
                }}
              >
                <img src={dish.image} alt={dish.name} className="plate-item-img" />
                <div className="plate-item-info">
                  <span className="plate-item-name">{dish.name}</span>
                  <span className="plate-item-cat">{getCategoryLabel(dish.category)}</span>
                </div>
                <button 
                  className="plate-item-remove touch-scale" 
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid opening the details modal when deleting
                    onRemove(dish.id);
                  }}
                  aria-label={`Retirer ${dish.name} de ma sélection`}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
