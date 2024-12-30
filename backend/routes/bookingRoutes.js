const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); 


router.post('/', async (req, res) => {
  try {
    console.log('Incoming booking request:', req.body);

    const { listingId, checkInDate, checkOutDate, guests } = req.body;

    
    const existingBooking = await Booking.findOne({ listingId });
    
    if (existingBooking) {
      
      return res.status(400).json({ message: 'This listing is already booked.' });
    }

   
    const newBooking = new Booking({
      listingId, 
      checkInDate,
      checkOutDate,
      guests,
    });

    const result = await newBooking.save(); 
    console.log('Booking saved:', result);
    res.status(201).json(result); 
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Error saving booking', error });
  }
});



router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find(); 
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});

module.exports = router;
