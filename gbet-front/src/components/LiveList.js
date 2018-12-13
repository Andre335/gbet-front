import React, { Component } from 'react';
import LiveItem from './LiveItem';
import '../css/LiveList.css';
import List from '@material-ui/core/List';
import axios from 'axios';
import history from '../util/history';

class LiveList extends Component {
    constructor(props) {
        super(props);
        this.handleFavourite = this.handleFavourite.bind(this);
        this.handleBet = this.handleBet.bind(this);
        this.state = {
            lives: [],
            favourites: []
        }
    }

    handleFavourite(live_id) {
        const newFavourites = this.state.favourites.includes(live_id) ?
                    this.state.favourites.filter(fav => fav !== live_id) : [...this.state.favourites, live_id];

        axios.put('http://localhost:3001/calendar/5bfe03c36656ac241d1774c3', {favourites: newFavourites}).then(res => {
            this.setState({ favourites: newFavourites });
        });
    }

    handleBet(infavor, val, live_id) {
        const betObj = {
            in_favor: infavor,
            value: val,
            live: live_id,
            owner: "5bfddd2e9b2606180d0929aa"
        }

        axios.post('http://localhost:3001/bet', betObj).then(res => {
            var updatedLives = [];
            for (var i = 0; i < this.state.lives.length; i++) {
                if (this.state.lives[i]._id === live_id) {
                    var updatedBets = [...this.state.lives[i].bets, res.data];
                    var updatedLive = this.state.lives[i];
                    updatedLive.bets = updatedBets;
                    updatedLives = [...updatedLives, updatedLive];
                } else {
                    updatedLives = [...updatedLives, this.state.lives[i]];
                }
            }
            this.setState({ lives: updatedLives });
        });
    }

    componentDidMount() {
        axios.get('http://localhost:3001/live').then(res => {
            this.setState({ lives: res.data });
        });

        axios.get('http://localhost:3001/calendar/owner/5bfddd2e9b2606180d0929aa/favourites').then(res => {
            this.setState({ favourites: res.data });
        });
    }
    
    render() {
        return(
            <div className="live-list-container">
                <List className="LiveList">
                    {
                        this.state.lives.map(live => <LiveItem live={live} isFavorite={this.state.favourites.includes(live._id)} 
                                                               handleFavourite={this.handleFavourite}
                                                               handleBet={this.handleBet}/>)
                    }
                </List>
            </div>
        )
    }
}

export default LiveList;
