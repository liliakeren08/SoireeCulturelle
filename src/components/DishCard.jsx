import React from 'react';

export default function DishCard({ dish, onSelectDish }) {
  return (
    <article 
      className="dish-card glass touch-scale" 
      onClick={() => onSelectDish(dish)}
      style={{ animationDelay: `${(dish.id % 6) * 0.05}s` }}
    >
      <div className="dish-card-img-wrapper">
        <img 
          src={Array.isArray(dish.image) ? dish.image[0] : dish.image} 
          alt={dish.name} 
          className="dish-card-img" 
          loading="lazy"
        />
      </div>

      <div className="dish-card-overlay">
        <div className="dish-card-content">
          <h3 className="dish-card-title">{dish.name}</h3>
        </div>
      </div>
    </article>
  );
}
