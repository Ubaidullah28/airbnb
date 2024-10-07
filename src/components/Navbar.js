import React, { useState } from 'react';
import './navbar.css';
import { FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Airbnb"
        />
      </div>

      <div className="navbar__links">
        <span>Stays</span>
        <span>Experiences</span>
        <span>Airbnb your home</span>
      </div>

      <div className="navbar__actions">
        <span className="navbar__host">Airbnb your home</span>
        <FaGlobe className="navbar__icon" />

        <div className="navbar__menu" onClick={toggleMenu}>
          <FaBars className="navbar__icon" />
          <FaUserCircle className="navbar__icon user" />
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__dropdown">
          <ul>
            <li>Sign up</li>
            <li>Log in</li>
            <li>Gift cards</li>
            <li>Airbnb your home</li>
            <li>Host an experience</li>
            <li>Help Center</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

