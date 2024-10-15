import React from 'react';
import listingsData from './cardData';  // Import your mock data
import ListingCard from './ListingCard';  // Ensure this path is correct

const ListingsGrid = () => {
  return (
    <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"> {/* Added margin-top */}
      {listingsData.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsGrid;
