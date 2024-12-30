const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
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

  Listing = mongoose.model('Listing', listingSchema);
}

router.post('/listings', async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json({ message: 'Listing added successfully!' });
  } catch (error) {
    console.error('Error adding listing:', error);
    res.status(500).json({ message: 'Failed to add listing', error });
  }
});

router.delete('/api/listings/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      
      const result = await Listing.findByIdAndDelete(id);
  
    
      if (!result) {
        return res.status(404).json({ message: 'Listing not found' });
      }
  
    
      res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
      console.error('Error deleting listing:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

router.get('/listings', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Failed to fetch listings', error });
  }
});

router.get('/bookings', async (req, res) => {
  try {
    
    res.status(200).json([{ _id: '123', customerName: 'John Doe', date: '2024-01-01' }]);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings', error });
  }
});

module.exports = router;
