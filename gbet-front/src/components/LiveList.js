import React, { Component } from 'react';
import LiveItem from './LiveItem';
import '../css/LiveList.css';
import List from '@material-ui/core/List';

class LiveList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.setState({
            lives: [{title: "Title 1", description: "Description 1", owner: "Owner 1", date: "23-10-2018", bets: [{in_favor: true}, {in_favor: false}]},
                    {title: "Title 2", description: "Description 2", owner: "Owner 2", date: "24-10-2018", bets: [{in_favor: true}]},
                    {title: "Title 3", description: "Description 3", owner: "Owner 3", date: "25-10-2018", bets: [{in_favor: false}, {in_favor: false}, {in_favor: true}, {in_favor: false}]}]
        });
    }
    
    render() {
        var RenderListItens = [];
        for(var i = 0; i < this.state.lives.length; i++) {
            RenderListItens.push(<LiveItem live={this.state.lives[i]}/>);
        }

        return(
            <div className="live-list-container">
                <List className="LiveList">
                    {
                        RenderListItens
                    }
                </List>
            </div>
        )
    }
}

export default LiveList;