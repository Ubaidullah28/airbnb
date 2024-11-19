import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/listings/${id}`)
      .then(response => response.json())
      .then(data => setListing(data))
      .catch(err => console.error("Error fetching listing details:", err));
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="listing-details">
      <h1>{listing.title}</h1>
      <img src={listing.images[0]} alt={listing.title} />
      <p>Type: {listing.type}</p>
      <p>Location: {listing.location}</p>
      <p>Guests: {listing.guests}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <p>Amenities: {listing.amenities.join(', ')}</p>
      <p>Price per night: {listing.pricePerNight} USD</p>
    </div>
  );
};

export default ListingDetails;
