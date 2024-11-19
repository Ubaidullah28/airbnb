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

function ListingsGrid({ listings }) {
  console.log("Listings in Grid:", listings); // Log listings passed to ListingsGrid
  return (
    <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-item">
          <img
            src={listing.images[0]} // Assuming the first image in the array is used
            alt={listing.title}
            // width="100%" // Or any fixed width/height
            // height="auto"
          />
          <h2>{listing.title}</h2>
          <p>{listing.location}</p>
          <p>${listing.pricePerNight} / night</p>
        </div>
      ))}
    </div>
  );
}


export default ListingsGrid;
