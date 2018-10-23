import React, { Component } from 'react';
import LiveItem from '../components/LiveItem';
import List from '@material-ui/core/List';

class LiveList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var RenderListItens = [];
        for(var i = 0; i < this.props.lives.length; i++) {
            RenderListItens.push(<LiveItem live={this.props.lives[i]}/>);
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