// src/pages/Watchlist.js
import React, { useState } from 'react';
import MovieCard from '../Component/MovieCard';
import { Row, Container, Form } from 'react-bootstrap';
import { Card, Button, Col } from 'react-bootstrap';

const Watchlist = ({ watchlist, setWatchlist }) => {
  const [genre, setGenre] = useState('All');

  const handleRemoveFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter(m => m.id !== movie.id));
  };

  const filteredWatchlist = genre === 'All' ? watchlist : watchlist.filter(m => m.genre === genre);

  return (
    <Container>
      {watchlist.length === 0 && <p>No movies in your watchlist</p>}
      <Row>
      {filteredWatchlist.map(movie => (
      <Col md={4} className="mb-4">
    <Card>
      <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${movie.movie_name}`} />
      <Card.Body>
        <Card.Title>{movie.movie_name}</Card.Title>
        <Card.Text>Genre: {movie.genre}</Card.Text>
        <Card.Text>Certification: {movie.certification}</Card.Text>
        { <Button variant="danger" onClick={() => handleRemoveFromWatchlist(movie)}>Remove from Watchlist</Button>}
      </Card.Body>
    </Card>
      </Col>
      ))}
      </Row>
    </Container>
  );
};

export default Watchlist;