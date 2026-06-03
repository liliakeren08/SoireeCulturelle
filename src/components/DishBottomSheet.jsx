import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, ShieldAlert, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function DishBottomSheet({ dish, onClose }) {
  const sheetRef = useRef(null);
  const dragY = useRef(0);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const currentY = useRef(0);
  const startX = useRef(0);
  const isHorizontalScroll = useRef(false);
  const [isClosing, setIsClosing] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') triggerClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset closing state when dish changes
  useEffect(() => {
    if (dish) {
      setIsClosing(false);
    }
  }, [dish]);

  const triggerClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    // On attend la fin de l'animation CSS (environ 300-400ms) avant de dire à App.jsx de supprimer le composant
    setTimeout(() => {
      onClose();
    }, 350);
  };

  if (!dish) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      triggerClose();
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'entree': return 'Entrée';
      case 'plat': return 'Plat de résistance';
      case 'dessert': return 'Dessert';
      default: return cat;
    }
  };

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
    isHorizontalScroll.current = false;
    dragY.current = 0;
    if (sheetRef.current) {
      sheetRef.current.style.transition = 'none';
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || isClosing) return;
    const currentYVal = e.touches[0].clientY;
    const currentXVal = e.touches[0].clientX;
    const diffY = currentYVal - startY.current;
    const diffX = Math.abs(currentXVal - startX.current);
    
    // On verrouille l'axe horizontal si le geste est principalement horizontal
    if (!isHorizontalScroll.current && diffX > 10 && diffX > Math.abs(diffY)) {
      isHorizontalScroll.current = true;
    }

    // Si on a verrouillé le mouvement en horizontal, on annule toute logique de glissement vertical pour cette action
    if (isHorizontalScroll.current) {
      return;
    }
    
    // Seulement autoriser le swipe vers le bas
    if (diffY > 0) {
      // On applique une résistance (0.6) pour qu'il faille un vrai geste intentionnel pour fermer
      dragY.current = diffY * 0.6;
      if (sheetRef.current) {
        sheetRef.current.style.transform = `translateY(${dragY.current}px)`;
      }
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (sheetRef.current) {
      sheetRef.current.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    }
    
    // On augmente le seuil à 150px pour éviter les fermetures accidentelles
    if (dragY.current > 150) {
      triggerClose();
    } else {
      dragY.current = 0;
      if (sheetRef.current && !isClosing) {
        sheetRef.current.style.transform = '';
      }
    }
  };

  return (
    <div 
      className={`bottom-sheet-backdrop ${!isClosing ? 'open' : ''}`} 
      onPointerDown={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bottom-sheet"
        ref={sheetRef}
        style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div 
          className="bottom-sheet-handle-bar" 
          onClick={triggerClose}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        ></div>
        
        <div className="bottom-sheet-content">
          <div 
            className={`sheet-img-wrapper ${Array.isArray(dish.image) && dish.image.length > 1 ? 'carousel' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.isArray(dish.image) && dish.image.length > 1 && (
              <div className="carousel-hint">
                <span className="carousel-badge">1 / {dish.image.length} ➔ Glissez</span>
              </div>
            )}
            {Array.isArray(dish.image) ? (
              dish.image.map((imgSrc, idx) => (
                <img key={idx} src={imgSrc} alt={`${dish.name} ${idx + 1}`} className="sheet-img" />
              ))
            ) : (
              <img src={dish.image} alt={dish.name} className="sheet-img" />
            )}
          </div>

          <div className="sheet-tags-container">
            <span className="sheet-tag-category">{getCategoryLabel(dish.category)}</span>
          </div>

          <div className="sheet-title-wrapper">
            <h2 className="sheet-title">{dish.name}</h2>
          </div>

          {/* Petite histoire section */}
          <div className="sheet-story-box">
            <h3 className="sheet-story-title"><BookOpen size={18} /> Petite Histoire...</h3>
            <p className="sheet-story-text">{dish.story}</p>
          </div>

          {/* Allergens warning banner */}
          <div className={`allergens-box ${dish.allergens.length === 0 ? 'safe' : 'warning'}`}>
            <span className="allergens-icon">
              {dish.allergens.length === 0 ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
            </span>
            <div className="allergens-content-wrapper">
               <span className="allergens-label">Infos Allergènes</span>
              <span className="allergens-text">
                {dish.allergens.length === 0 
                  ? "Aucun allergène majeur détecté" 
                  : `Contient : ${dish.allergens.join(', ')}`}
              </span>
            </div>
          </div>

          {/* Ingredients list */}
          <h3 className="sheet-section-title"><ShoppingBag size={18} /> Composition & Ingrédients</h3>
          <ul className="ingredients-list">
            {dish.ingredients.map((ing, idx) => (
              <li key={idx} className="ingredient-item">
                <span className="ingredient-bullet">✦</span>
                <span>{ing}</span>
              </li>
            ))}
          </ul>

          <button className="sheet-close-btn touch-scale" onPointerDown={(e) => { e.preventDefault(); triggerClose(); }}>
            Fermer la fiche
          </button>
        </div>
      </div>
    </div>
  );
}
