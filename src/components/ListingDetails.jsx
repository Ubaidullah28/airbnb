// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function ListingDetails() {
//   const { id } = useParams(); // Get the listing id from the URL
//   const navigate = useNavigate(); // Use useNavigate for navigation
//   const [listing, setListing] = useState(null);

//   useEffect(() => {
//     // Fetch the listing details from the server using the id
//     const fetchListingDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/listings/${id}`);
//         const data = await response.json();
//         setListing(data);
//       } catch (error) {
//         console.error("Error fetching listing details:", error);
//       }
//     };

//     fetchListingDetails();
//   }, [id]);

//   if (!listing) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="listing-details">
//       <h1>{listing.title}</h1>
//       <img src={listing.images[0]} alt={listing.title} />
//       <p>{listing.location}</p>
//       <p>Type: {listing.type}</p>
//       <p>Amenities: {listing.amenities.join(", ")}</p>
//       <p>Guests: {listing.guests}</p>
//       <p>Bedrooms: {listing.bedrooms}</p>
//       <p>Bathrooms: {listing.bathrooms}</p>
//       <p>Price per night: ${listing.pricePerNight}</p>

//       {/* Book Now Button */}
//       <button onClick={() => navigate(`/booking/${listing.id}`)}>Book Now</button>
//     </div>
//   );
// }

// export default ListingDetails;









// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function ListingDetails() {
//   const { id } = useParams(); // Get the listing id from the URL
//   const navigate = useNavigate(); // Use useNavigate for navigation
//   const [listing, setListing] = useState(null);

//   useEffect(() => {
//     // Fetch the listing details from the server using the id
//     const fetchListingDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/listings/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setListing(data);
//         } else {
//           throw new Error('Listing not found');
//         }
//       } catch (error) {
//         console.error("Error fetching listing details:", error.message);
//         alert('Error fetching listing details: ' + error.message);
//       }
//     };

//     fetchListingDetails();
//   }, [id]);

//   if (!listing) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="listing-details">
//       <h1>{listing.title}</h1>
//       <img src={listing.images[0]} alt={listing.title} />
//       <p>{listing.location}</p>
//       <p>Type: {listing.type}</p>
//       <p>Amenities: {listing.amenities.join(", ")}</p>
//       <p>Guests: {listing.guests}</p>
//       <p>Bedrooms: {listing.bedrooms}</p>
//       <p>Bathrooms: {listing.bathrooms}</p>
//       <p>Price per night: ${listing.pricePerNight}</p>

//       {/* Book Now Button */}
//       <button onClick={() => navigate(`/booking/${listing.id}`)}>Book Now</button>
//     </div>
//   );
// }

// export default ListingDetails;




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ListingDetails.css'; // Import CSS for better styling

function ListingDetails() {
  const { id } = useParams(); // Get the listing id from the URL
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Fetch the listing details from the server using the id
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/listings/${id}`);
        if (response.ok) {
          const data = await response.json();
          setListing(data);
        } else {
          throw new Error('Listing not found');
        }
      } catch (error) {
        console.error("Error fetching listing details:", error.message);
        alert('Error fetching listing details: ' + error.message);
      }
    };

    fetchListingDetails();
  }, [id]);

  if (!listing) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="listing-details-container">
      <div className="listing-header">
        <h1 className="listing-title">{listing.title}</h1>
        <p className="listing-location">{listing.location}</p>
      </div>

      <div className="listing-image">
        <img src={listing.images[0]} alt={listing.title} className="listing-image-main" />
      </div>

      <div className="listing-info">
        <div className="listing-details-item">
          <strong>Type:</strong> <span>{listing.type}</span>
        </div>
        <div className="listing-details-item">
          <strong>Amenities:</strong> <span>{listing.amenities.join(", ")}</span>
        </div>
        <div className="listing-details-item">
          <strong>Guests:</strong> <span>{listing.guests}</span>
        </div>
        <div className="listing-details-item">
          <strong>Bedrooms:</strong> <span>{listing.bedrooms}</span>
        </div>
        <div className="listing-details-item">
          <strong>Bathrooms:</strong> <span>{listing.bathrooms}</span>
        </div>
        <div className="listing-details-item">
          <strong>Price per night:</strong> <span>${listing.pricePerNight}</span>
        </div>
      </div>

      <div className="booking-button">
        <button onClick={() => navigate(`/booking/${listing.id}`)} className="book-now-button">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ListingDetails;
