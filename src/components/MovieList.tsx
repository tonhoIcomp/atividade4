// src/components/MovieList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCarousel from './MovieCarousel';

const MovieList: React.FC = () => {
  return (
    <div className="text-center" id="container-home">
      <h1>Carousel de Filmes</h1>
      
      <MovieCarousel />
    </div>
  );
};

export default MovieList;



