// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Search from './components/Search';
// import Categories from './components/Categories';
// import ListingsGrid from './components/ListingsGrid';
// import Loading from './components/Loading';
// import Footer from './components/Footer';
// import ListingDetails from './components/ListingDetails';
// import BookingPage from './components/BookingPage';
// import SignUp from './components/SignUp'; // Import SignUp component
// import Login from './components/Login'; // Import Login component
// import AdminDashboard from './components/AdminDashboard';
// import './App.css';

// function App() {
//   const [loading, setLoading] = useState(true); // State to control the loading screen
//   const [listings, setListings] = useState([]); // State to hold the listings data

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/listings');
//         const data = await response.json();
//         console.log('Fetched Listings:', data); // Verify the data here
//         setListings(data); // Set the listings state
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching listings:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Render the Loading screen for 3 seconds and then show the main content
//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar Component */}
//         <header className="navbar-container">
//           <Navbar />
//         </header>

//         {/* Main Content */}
//         <main className="app__content">
//           <Routes>
//             {/* Home Page with Listings Grid */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <section className="search-container">
//                     <Search />
//                   </section>
//                   <section className="categories-container">
//                     <Categories />
//                   </section>
//                   <section className="listings-container">
//                     <ListingsGrid listings={listings} />
//                   </section>
//                 </>
//               }
//             />

//             {/* Listing Details Page */}
//             <Route path="/listing/:id" element={<ListingDetails />} />

//             {/* Booking Page */}
//             <Route path="/booking/:id" element={<BookingPage />} />

//             {/* SignUp Page */}
//             <Route path="/SignUp" element={<SignUp />} />

//             {/* Login Page */}
//             <Route path="/Login" element={<Login />} />
//           </Routes>
//         </main>

//         {/* Footer Component */}
//         <footer className="footer-container">
//           <Footer />
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;















import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Categories from './components/Categories';
import ListingsGrid from './components/ListingsGrid';
import Loading from './components/Loading';
import Footer from './components/Footer';
import ListingDetails from './components/ListingDetails';
import BookingPage from './components/BookingPage';
import SignUp from './components/SignUp'; // Import SignUp component
import Login from './components/Login'; // Import Login component
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); // State to control the loading screen
  const [listings, setListings] = useState([]); // State to hold the listings data
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true'); // Check if the user is an admin

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/listings');
        const data = await response.json();
        console.log('Fetched Listings:', data); // Verify the data here
        setListings(data); // Set the listings state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render the Loading screen for 3 seconds and then show the main content
  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <header className="navbar-container">
          <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        </header>

        {/* Main Content */}
        <main className="app__content">
          <Routes>
            {/* Home Page with Listings Grid */}
            <Route
              path="/"
              element={
                <>
                  <section className="search-container">
                    <Search />
                  </section>
                  <section className="categories-container">
                    <Categories />
                  </section>
                  <section className="listings-container">
                    <ListingsGrid listings={listings} />
                  </section>
                </>
              }
            />

            {/* Listing Details Page */}
            <Route path="/listing/:id" element={<ListingDetails />} />

            {/* Booking Page */}
            <Route path="/booking/:id" element={<BookingPage />} />

            {/* SignUp Page */}
            <Route path="/signup" element={<SignUp />} />

            {/* Login Page */}
            <Route path="/login" element={<Login />} />

            {/* Admin Dashboard Page (Only for Admin) */}
            {isAdmin && (
              <Route path="/admin" element={<AdminDashboard />} />
            )}

            {/* Redirect if no route matches */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>

        {/* Footer Component */}
        <footer className="footer-container">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
