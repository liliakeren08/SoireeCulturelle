import React from 'react';
import { LayoutGrid, Salad, Soup, CakeSlice } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tout le Menu', Icon: LayoutGrid },
  { id: 'entree', name: 'Entrées', Icon: Salad },
  { id: 'plat', name: 'Plats de Résistance', Icon: Soup },
  { id: 'dessert', name: 'Desserts', Icon: CakeSlice }
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
            <cat.Icon size={18} />
            <span>{cat.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
