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























import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function ListingsGrid({ listings }) {
  return (
    <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-item">
          <Link to={`/listing/${listing.id}`}>  {/* Add Link to navigate to listing details */}
          <img src={listing.images} alt={listing.title} />            
          
            <h2>{listing.title}</h2>
            <p>{listing.location}</p>
            <p>${listing.pricePerNight} / night</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListingsGrid;
