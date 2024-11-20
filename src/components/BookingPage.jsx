import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookingPage() {
  const { id } = useParams(); // Get the listing id from the URL
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pricePerNight = 500; // Assuming a fixed price per night for now (can be dynamic)
    const days = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24);
    setTotalPrice(pricePerNight * days);
  };

  return (
    <div className="booking-page">
      <h1>Booking for Listing {id}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Check-In Date:
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Check-Out Date:
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Calculate Total Price</button>
      </form>

      {totalPrice > 0 && (
        <div>
          <p>Total Price: ${totalPrice}</p>
          <button>Confirm Booking</button>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
