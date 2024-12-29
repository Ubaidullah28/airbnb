






















// import React from 'react';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// function ListingsGrid({ listings }) {
//   return (
//     <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
//       {listings.map((listing) => (
//         <div key={listing.id} className="listing-item">
//           <Link to={`/listing/${listing.id}`}>  {/* Add Link to navigate to listing details */}
//           <img src={listing.images} alt={listing.title} />            
          
//             <h2>{listing.title}</h2>
//             <p>{listing.location}</p>
//             <p>${listing.pricePerNight} / night</p>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListingsGrid;






// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// function ListingsGrid({ listings }) {
//   return (
//     <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
//       {listings.map((listing) => (
//         <div key={listing.id} className="listing-item border rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
//           {/* Wrap the content inside a Link for navigation */}
//           <Link to={`/listing/${listing.id}`}>
//             {/* Listing Image */}
//             <img 
//               src={listing.images} 
//               alt={listing.title} 
//               className="w-full h-48 object-cover" 
//             />
//             {/* Listing Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">{listing.title}</h2>
//               <p className="text-sm text-gray-500">{listing.location}</p>
//               <p className="text-sm text-green-600">${listing.pricePerNight} / night</p>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListingsGrid;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListingsGrid = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('/api/listings')
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

  

 
  return (
    <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {listings.map((listing) => (
        <div key={listing._id} className="listing-item border rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto">
          <Link to={`/listing/${listing.id}`} className="listing-link">
          {/* Image at the top */}
          <img src={listing.images[0]} alt={listing.title} className="w-full h-48 object-cover" />
          
          {/* Details below the image */}
          <div className="p-3">
            <h2 className="font-semibold text-lg truncate">{listing.title}</h2>
            <p className="text-sm text-gray-500">{listing.location}</p>
            <p className="text-sm text-gray-500">{listing.type}</p>
            <p className="text-lg font-bold text-gray-900">${listing.pricePerNight} / night</p>
            
            
          
  </div>
  </Link>
        </div>
      ))}
    </div>
  );
};

export default ListingsGrid;
