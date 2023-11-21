// src/components/MovieCarousel.tsx
import React, { useState, useEffect } from 'react';
import { Carousel, Modal, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import config from '../config';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const MovieCarousel: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}&language=pt-BR`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const addToFavorites = () => {
    if (selectedMovie) {
      setFavorites((prevFavorites) => [...prevFavorites, selectedMovie]);
      closeModal();
    }
  };

  return (
    <div>
      <Container>
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id} onClick={() => openModal(movie)}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </Container>

      {/* Modal */}
      <Modal show={selectedMovie !== null} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedMovie?.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={addToFavorites}>
            Adicionar aos Favoritos
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieCarousel;





