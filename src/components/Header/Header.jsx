import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <div className="header-container">
        <h1>
          <span className="dot"></span>
          <Link to="/">Yuhao Wu</Link>
        </h1>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" className={isActive('/')}>About Me</Link></li>
            <li><Link to="/cv" className={isActive('/cv')}>CV</Link></li>
            <li><Link to="/projects" className={isActive('/projects')}>Projects</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
            <li><Link to="/game" className={isActive('/game')}>Game</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;