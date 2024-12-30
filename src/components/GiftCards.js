import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './GiftCards.css'; // Your styling for the Gift Cards page

const GiftCards = () => {
  return (
    <div>
      <Navbar />
      <div className="gift-cards-container">
        <h1>Gift Cards</h1>
        <p>Get a gift card for yourself or a loved one. You can use it for your next Airbnb booking!</p>
        {/* Add more content related to gift cards */}
      </div>
    </div>
  );
};

export default GiftCards;
