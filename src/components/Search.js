import React, { useState } from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Search() {
  // State to track if the dropdown is visible
  const [showDropdown, setShowDropdown] = useState(false);

  // States for handling check-in and check-out dates
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

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

  // Function to handle the dropdown toggle for the "Where" input
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="search-bar">
      {/* Where input with dropdown for cities */}
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

      {/* Date picker for check-in */}
      <div className="search-bar__input check-in">
        <label>Check in</label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          placeholderText="Add dates"
          minDate={new Date()}  // Ensure the check-in date cannot be in the past
        />
      </div>

      {/* Date picker for check-out */}
      <div className="search-bar__input check-out">
        <label>Check out</label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate}  // Ensure the check-out date is after the check-in date
          placeholderText="Add dates"
        />
      </div>

      {/* Guests input */}
      <div className="search-bar__input guests">
        <label>Who</label>
        <input type="text" placeholder="Add guests" />
      </div>

      {/* Search icon button */}
      <div className="search-bar__icon">
        <FaSearch />
      </div>
    </div>
  );
}

export default Search;
