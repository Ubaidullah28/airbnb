// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ListingsGrid from './ListingsGrid'; // Import ListingsGrid component
// import Categories from './Categories'; // Import Categories component

// const AdminDashboard = () => {
//   // State for listing details
//   const [listingDetails, setListingDetails] = useState({
//     title: "",
//     location: "",
//     type: "",
//     category: "",
//     pricePerNight: "",
//     amenities: "",
//     guests: "",
//     bedrooms: "",
//     bathrooms: "",
//     images: "",
//   });

//   // State for bookings
//   const [bookings, setBookings] = useState([]);

//   // State for error handling
//   const [error, setError] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setListingDetails({ ...listingDetails, [e.target.name]: e.target.value });
//   };

//   // Handle adding a new listing
//   const handleAddListing = async () => {
//     try {
//       const amenitiesArray = listingDetails.amenities.split(',').map((item) => item.trim());
//       const imagesArray = listingDetails.images.split(',').map((url) => url.trim());

//       const response = await fetch('http://localhost:3001/api/admin/listings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...listingDetails, amenities: amenitiesArray, images: imagesArray }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         setListingDetails({
//           title: "",
//           location: "",
//           type: "",
//           category: "",
//           pricePerNight: "",
//           amenities: "",
//           guests: "",
//           bedrooms: "",
//           bathrooms: "",
//           images: "",
//         });
//         setError("");
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error("Error adding listing:", error);
//       setError("Failed to add listing. Check the console for details.");
//     }
//   };

//   return (
//     <div className="admin-dashboard p-4">
//       <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>

//       {/* Listings Section */}
//       <div className="listings-container">
//         <ListingsGrid />
//       </div>

//       {/* Add New Listing */}
//       <div className="listings-container">
//         <h3 className="text-lg font-medium mb-2">Add New Listing</h3>
//         <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[800px] mx-auto">
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={listingDetails.title}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={listingDetails.location}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="text"
//             name="type"
//             placeholder="Type"
//             value={listingDetails.type}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={listingDetails.category}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="number"
//             name="pricePerNight"
//             placeholder="Price Per Night"
//             value={listingDetails.pricePerNight}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="text"
//             name="amenities"
//             placeholder="Amenities (comma-separated)"
//             value={listingDetails.amenities}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="number"
//             name="guests"
//             placeholder="Guests"
//             value={listingDetails.guests}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="number"
//             name="bedrooms"
//             placeholder="Bedrooms"
//             value={listingDetails.bedrooms}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="number"
//             name="bathrooms"
//             placeholder="Bathrooms"
//             value={listingDetails.bathrooms}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//           <input
//             type="text"
//             name="images"
//             placeholder="Images (comma-separated URLs)"
//             value={listingDetails.images}
//             onChange={handleChange}
//             className="border p-1 rounded w-full"
//           />
//         </form>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//         <button
//           type="button"
//           onClick={handleAddListing}
//           className="bg-blue-500 text-white py-2 px-4 rounded mt-4 max-w-[200px] mx-auto block"
//         >
//           Add Listing
//         </button>
//       </div>

//       {/* Bookings Section */}
//       <div className="bookings-section">
//         <h3 className="text-lg font-medium mb-2">Bookings</h3>
//         <ul className="list-disc pl-6">
//           {bookings.map((booking) => (
//             <li key={booking._id}>
//               {booking.customerName} - {booking.date}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;












