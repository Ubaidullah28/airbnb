// backend/index.js
const express = require('express');
const app = express();
const PORT = 5000;

// Import the static data
const listingsData = require('../src/components/cardData'); // Adjust path if needed

// Enable CORS for cross-origin requests (Optional: only if needed)
const cors = require('cors');
app.use(cors());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Welcome to the Airbnb Clone Backend!');
});

// Endpoint to get listings data
app.get('/api/listings', (req, res) => {
  res.json(listingsData);
});

// Endpoint to get a specific listing by ID
app.get('/api/listings/:id', (req, res) => {
  const listing = listingsData.find(item => item.id === parseInt(req.params.id));
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).send({ error: 'Listing not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
