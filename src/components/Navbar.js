import React from 'react';
import { useState } from 'react';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
    const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const closeModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };


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
        <input type="text" placeholder="Search" />
        <FaSearch className="navbar__searchIcon" />
      </div>

      {/* Right Links (User Menu) */}
      <div className="navbar__right">
        <p>Become a host</p>
        <p>Help</p>
        <p onClick={() => setShowSignupModal(true)}>Sign up</p> {/* Show Sign-up form */}
        <p onClick={() => setShowLoginModal(true)}>Log in</p>  {/* Show Log-in form */}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal__content">
            <h2>Login</h2>
            <form>
              <label>Email:</label>
              <input type="email" required />
              <label>Password:</label>
              <input type="password" required />
              <button type="submit">Login</button>
              <button type="button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal__content">
            <h2>Sign Up</h2>
            <form>
              <label>Username:</label>
              <input type="text" required />
              <label>Email:</label>
              <input type="email" required />
              <label>Password:</label>
              <input type="password" required />
              <button type="submit">Sign Up</button>
              <button type="button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}

    </div>


  );
}

export default Navbar;
