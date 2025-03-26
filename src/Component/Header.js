// src/components/Header.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = ({ onSelectPage }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand onClick={() => onSelectPage('home')}>Cine Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <a></> */}
        <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onSelectPage('home'); window.history.pushState({}, '', '/');}}>Home</Nav.Link>
        <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onSelectPage('watchlist'); window.history.pushState({}, '', '/watchlist');}}>Watchlist</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;