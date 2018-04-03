import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './component/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          
        
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
