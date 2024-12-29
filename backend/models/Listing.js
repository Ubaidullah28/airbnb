const mongoose = require('mongoose');
const mongooseSequence = require('mongoose-sequence')(mongoose);

const listingSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: false },
  title: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  amenities: { type: [String], required: false },
  guests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  pricePerNight: { type: Number, required: true },
  images: { type: [String], required: true },
}, { timestamps: true });

// Apply the plugin to the id field with a starting value of 26
listingSchema.plugin(mongooseSequence, {
    inc_field: 'id', // Name of the field to increment
    start_seq: 21,   // Starting value for the increment
  });

module.exports = mongoose.model('Listing', listingSchema);

















