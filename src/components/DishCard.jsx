import React from 'react';

export default function DishCard({ dish, isFavorite, onToggleFavorite, onSelectDish }) {
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent opening the bottom sheet when clicking heart
    onToggleFavorite(dish.id);
  };

  return (
    <article 
      className="dish-card glass touch-scale" 
      onClick={() => onSelectDish(dish)}
      style={{ animationDelay: `${(dish.id % 6) * 0.05}s` }}
    >
      <button 
        className={`dish-card-fav-btn touch-scale ${isFavorite ? 'active' : ''}`}
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? "Retirer de ma sélection" : "Ajouter à ma sélection"}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <div className="dish-card-img-wrapper">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="dish-card-img" 
          loading="lazy"
        />
      </div>

      <div className="dish-card-overlay">
        <div className="dish-card-content">
          <h3 className="dish-card-title">{dish.name}</h3>
          {dish.badges && dish.badges.length > 0 && (
            <div className="dish-card-badges">
              {dish.badges.slice(0, 2).map((badge, idx) => (
                <span key={idx} className="dish-card-badge">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
