const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET /api/listings
router.get('/', async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

// GET /api/listings/:id
router.get('/:id', async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) return res.status(404).send('Listing not found');
  res.json(listing);
});

// GET /api/listings/search?query=<location>
router.get('/search', async (req, res) => {
  const { query } = req.query;
  const listings = await Listing.find({ location: new RegExp(query, 'i') });
  res.json(listings);
});

module.exports = router;
