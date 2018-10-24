import React, { Component } from 'react';
import {Line} from 'rc-progress';

class BetProgressBar extends Component {
    render() {
        return(
            <div className="progress-container">
                <Line percent={(this.props.bets_in_favor/this.props.bets_total)*100} 
                      strokeWidth="2" strokeColor="#000000"/>
            </div>
        )
    }
}

export default BetProgressBar;