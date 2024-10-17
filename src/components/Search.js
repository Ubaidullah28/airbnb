import React, { useState } from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Search() {
  // State to track if the dropdown is visible
  const [showDropdown, setShowDropdown] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  // States for handling check-in and check-out dates
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // State for guest counts
  const [guestCounts, setGuestCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });

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

  // Function to handle the dropdown toggle for guests
  const handleGuestsDropdownToggle = () => {
    setShowGuestsDropdown(!showGuestsDropdown);
  };

  // Function to update guest counts
  const updateGuestCount = (type, increment) => {
    setGuestCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] + increment, 0) // Prevent negative values
    }));
  };

  return (
    <div className="search-bar">
      {/* Where input with dropdown for cities */}
      <div className="search-bar__input where">
        <label style={{color: 'black'}}><b>Where</b></label>
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
        <label style={{color: 'black'}}><b>Check in</b></label>
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
        <label style={{color: 'black'}}><b>Check out</b></label>
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

      {}
      <div className="search-bar__input guests">
        <label style={{color: 'black'}}><b>Who</b></label>
        <input
          type="text"
          placeholder="Add guests"
          onClick={handleGuestsDropdownToggle}
          readOnly
        />
        {}
        {showGuestsDropdown && (
          <div className="dropdown">
            <p className="dropdown__title">Guests</p>
            <div className="guest-category">
              <p>Adults(Age {'>'}=13)      </p>
              <button onClick={() => updateGuestCount('adults', -1)}>-</button>
              <span>{guestCounts.adults}</span>
              <button onClick={() => updateGuestCount('adults', 1)}>+</button>
            </div>
            <div className="guest-category">
              <p>Children(Age 2–12)         </p>
              <button onClick={() => updateGuestCount('children', -1)}>-</button>
              <span>{guestCounts.children}</span>
              <button onClick={() => updateGuestCount('children', 1)}>+</button>
            </div>
            <div className="guest-category">
              <p>Infants(Under 2)    </p>
              <button onClick={() => updateGuestCount('infants', -1)}>-</button>
              <span>{guestCounts.infants}</span>
              <button onClick={() => updateGuestCount('infants', 1)}>+</button>
            </div>
            <div className="guest-category">
              <p>Pets   </p>
              <button onClick={() => updateGuestCount('pets', -1)}>-</button>
              <span>{guestCounts.pets}</span>
              <button onClick={() => updateGuestCount('pets', 1)}>+</button>
            </div>
          </div>
        )}
      </div>

      {/* Search icon button */}
      <div className="search-bar__icon">
        <FaSearch />
      </div>
    </div>
  );
}

export default Search;
