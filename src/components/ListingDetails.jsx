
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import './ListingDetails.css';

function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [bookingStatus, setBookingStatus] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    

    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/listings/${id}`);
        if (response.ok) {
          const data = await response.json();
          setListing(data);

          if (data.booking) {
            setIsBooked(true);
          }
        } else {
          throw new Error('Listing not found');
        }
      } catch (error) {
        console.error('Error fetching listing details:', error.message);
        alert('Error fetching listing details: ' + error.message);
      }
    };

    fetchListingDetails();

  

  }, [id]);

  useEffect(() => {
 
    if (checkInDate && checkOutDate && listing) {
      const startDate = new Date(checkInDate);
      const endDate = new Date(checkOutDate);
      const days = (endDate - startDate) / (1000 * 60 * 60 * 24);

      if (days > 0) {
        setTotalPrice(days * listing.pricePerNight);
      } else {
        setTotalPrice(0);
      }
    }
  }, [checkInDate, checkOutDate, listing]);

  const handleBooking = async () => {
    try {
      if (isBooked) {
        alert('This listing is already booked.');
        return;
      }

      if (!checkInDate || !checkOutDate) {
        alert('Please select check-in and check-out dates.');
        return;
      }


   

      const bookingDetails = {
        listingId: id,
        checkInDate,
        checkOutDate,
        guests,
      };
      
      const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Booking confirmed successfully!');
        setBookingStatus('Booking confirmed successfully!');
        setIsBooked(true);
      } else {
        alert('Error confirming booking: ' + data.message);
      }
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Error confirming booking');
    }
  };

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
        <div className="listing-details-item">
          <strong>Total Price:</strong> <span>${totalPrice}</span>
        </div>
      </div>

      <div className="booking-form">
        <form onSubmit={(e) => { e.preventDefault(); handleBooking(); }}>
          <div className="form-group">
            <label htmlFor="checkInDate">Check-In Date:</label>
            <input 
              type="date" 
              id="checkInDate" 
              value={checkInDate} 
              onChange={(e) => setCheckInDate(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Check-Out Date:</label>
            <input 
              type="date" 
              id="checkOutDate" 
              value={checkOutDate} 
              onChange={(e) => setCheckOutDate(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests:</label>
            <input 
              type="number" 
              id="guests" 
              value={guests} 
              onChange={(e) => setGuests(e.target.value)} 
              min="1" 
              max={listing.guests} 
              required 
            />
          </div>
          <button type="submit" className="book-now-button">
            {/* {isBooked ? 'Already Booked' : 'Book Now'} */}
            {isBooked ? 'Already Booked' : 'Book Now'} 
            
          </button>
        </form>
      </div>

      {bookingStatus && <div className="booking-status">{bookingStatus}</div>}
    </div>
  );
}

export default ListingDetails;
