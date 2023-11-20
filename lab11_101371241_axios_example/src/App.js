import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList.js';
import React, { Component } from 'react';
import './style.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonList />
      </div>
    );
  }
}

export default App;