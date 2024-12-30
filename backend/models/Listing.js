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

listingSchema.plugin(mongooseSequence, {
    inc_field: 'id',
    start_seq: 21,
  });

module.exports = mongoose.model('Listing', listingSchema);

















