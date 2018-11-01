import React, { Component } from 'react';
import './App.css';
import LiveList from './components/LiveList';
import GbetNav from './components/GbetNav';
import GbetSide from './components/GbetSide';

class App extends Component {
  constructor() {
      super();
      this.state = {
          lives: [{title: "Title 1", description: "Description 1", owner: "Owner 1", date: "23-10-2018", bets: [{in_favor: true}, {in_favor: false}]},
                  {title: "Title 2", description: "Description 2", owner: "Owner 2", date: "24-10-2018", bets: [{in_favor: true}]},
                  {title: "Title 3", description: "Description 3", owner: "Owner 3", date: "25-10-2018", bets: [{in_favor: false}, {in_favor: false}, {in_favor: true}, {in_favor: false}]}]
      };
  }

  render() {
    return (
      <div className="App">
        <GbetSide className="gbet-sidebar" lives={this.state.lives}/>
      </div>
    );
  }
}

export default App;
