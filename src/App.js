import React, { Component } from 'react';
import './App.css';

import Home from './components/home'
import Header from './components/header'
import Content from './components/content'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
