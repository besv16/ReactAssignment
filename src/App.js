import React, { Component } from 'react';
// import logo from './logo.svg';
// import WizardContainer from './Components/WizardContainer/index.js';
import DogContainer from './Components/DogContainer/index.js';
import './App.css';

//const API_KEY = 'AIzaSyDxBpyhVYhuYUDT8vMB6YiYo_BKkxGVv6A';

class App extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className="App">
        <DogContainer />
      </div>
    );
  }
}

export default App;
