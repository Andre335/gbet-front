import React, { Component } from 'react';
import './App.css';
import GbetSide from './components/GbetSide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GbetSide className="gbet-sidebar"/>
      </div>
    );
  }
}

export default App;
