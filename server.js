const express = require('express');
const listingsData = require('../airbnb/src/components/Data/listings.json');
const bookingsData = require('../airbnb/src/components/Data/bookings.json');

const app = express();
const PORT = 5000;

// API endpoint to get all listings
app.get('/api/listings', (req, res) => {
  res.json(listingsData);
});

// API endpoint to get a specific listing by ID
app.get('/api/listings/:id', (req, res) => {
  const listing = listingsData.find(item => item.id === parseInt(req.params.id));
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: 'Listing not found' });
  }
});

// API endpoint to get all bookings
app.get('/api/bookings', (req, res) => {
  res.json(bookingsData);
});

// API endpoint to get a specific booking by ID
app.get('/api/bookings/:id', (req, res) => {
  const booking = bookingsData.find(item => item.bookingId === parseInt(req.params.id));
  if (booking) {
    res.json(booking);
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
