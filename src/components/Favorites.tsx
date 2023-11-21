// src/components/Favorites.tsx
import React, { useState } from 'react';
import FavoritesCarousel from './FavoriteCarousel';

interface Favorite {
  id: number;
  title: string;
  overview: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  // Lógica para adicionar ou obter favoritos

  return (
    <div className="text-center" id="container-home">
      <h1>Favorites</h1>
      <FavoritesCarousel favorites={favorites} />
    </div>
  );
};

export default Favorites;






