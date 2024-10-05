import React from 'react';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img 
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" 
          alt="Airbnb Logo" 
        />
      </div>

      {/* Center Links */}
      <div className="navbar__center">
        <p>Home</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>

      {/* Search Bar */}
      <div className="navbar__search">
        <input type="text" placeholder="Start your search" />
        <FaSearch className="navbar__searchIcon" />
      </div>

      {/* Right Links (User Menu) */}
      <div className="navbar__right">
        <p>Become a host</p>
        <p>Help</p>
        <p>Sign up</p>
        <p>Log in</p>
      </div>
    </div>
  );
}

export default Navbar;
