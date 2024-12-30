// const express = require('express');
// const router = express.Router();
// const Booking = require('../models/Booking'); // Import the Booking model



// router.post('/', async (req, res) => {
//     try {
//       console.log('Incoming booking request:', req.body);
  
//       const { listingId, checkInDate, checkOutDate, guests } = req.body;
  
//       // Directly use listingId as a number
//       const newBooking = new Booking({
//         listingId, // No need for ObjectId conversion
//         checkInDate,
//         checkOutDate,
//         guests,
//       });
  
//       const result = await newBooking.save(); // Save booking to database
//       console.log('Booking saved:', result);
//       res.status(201).json(result);
//     } catch (error) {
//       console.error('Error saving booking:', error);
//       res.status(500).json({ message: 'Error saving booking', error });
//     }
//   });



  

// module.exports = router;





const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Import the Booking model

// POST route for creating a booking
router.post('/', async (req, res) => {
  try {
    console.log('Incoming booking request:', req.body);

    const { listingId, checkInDate, checkOutDate, guests } = req.body;

    // Check if the listing is already booked
    const existingBooking = await Booking.findOne({ listingId });
    
    if (existingBooking) {
      // If there's already a booking for this listing, send an error
      return res.status(400).json({ message: 'This listing is already booked.' });
    }

    // Create a new booking if the listing is not already booked
    const newBooking = new Booking({
      listingId, 
      checkInDate,
      checkOutDate,
      guests,
    });

    const result = await newBooking.save(); // Save booking to the database
    console.log('Booking saved:', result);
    res.status(201).json(result); // Send success response
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Error saving booking', error });
  }
});


// GET route to fetch all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find(); // Fetch all bookings
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});

module.exports = router;
