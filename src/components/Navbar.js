  import React, { useState } from 'react';
  import './navbar.css';
  import { FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa'; // Importing icons
  import { Link } from 'react-router-dom'; // Add this import

  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);  // Add this state for toggling menu
    const [activeTab, setActiveTab] = useState('Stays');  // State for active tab

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);  // Toggle the menu open/close
    };

    // Function to set the active tab
    const handleTabClick = (tab) => {
      setActiveTab(tab);
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
          <span
            className={`navbar__link ${activeTab === 'Stays' ? 'active' : ''}`}
            onClick={() => handleTabClick('Stays')}
          >
            Stays
          </span>
          <span
            className={`navbar__link ${activeTab === 'Experiences' ? 'active' : ''}`}
            onClick={() => handleTabClick('Experiences')}
          >
            Experiences
          </span>
        </div>

        <div className="navbar__actions">
          <span className="navbar__host">Airbnb your home</span>
          <FaGlobe className="navbar__icon" />

          <div className="navbar__menu" onClick={toggleMenu}>
            <FaBars className="navbar__icon" />
            <FaUserCircle className="navbar__icon user" />
          </div>
        </div>

        {menuOpen && (  // Render the dropdown menu when `menuOpen` is true
          <div className="navbar__dropdown">
            <ul>
              <li>
              <Link to="/SignUp">Sign up</Link>  {/* Link to sign up page */}
              </li>
              <li>
              <Link to="/Login">Log in</Link>  {/* Link to login page */}
              </li>
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
