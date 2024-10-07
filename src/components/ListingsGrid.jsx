import React from 'react';
import listingsData from './cardData';  // Import your mock data

const ListingsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"> {/* Added padding */}
      {listingsData.map(listing => (
        <div key={listing.id} className="card border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" /> {/* Adjusted image styling */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{listing.title}</h3>
            <p className="text-gray-600">{listing.type}</p>
            <p className="text-gray-700">Guests: {listing.guests}</p>
            <p className="font-bold">${listing.price} per night</p>
            <p className="text-yellow-500">Rating: {listing.rating} / 5</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingsGrid;
