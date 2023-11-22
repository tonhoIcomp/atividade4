import React, { useState, useEffect } from 'react';
import FavoritesCarousel from './FavoriteCarousel';
import { Movie } from './MovieCarousel';

export interface Favorite {
  id: number;
  title: string;
  overview: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  

  useEffect(() => {
    // Recuperar a lista de favoritos do localStorage
    const storedFavorites = localStorage.getItem('favorites');

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  
  return (
    <div className="text-center" id="container-home">
      
      <FavoritesCarousel favorites={favorites} />

      <h2>Meus Filmes favoritos</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;






