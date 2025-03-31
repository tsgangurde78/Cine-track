// src/components/MovieCard.js
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useState } from 'react';

const MovieCard = ({ movie, onAddToWatchlist, onRemoveFromWatchlist, isInWatchlist }) => {
 
  return(

  <Col md={4} className="mb-4">
    <Card>
      <Card.Img variant="top" src={movie.image_link} />
      <Card.Body>
        <Card.Title>{movie.movie_name}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>
        <Card.Text> {movie.certification}</Card.Text>
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