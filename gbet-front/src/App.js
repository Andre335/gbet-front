import React, { Component } from 'react';
import './App.css';
import GbetSide from './components/GbetSide';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { Router, Route } from 'react-router-dom';
import history from './util/history.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route path="/Login" component={LoginPage}/>
            <Route path="/Register" component={RegisterPage}/>
            <Route path="/Home" component={GbetSide}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
