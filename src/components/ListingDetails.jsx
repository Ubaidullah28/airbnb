import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ListingDetails() {
  const { id } = useParams(); // Get the listing id from the URL
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Fetch the listing details from the server using the id
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/listings/${id}`);
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error("Error fetching listing details:", error);
      }
    };

    fetchListingDetails();
  }, [id]);

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="listing-details">
      <h1>{listing.title}</h1>
      <img src={listing.images[0]} alt={listing.title} />
      <p>{listing.location}</p>
      <p>Type: {listing.type}</p>
      <p>Amenities: {listing.amenities.join(", ")}</p>
      <p>Guests: {listing.guests}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <p>Price per night: ${listing.pricePerNight}</p>

      {/* Book Now Button */}
      <button onClick={() => navigate(`/booking/${listing.id}`)}>Book Now</button>
    </div>
  );
}

export default ListingDetails;





