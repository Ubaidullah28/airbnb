import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';

const ListingsGrid = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/listings');
        const data = await response.json();
        
        // Log the data to see the format
        console.log('Fetched data:', data);

        // Ensure listings is an array before setting it
        if (Array.isArray(data)) {
          setListings(data);
        } else {
          console.error('Expected an array but got:', data);
          setListings([]);  // Default to an empty array if data is not an array
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false);
      }
    };
    
    fetchListings();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsGrid;
