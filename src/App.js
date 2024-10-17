import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import './index.css';
import Categories from './components/Categories';
import ListingsGrid from './components/ListingsGrid';
import Loading from './components/Loading';
import Footer from './components/Footer';  // Import Footer component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);  // State to control the loading screen
  const category = "Luxury";  // Category for ListingsGrid

  // Simulate loading time for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);  // Display loading screen for 3 seconds

    return () => clearTimeout(timer);  // Clean up the timer
  }, []);

  // Render the Loading screen for 3 seconds and then show the main content
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      {/* Navbar Component */}
      <header className="navbar-container">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="app__content">
        {/* Search Section */}
        <section className="search-container">
          <Search />
        </section>

        {/* Categories Section */}
        <section className="categories-container">
          <Categories />
        </section>

        {/* Listings Grid Section */}
        <section className="listings-container">
          <ListingsGrid category={category} /> {/* Pass the category prop */}
        </section>
      </main>

      {/* Footer Component */}
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
