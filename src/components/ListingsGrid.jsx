// import React from 'react';
// import listingsData from './cardData';  // Import your mock data
// import ListingCard from './ListingCard';  // Ensure this path is correct

// const ListingsGrid = () => {
//   return (
//     <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"> {/* Added margin-top */}
//       {listingsData.map((listing) => (
//         <ListingCard key={listing.id} listing={listing} />
//       ))}
//     </div>
//   );
// };

// export default ListingsGrid;

























import React, { useEffect, useState } from 'react';

const ListingsGrid = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/listings')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(err => console.error("Error fetching listings:", err));
  }, []);

  return (
    <div className="listings-grid">
      {listings.map(listing => (
        <div key={listing.id} className="listing-card">
          <img src={listing.images[0]} alt={listing.title} />
          <h2>{listing.title}</h2>
          <p>{listing.location}</p>
          <p>{listing.type}</p>
          <p>{listing.pricePerNight} USD/night</p>
          <a href={`/listings/${listing.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default ListingsGrid;
