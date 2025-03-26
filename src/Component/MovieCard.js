// src/components/MovieCard.js
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useState } from 'react';

const MovieCard = ({ movie, onAddToWatchlist, onRemoveFromWatchlist, isInWatchlist }) => {
  // const [isInWatchlist, setIsInWatchlist] = useState(false);

  // Function to handle adding the movie to the watchlist
  const handleAddToWatchlist = () => {
    onAddToWatchlist(movie);
    // setIsInWatchlist(true);
  }; 
  return(

  <Col md={4} className="mb-4">
    <Card>
      <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${movie.movie_name}`} />
      <Card.Body>
        <Card.Title>{movie.movie_name}</Card.Title>
        <Card.Text>Genre: {movie.genre}</Card.Text>
        <Card.Text>Certification: {movie.certification}</Card.Text>
        {isInWatchlist ? (
          <p>Added to your watchlist</p>
        ) : (
          <Button variant="primary" onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</Button>
        )}
      </Card.Body>
    </Card>
  </Col>
  )
}

export default MovieCard;