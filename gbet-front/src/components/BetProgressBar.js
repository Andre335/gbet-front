import React, { Component } from 'react';
import {Line} from 'rc-progress';
import '../css/ProgressBar.css';

class BetProgressBar extends Component {
    constructor() {
        super();
        this.handleColor = this.handleColor.bind(this);
    }

    handleColor(progress) {
        if (progress <= 33) {
            return "#f44262";
        } else if (progress > 33 && progress <= 66) {
            return "#f4eb42";
        } else {
            return "#56f442";
        }
    }

    render() {
        return(
            <div className="progress-container">
                {((this.props.bets_in_favor/this.props.bets_total)*100).toFixed(2)+"%"} <Line className="progress-bar" percent={(this.props.bets_in_favor/this.props.bets_total)*100} 
                      strokeWidth="1" strokeColor={this.handleColor((this.props.bets_in_favor/this.props.bets_total)*100)}/>
            </div>
        )
    }
}

export default BetProgressBar;