import React, { Component } from 'react';
import Nav from './components/Nav';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Nav />
        <FoodJokes />
      </div>
    );
  }
}

export default App;
