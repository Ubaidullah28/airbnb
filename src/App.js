import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      {}
      <header className="navbar-container">
        <Navbar />
      </header>

      {}
      <main className="app__content">
        <section className="search-container">
          <Search />
        </section>

        {}
        <section className="categories-container">
          <Categories />
        </section>
      </main>
    </div>
  );
}

export default App;
