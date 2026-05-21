import React from 'react';

const categories = [
  { id: 'all', name: 'Tout le Menu', emoji: '🍽️' },
  { id: 'entree', name: 'Entrées', emoji: '🥗' },
  { id: 'plat', name: 'Plats de Résistance', emoji: '🍲' },
  { id: 'dessert', name: 'Desserts', emoji: '🍰' }
];

export default function CategoryTabs({ activeCategory, onSelectCategory }) {
  return (
    <div className="category-container">
      <nav className="category-tabs" aria-label="Catégories du menu">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab touch-scale glass ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <span>{cat.emoji}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
