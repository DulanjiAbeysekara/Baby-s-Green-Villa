import React from 'react';
// import logo from './logo.svg'; // Uncomment if you use the logo
import './App.css'; // Ensure this path is correct
import Navbar from './Components/Navbar/Navbar'; // Ensure Navbar component exists at this path

function App() {
  return (
    <div className="app bg-gray-50">
      <Navbar />
    </div>
  );
}

export default App;
