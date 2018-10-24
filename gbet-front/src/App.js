import React, { Component } from 'react';
import './App.css';
import LiveList from './components/LiveList';

class App extends Component {
  constructor() {
      super();
      this.state = {
          lives: [{title: "Title 1", description: "Description 1", owner: "Owner 1", date: "23-10-2018", bets: [{in_favor: true}, {in_favor: false}]},
                  {title: "Title 2", description: "Description 2", owner: "Owner 2", date: "24-10-2018", bets: [{in_favor: true}, {in_favor: false}]}]
      };
  }

  render() {
    return (
      <div className="App">
        <LiveList className="live-list" lives={this.state.lives}/>
      </div>
    );
  }
}

export default App;
