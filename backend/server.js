// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const mongoose = require('mongoose');
const Listing = require('./models/Listing');
 const adminRoutes = require('./routes/adminRoutes');
 const listingsRouter = require('./routes/listingRoutes');
 const bookingRoutes = require('./routes/bookingRoutes'); // Adjust the path if needed
require('dotenv').config(); 
const app = express();
const port = 3001; 


app.use(cors());
app.use(express.json()); // To parse JSON bodies in POST requests

// Routes
app.use('/api/auth', authRoutes);  
app.use('/api/user', profileRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/listings', listingsRouter);
app.use('/api/bookings', bookingRoutes); // Handle bookings



// MongoDB connection URI
const uri = 'mongodb://localhost:27017/airbnb'; // Update with your actual MongoDB URI
const dbName = 'airbnb'; // Replace with your actual database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Endpoint to get listings
app.get("/api/listings", async (req, res) => {
  try {
    const listings = await Listing.find(); // Mongoose query to fetch listings
    res.json(listings);  // Ensure the response is an array
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});















