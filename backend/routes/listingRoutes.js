const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

router.get('/', async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});


router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findOne({ id: req.params.id});
    if (!listing) {
      return res.status(404).send('Listing not found');
    }
    res.json(listing);
  } catch (error) {
    console.error('Error fetching listing:', error); 
    res.status(500).json({ message: 'Error fetching listing details' }); 
  }
});

router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const listings = await Listing.find({
      location: new RegExp(query, 'i'),
    });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching search results' });
  }
});


module.exports = router;
