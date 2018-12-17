import React, { Component } from 'react';
import './App.css';

import Header from './components/header'
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Work />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
