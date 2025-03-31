
// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Component/Header';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const getInitialPage = () => {
    const path = window.location.pathname;
    if (path === '/watchlist') return 'watchlist';
    return 'home';  // default to home if no valid path
  };
  
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path === '/watchlist' ? 'watchlist' : 'home');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home watchlist={watchlist} setWatchlist={setWatchlist} />;
    } else if (currentPage === 'watchlist') {
      return <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />;
    }
  };

  return (
    <div>
      <Header onSelectPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;