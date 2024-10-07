import React, { useState } from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';

function Search() {
  // State to track if the dropdown is visible
  const [showDropdown, setShowDropdown] = useState(false);

  // List of suggested cities
  const suggestedCities = [
    "Lahore, Pakistan",
    "Islamabad, Pakistan",
    "Karachi, Pakistan",
    "Faisalabad, Pakistan",
    "Multan, Pakistan",
    "Peshawar, Pakistan",
    "Quetta, Pakistan",
    "Sialkot, Pakistan",
    "Gujranwala, Pakistan",
    "Rawalpindi, Pakistan",
    "Bahawalpur, Pakistan",
    "Hyderabad, Pakistan"
  ];

  // Function to handle the dropdown toggle
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input where">
        <label>Where</label>
        <input
          type="text"
          placeholder="Search destinations"
          onClick={handleDropdownToggle}
        />
        {/* Dropdown for suggested destinations */}
        {showDropdown && (
          <div className="dropdown">
            <p className="dropdown__title">Suggested Destinations</p>
            <ul className="dropdown__list">
              {suggestedCities.map((city, index) => (
                <li key={index} className="dropdown__item">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="search-bar__input check-in">
        <label>Check in</label>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search-bar__input check-out">
        <label>Check out</label>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search-bar__input guests">
        <label>Who</label>
        <input type="text" placeholder="Add guests" />
      </div>
      <div className="search-bar__icon">
        <FaSearch />
      </div>
    </div>
  );
}

export default Search;
