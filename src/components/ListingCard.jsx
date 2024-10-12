  import React from 'react';
  import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

  const ListingCard = ({ listing }) => {
    const fullStars = Math.floor(listing.rating); // Full stars count
    const hasHalfStar = listing.rating % 1 >= 0.5; // Check for half star

    return (
      <div className="overflow-hidden">
        <img
          src={listing.image}
          loading="lazy"
          alt={listing.title}
          className="m-1.5 h-[240px] w-[95%] border rounded-xl hover:shadow-xl transition duration-200"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{listing.title}</h2>
          <p className="text-gray-500">{listing.type}</p>
          <p className="text-gray-700">Guests: {listing.guests}</p>
          <p className="font-bold text-lg">${listing.price} / night</p>
          <div className="flex">
            {/* Render full stars */}
            {[...Array(fullStars)].map((_, index) => (
              <FaStar
                size={22}
                key={`full-${index}`}
                className="text-yellow-500"
              />
            ))}

            {/* Render half star if applicable */}
            {hasHalfStar && (
              <FaStarHalfAlt
                size={22}
                key="half"
                className="text-yellow-500"
              />
            )}

            {/* Render empty stars */}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
              <FaStar
                size={22}
                key={`empty-${index}`}
                className="text-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ListingCard;
