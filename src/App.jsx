import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import SearchBar from './components/SearchBar';
import DishCard from './components/DishCard';
import DishBottomSheet from './components/DishBottomSheet';
import { dishes } from './data/dishes';
import { UtensilsCrossed } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);

  // 1. Simuler un écran de chargement de l'application (Splash Screen)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  // Filtrer les plats par catégorie et par recherche intelligente
  const filteredDishes = dishes.filter((dish) => {
    // Filtrage par catégorie
    const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;

    // Recherche intelligente : par nom, par ingrédients ou par allergènes
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesName = dish.name.toLowerCase().includes(query);
    const matchesIngredients = dish.ingredients.some(ing => ing.toLowerCase().includes(query));
    const matchesAllergens = dish.allergens.some(all => all.toLowerCase().includes(query));

    return matchesCategory && (matchesName || matchesIngredients || matchesAllergens);
  });

  if (isLoading) {
    return (
      <div className="splash-loader">
        <h2 style={{ 
          fontFamily: 'var(--font-title)', 
          fontSize: '2.2rem', 
          fontWeight: '900',
          background: 'linear-gradient(to right, var(--text-primary), var(--accent-gold))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          Le Festin
        </h2>
        <p style={{ 
          color: 'var(--accent-amber)', 
          fontSize: '0.8rem', 
          letterSpacing: '0.2em', 
          textTransform: 'uppercase',
          fontWeight: 700
        }}>
          Soirée Culturelle
        </p>
        <div className="loader-spinner" style={{ marginTop: '20px' }}></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* En-tête */}
      <Header />

      {/* Sélecteur de Catégorie (Collant / Sticky) */}
      <CategoryTabs 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      {/* Barre de Recherche */}
      <SearchBar 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />

      {/* Grille des Plats */}
      <main className="dishes-grid" role="main">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onSelectDish={setSelectedDish}
            />
          ))
        ) : (
          <div className="search-empty-state">
            <span className="search-empty-icon"><UtensilsCrossed size={32} /></span>
            <p style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Aucun plat trouvé</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Essayez une autre recherche (ex: poulet, banane, arachide)
            </p>
          </div>
        )}
      </main>

      {/* Footer discret */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        color: 'var(--text-muted)',
        fontSize: '0.75rem',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)'
      }}>
        <p>© 2026 Soirée Culturelle.</p>
        <p style={{ marginTop: '4px', opacity: 0.7 }}>Tous droits réservés.</p>
      </footer>

      {/* Fiche Détails Plat (Tiroir du bas) */}
      <DishBottomSheet
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
}
