import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import SearchBar from './components/SearchBar';
import DishCard from './components/DishCard';
import DishBottomSheet from './components/DishBottomSheet';
import MyPlateDrawer from './components/MyPlateDrawer';
import { dishes } from './data/dishes';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);
  const [isPlateOpen, setIsPlateOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // 1. Simuler un écran de chargement de l'application (Splash Screen)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);

    // Charger les favoris enregistrés depuis le localStorage
    try {
      const savedFavorites = localStorage.getItem('festin_favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (e) {
      console.error("Erreur de lecture du localStorage :", e);
    }

    return () => clearTimeout(timer);
  }, []);

  // 2. Enregistrer les favoris dans le localStorage à chaque changement
  const handleToggleFavorite = (dishId) => {
    setFavorites((prevFavs) => {
      let updatedFavs;
      if (prevFavs.includes(dishId)) {
        updatedFavs = prevFavs.filter(id => id !== dishId);
      } else {
        updatedFavs = [...prevFavs, dishId];
      }
      try {
        localStorage.setItem('festin_favorites', JSON.stringify(updatedFavs));
      } catch (e) {
        console.error("Erreur d'écriture dans le localStorage :", e);
      }
      return updatedFavs;
    });
  };

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

  const favoriteDishes = dishes.filter(dish => favorites.includes(dish.id));

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
      <Header 
        plateCount={favorites.length} 
        onOpenPlate={() => setIsPlateOpen(true)} 
      />

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
              isFavorite={favorites.includes(dish.id)}
              onToggleFavorite={handleToggleFavorite}
              onSelectDish={setSelectedDish}
            />
          ))
        ) : (
          <div className="search-empty-state">
            <span className="search-empty-icon">🍽️</span>
            <p style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Aucun plat trouvé</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Essayez une autre recherche (ex: poulet, banane, arachide)
            </p>
          </div>
        )}
      </main>

      {/* Fiche Détails Plat (Tiroir du bas) */}
      <DishBottomSheet
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        isFavorite={selectedDish ? favorites.includes(selectedDish.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Volet "Mon Assiette" (Tasting Wishlist) */}
      <MyPlateDrawer
        isOpen={isPlateOpen}
        onClose={() => setIsPlateOpen(false)}
        selectedDishes={favoriteDishes}
        onRemove={handleToggleFavorite}
        onSelectDish={setSelectedDish}
      />
    </div>
  );
}
