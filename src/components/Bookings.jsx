// Bookings.jsx
import React, { useState, useEffect } from 'react';

const Bookings = () => {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/bookings')
      .then((response) => response.json())
      .then((data) => setBookingsData(data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []); // Empty array ensures it runs only once

  return (
    <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {bookingsData.map((booking) => (
        <div key={booking.id} className="card">
          <h3>{booking.guestName}</h3>
          <p>{booking.date}</p>
          <p>{booking.propertyName}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
