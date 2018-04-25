import React, { Component } from 'react';
import DogContainer from './Components/DogContainer/index.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Awesome husky's </h2>
        <DogContainer />
      </div>
    );
  }
}

export default App;
