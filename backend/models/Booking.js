//  const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   checkInDate: { type: Date, required: true },
//   checkOutDate: { type: Date, required: true },
//   guests: { type: Number, required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Booking', bookingSchema);




const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  listingId: { type: Number, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  guests: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);

