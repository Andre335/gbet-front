import React, { Component } from 'react';
import LiveItem from './LiveItem';
import '../css/LiveList.css';
import List from '@material-ui/core/List';

class LiveList extends Component {
    constructor() {
        super();
        this.handleFavourite = this.handleFavourite.bind(this);
        this.state = {
            lives: [{_id: 1, title: "Title 1", description: "Description 1", owner: "Owner 1", date: "23-10-2018", bets: [{in_favor: true}, {in_favor: false}]},
                    {_id: 2, title: "Title 2", description: "Description 2", owner: "Owner 2", date: "24-10-2018", bets: [{in_favor: true}]},
                    {_id: 3, title: "Title 3", description: "Description 3", owner: "Owner 3", date: "25-10-2018", bets: [{in_favor: false}, {in_favor: false}, {in_favor: true}, {in_favor: false}]}],
            favourites: [1, 2]
        }
    }

    handleFavourite(live_id) {
        this.setState(oldState => {
            const newFavourites = this.state.favourites.includes(live_id) ? 
                    oldState.favourites.filter(fav => fav !== live_id) : [...oldState.favourites, live_id];
            return {favourites: newFavourites};
        });
    }

    componentDidMount() {
        // this.setState({
        //     lives: [{title: "Title 1", description: "Description 1", owner: "Owner 1", date: "23-10-2018", bets: [{in_favor: true}, {in_favor: false}]},
        //             {title: "Title 2", description: "Description 2", owner: "Owner 2", date: "24-10-2018", bets: [{in_favor: true}]},
        //             {title: "Title 3", description: "Description 3", owner: "Owner 3", date: "25-10-2018", bets: [{in_favor: false}, {in_favor: false}, {in_favor: true}, {in_favor: false}]}]
        // });
    }
    
    render() {
        return(
            <div className="live-list-container">
                <List className="LiveList">
                    {
                        this.state.lives.map(live => <LiveItem live={live} isFavorite={this.state.favourites.includes(live._id)} handleFavourite={this.handleFavourite}/>)
                    }
                </List>
            </div>
        )
    }
}

export default LiveList;