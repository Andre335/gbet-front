import React, { Component } from 'react';
import './axios-interceptor.js';
import './App.css';
import GbetSide from './components/GbetSide';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { Router, Route } from 'react-router-dom';
import history from './util/history.js';
import {withCookies} from 'react-cookie';
import CalendarList from './components/CalendarList';

class App extends Component {
  constructor() {
    super();
    this.logUser = this.logUser.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      user: null
    }
  }

  logUser(user) {
    this.setState({ user: user });
  }

  logOut() {
    this.setState({ user: null});
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" render={(props) => <LoginPage {...props} logUser={this.logUser}/>}/>
            <Route path="/Login" render={(props) => <LoginPage {...props} logUser={this.logUser}/>}/>
            <Route path="/Register" component={RegisterPage}/>
            <Route path="/Home" render={(props) => <GbetSide {...props} user={this.state.user} logOut={this.logOut}/>}/>
            <Route path="/Calendar" component={CalendarList}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default withCookies(App);