import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ListingsGrid from './ListingsGrid'; // Import ListingsGrid component
import Categories from './Categories'; // Import Categories component
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  //const [username, setUsername] = useState(""); // Admin username
  //const [password, setPassword] = useState(""); // Admin password
  const [error, setError] = useState(""); // State for error handling
  
  const [listingDetails, setListingDetails] = useState({
    title: "",
    location: "",
    type: "",
    category: "",
    pricePerNight: "",
    amenities: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    images: "",
  });

  const [bookings, setBookings] = useState([]); // State for bookings
  const navigate = useNavigate(); // Hook to handle redirects
  const [listings, setListings] = useState([]);  // State to store listings
  const [showBookings, setShowBookings] = useState(false);

 // State for login form
 const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  

  // Handle login form submission
  const handleLogin = () => {
    const storedUsername = "admin"; // Replace with stored admin username
    const storedPassword = "admin123"; // Replace with stored admin password

    if (login.username === storedUsername && login.password === storedPassword) {
      setIsAuthenticated(true);
    } else {
      setError("Invalid email or password!!!");
    }
  };

  const handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');  // Or any other logic you use
  navigate('/');
  };

  // Handle input change for listing form
  const handleChange = (e) => {
    setListingDetails({ ...listingDetails, [e.target.name]: e.target.value });
  };

  // Handle adding a new listing
  const handleAddListing = async () => {
    try {
      const amenitiesArray = listingDetails.amenities.split(',').map((item) => item.trim());
      const imagesArray = listingDetails.images.split(',').map((url) => url.trim());

      const response = await fetch('http://localhost:3001/api/admin/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...listingDetails, amenities: amenitiesArray, images: imagesArray }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setListingDetails({
          title: "",
          location: "",
          type: "",
          category: "",
          pricePerNight: "",
          amenities: "",
          guests: "",
          bedrooms: "",
          bathrooms: "",
          images: "",
        });
        setError("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error adding listing:", error);
      setError("Failed to add listing. Check the console for details.");
    }
  };

  const toggleBookings = () => {
    setShowBookings(!showBookings);
};


  const handleDeleteListing = async (listingId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/listings/${listingId}`);
      if (response.status === 200) {
        alert('Listing deleted successfully');
        setListings(listings.filter((listing) => listing._id !== listingId)); // Remove deleted listing from state
      } else {
        alert('Failed to delete listing');
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
      alert('Failed to delete listing');
    }
  };

  const renderBookings = (bookings) => {
    return bookings.map((booking) => (
        <div key={booking._id}>
            <p>Customer: {booking.guests}</p>
            <p>Date: {new Date(booking.checkInDate).toLocaleDateString()} - {new Date(booking.checkOutDate).toLocaleDateString()}</p>
            <p>Listing: {booking.listingId}</p>
        </div>
    ));
};

const fetchBookings = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/bookings');
        setBookings(response.data); // Save bookings in state
    } catch (error) {
        console.error('Error fetching bookings:', error.response?.status || error.message);
        console.log('Detailed error:', error.response?.data || error);
    }
};
useEffect(() => {
    fetchBookings();
}, []);


  return (
    <div className="admin-dashboard p-4">
      {!isAuthenticated ? (
        // Login Form
        <div className="login-container max-w-[400px] mx-auto">
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              value={login.username}
              onChange={handleLoginChange}
              placeholder="Username"
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleLoginChange}
              placeholder="Password"
              className="border p-2 rounded w-full mb-4"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        // Admin Dashboard
        <div>
          <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded mb-4"
          >
            Logout
          </button>

           {/* Fetch Bookings */}
           <div className="bookings-section">
            <h3 className="text-lg font-medium mb-2"></h3>
            <button onClick={toggleBookings} className="bg-gray-500 text-white py-2 px-4 rounded mb-4">
            {showBookings ? 'Hide Bookings' : 'Show Bookings'}
            
            </button>
            
            {showBookings &&(
             <div>   
            {bookings.length > 0 ? renderBookings(bookings) : <p>No bookings available</p>}
            </div>
            //   {/* {bookings.map((booking) => (
            //     <li key={booking._id}>
            //       {`Customer: ${booking.customerName}, Date: ${booking.date}, Listing: ${booking.listingTitle}`}
            //     </li>
            //   ))} */}
            ) }
          </div>

          {/* Listings Section */}
          <div className="listings-container">
            <ListingsGrid listings={listings} onDelete={handleDeleteListing} />
            
          </div>

          {/* Add New Listing */}
          <div className="listings-container">
            <h3 className="text-lg font-medium mb-2">Add New Listing</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[800px] mx-auto">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={listingDetails.title}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={listingDetails.location}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="text"
                name="type"
                placeholder="Type"
                value={listingDetails.type}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={listingDetails.category}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="number"
                name="pricePerNight"
                placeholder="Price Per Night"
                value={listingDetails.pricePerNight}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="text"
                name="amenities"
                placeholder="Amenities (comma-separated)"
                value={listingDetails.amenities}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="number"
                name="guests"
                placeholder="Guests"
                value={listingDetails.guests}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="number"
                name="bedrooms"
                placeholder="Bedrooms"
                value={listingDetails.bedrooms}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="number"
                name="bathrooms"
                placeholder="Bathrooms"
                value={listingDetails.bathrooms}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
              <input
                type="text"
                name="images"
                placeholder="Images (comma-separated URLs)"
                value={listingDetails.images}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              type="button"
              onClick={handleAddListing}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 max-w-[200px] mx-auto block"
            >
              Add Listing
            </button>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

