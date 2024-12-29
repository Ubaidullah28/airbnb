const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET /api/listings
router.get('/', async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});


router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findOne({ id: req.params.id}); // Fetch listing by MongoDB ObjectId
    if (!listing) {
      return res.status(404).send('Listing not found');
    }
    res.json(listing); // Return the listing details
  } catch (error) {
    console.error('Error fetching listing:', error); // Log the error for better debugging
    res.status(500).json({ message: 'Error fetching listing details' }); // Return a server error
  }
});






// GET /api/listings/search?query=<location>
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const listings = await Listing.find({
      location: new RegExp(query, 'i'), // Search for listings with matching location
    });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching search results' });
  }
});


module.exports = router;
