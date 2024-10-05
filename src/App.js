import React from 'react';
import Navbar from './Navbar';  // Import the Navbar component
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Render the Navbar */}
      <Navbar />
      
      {/* Rest of your app can go here */}
      <h1>Welcome to Airbnb Clone</h1>
      <p>Explore your next stay!</p>
    </div>
  );
}

export default App;
