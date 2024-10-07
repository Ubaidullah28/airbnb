import React from 'react';
import Navbar from './components/Navbar';  // Ensure the path is correct
import Search from './components/Search';  // Import the Search component
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Render the Navbar */}
      <Navbar />
      
      <div className="app__content">
        {/* Render the Search component below the Navbar */}
        <Search />
      </div>
    </div>
  );
}

export default App;
