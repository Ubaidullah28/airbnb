// const express = require('express');
// const router = express.Router();
// const Listing = require('../models/Listing');  // Assuming Listing model is defined
// const Booking = require('../models/Booking');  // Assuming Booking model is defined

// // Admin credentials (hardcoded)
// const ADMIN_USERNAME = 'admin';
// const ADMIN_PASSWORD = 'admin123'; // Change this as needed

// // Middleware for admin authentication
// const authenticateAdmin = (req, res, next) => {
//   const { username, password } = req.body;
//   if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
//     next();  // Proceed to next route
//   } else {
//     res.status(403).json({ message: 'Unauthorized' });
//   }
// };

// // GET /api/admin/listings: Fetch all listings
// router.get('/listings', async (req, res) => {
//   try {
//     const listings = await Listing.find();
//     res.status(200).json(listings);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching listings' });
//   }
// });

// // Define POST route for adding a listing
// router.post('/listings', async (req, res) => {
//     try {
//         console.log('Request received at /listings:', req.body);
//       const { title, description, price } = req.body; // Ensure these match frontend
//       const newListing = new Listing({ title, description, price });
//       await newListing.save();
//       res.status(201).json({ message: 'Listing added successfully', listing: newListing });
//     } catch (error) {
//       res.status(500).json({ message: 'Error adding listing', error });
//     }
//   });
  
//   module.exports = router;

// // DELETE /api/admin/listings/:id: Delete a listing by ID
// router.delete('/listings/:id', authenticateAdmin, async (req, res) => {
//   try {
//     const listing = await Listing.findByIdAndDelete(req.params.id);
//     if (listing) {
//       res.status(200).json({ message: 'Listing deleted' });
//     } else {
//       res.status(404).json({ message: 'Listing not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting listing' });
//   }
// });

// // GET /api/admin/bookings: View all bookings
// router.get('/bookings', async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.status(200).json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching bookings' });
//   }
// });

// module.exports = router;










const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Check if the Listing model is already defined
let Listing;

try {
  Listing = mongoose.model('Listing'); // Try to retrieve the existing model
} catch {
  const listingSchema = new mongoose.Schema({
    title: String,
    location: String,
    type: String,
    category: String,
    amenities: [String],
    guests: Number,
    bedrooms: Number,
    bathrooms: Number,
    pricePerNight: Number,
    images: [String],
  });

  Listing = mongoose.model('Listing', listingSchema); // Define the model if not already defined
}

// Route to add a new listing
router.post('/listings', async (req, res) => {
  try {
    const listing = new Listing(req.body); // Create a new listing from the request body
    await listing.save(); // Save the listing to the database
    res.status(201).json({ message: 'Listing added successfully!' });
  } catch (error) {
    console.error('Error adding listing:', error);
    res.status(500).json({ message: 'Failed to add listing', error });
  }
});

// Delete listing by ID
router.delete('/api/listings/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find and delete the listing by its ID
      const result = await Listing.findByIdAndDelete(id);
  
      // If the listing was not found, return a 404 error
      if (!result) {
        return res.status(404).json({ message: 'Listing not found' });
      }
  
      // Return success message if deletion is successful
      res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
      console.error('Error deleting listing:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Route to get all listings
router.get('/listings', async (req, res) => {
  try {
    const listings = await Listing.find(); // Retrieve all listings
    res.status(200).json(listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Failed to fetch listings', error });
  }
});

// Route to get all bookings (dummy route for now)
router.get('/bookings', async (req, res) => {
  try {
    // Replace with your actual booking logic
    res.status(200).json([{ _id: '123', customerName: 'John Doe', date: '2024-01-01' }]);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings', error });
  }
});

module.exports = router;
