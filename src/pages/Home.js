// src/pages/Home.js
import React, { useState } from 'react';
import moviesData from '../utils/data';
import MovieCard from '../Component/MovieCard';
import { Row, Container, Form, Toast } from 'react-bootstrap';
import { toast } from 'react-toastify';
 

const Home = ({ watchlist, setWatchlist }) => {
  const [genre, setGenre] = useState('All');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToWatchlist = (movie) => {
    if (watchlist.length >= 4) {
      setToastMessage("You can't add more than 4 movies to your watchlist");
      setShowToast(true);
      return;
    }
    if (!watchlist.some(m => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
      setToastMessage("Movie added to watchlist");
      setShowToast(true);
    }
  };

  const filteredMovies = genre === 'All' ? moviesData : moviesData.filter(m => m.genre === genre);

  return (
    <Container>

      <div className='custom-width'> 
      <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)} className="mt-3 col-sm-4">
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </Form.Select>
      </div>
      <Row className='mt-4'>
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onAddToWatchlist={handleAddToWatchlist} isInWatchlist={watchlist.some(m => m.id === movie.id)} />
        ))}
      </Row>
    
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          minWidth: '200px',
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </Container>
  );
};

export default Home;