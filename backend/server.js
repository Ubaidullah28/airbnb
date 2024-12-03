








// const express = require('express');
// const cors = require('cors');

// const { MongoClient } = require('mongodb');
// const authRoutes = require('./routes/auth');  // Routes for authentication
// const profileRoutes = require('./routes/profile');  // Protected profile route
// const app = express();
// const port = 3001; // Ensure this matches the API port you're using in React

// // Middleware to enable CORS for cross-origin requests
// app.use(cors());
// app.use(express.json()); // To parse JSON bodies in POST requests



// // Routes
// app.use('/api/auth', authRoutes);  // Authentication routes like login, register
// app.use('/api/user', profileRoutes);  // Protected routes like profile (secured with JWT)



// // MongoDB connection URI
// const uri = 'mongodb://localhost:27017/airbnb'; // Update with your actual MongoDB URI
// const dbName = 'airbnb'; // Replace with your actual database name
// let db;





// // Connect to MongoDB
// MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 30000  })
//   .then(client => {
//     db = client.db(dbName);
//     console.log('Connected to the database');
//   })
//   .catch(err => {
//     console.error('Failed to connect to database:', err);
//     process.exit(1); // Exit if connection fails
//   });


// // const mongoose = require('mongoose');


// // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('Connected to MongoDB'))
// //   .catch(err => console.error('Error connecting to MongoDB:', err));





// // API route to fetch listings
// app.get('/api/listings', async (req, res) => {
//   try {
//     if (!db) {
//       console.error('Database connection not established');
//       return res.status(500).json({ error: 'Database connection error' });
//     }
    
//     // Fetch listings from the database
//     const listings = await db.collection('listings').find({}).toArray();
    
//     if (listings.length > 0) {
//       return res.json(listings);
//     } else {
//       return res.status(404).json({ error: 'No listings found' });
//     }
//   } catch (err) {
//     console.error('Error fetching listings:', err);
//     return res.status(500).json({ error: 'Failed to fetch listings' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });







// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const authRoutes = require('./routes/auth');  // Routes for authentication
const profileRoutes = require('./routes/profile');  // Protected profile route
const mongoose = require('mongoose');
const Listing = require('./models/Listing');  // Import the Listing model
require('dotenv').config(); 
const app = express();
const port = 3001; // Ensure this matches the API port you're using in React

// Middleware to enable CORS for cross-origin requests
app.use(cors());
app.use(express.json()); // To parse JSON bodies in POST requests

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes like login, register
app.use('/api/user', profileRoutes);  // Protected routes like profile (secured with JWT)




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
