import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Categories from './components/Categories';
import ListingsGrid from './components/ListingsGrid';
import Loading from './components/Loading';
import Footer from './components/Footer';
import ListingDetails from './components/ListingDetails';
import GiftCards from './components/GiftCards';
import BookingPage from './components/BookingPage';
import SignUp from './components/SignUp'; 
import Login from './components/Login'; 
import AdminDashboard from './components/AdminDashboard'; 
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); 
  const [listings, setListings] = useState([]); 
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/listings');
        const data = await response.json();
        console.log('Fetched Listings:', data); 
        setListings(data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="App">
        
        <header className="navbar-container">
          <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        </header>

       
        <main className="app__content">
          <Routes>
            
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

            
            <Route path="/listing/:id" element={<ListingDetails />} />

            
            <Route path="/booking/:id" element={<BookingPage />} />

            <Route path="/gift-cards" component={GiftCards} />

            
            <Route path="/signup" element={<SignUp />} />

          
            <Route path="/login" element={<Login />} />

          
            {isAdmin && (
              <Route path="/admin" element={<AdminDashboard />} />
            )}

            
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>

        
        <footer className="footer-container">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
