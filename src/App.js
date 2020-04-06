import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
