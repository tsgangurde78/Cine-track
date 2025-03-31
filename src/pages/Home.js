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
    }
  };

  const filteredMovies = genre === 'All movies' ? moviesData : moviesData.filter(m => m.genre.includes(genre));

  return (
    <Container>

      <div className='custom-width'> 
      <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)} className="mt-3 col-sm-4">
      <option>All movies</option>
        <option >Action</option>
        <option >Thriller</option>
        <option >Adventure</option>
        <option >Science Fiction</option>
        <option>Comedy</option>
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