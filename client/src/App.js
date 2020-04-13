import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.js';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import Products from './components/Products.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/about" exact component={About}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/contact" exact component={Contact}/> 
      </Switch>     
      <Footer />
    </div>
  );
}

export default App;
