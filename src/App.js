import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Categories from './components/Categories';
import ListingsGrid from './components/ListingsGrid';
import './App.css';

function App() {
  const category = "Luxury";

  

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
          <ListingsGrid category={category} /> {/* Pass category to ListingsGrid */}
        </section>

        
      </main>
    </div>
  );
}

export default App;
