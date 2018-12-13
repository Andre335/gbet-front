import React, {Component} from 'react';
import axios from 'axios';

class CalendarList extends Component {
    constructor() {
        super();
        this.state = {
            favourites: [],
            owner: "5bfddd2e9b2606180d0929aa"
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/calendar/owner/' + this.state.owner + '/favourites').then(res => {
            this.setState({ favourites: res.data });
        });
    }

    render() {

        return(
            <div>
                {this.state.favourites.length > 0 ? "Has Favourite Lives" : "Hasn't Favourite Lives"}
            </div>
        )
    }
}

export default CalendarList;