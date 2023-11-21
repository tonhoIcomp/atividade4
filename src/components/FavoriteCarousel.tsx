// src/components/FavoritesCarousel.tsx
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

interface Favorite {
  id: number;
  title: string;
  overview: string;
}

const FavoritesCarousel: React.FC<{ favorites: Favorite[] }> = ({ favorites }) => {
  return (
    <Carousel>
      {favorites.map((favorite) => (
        <Carousel.Item key={favorite.id}>
          <Carousel.Caption>
            <h3>{favorite.title}</h3>
            <p>{favorite.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FavoritesCarousel;

