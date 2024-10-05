import React from 'react';
import Navbar from './components/Navbar';  // Make sure the path is correct
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Render the Navbar */}
      <Navbar />
      
      <div className="app__content">
        <h1>Welcome to Airbnb</h1>
        <p>Explore your next stay!</p>
      </div>
    </div>
  );
}

export default App;
