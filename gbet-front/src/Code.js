import React, { Component } from 'react';

class Code extends Component {
    constructor() {
        super();
        this.state = {
            bold: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            bold: !this.state.bold
        });
    }

    render() {
        return (
            <code onClick={this.handleClick}>
                {this.state.bold ? this.props.plus : ""} {this.props.children}
            </code>
        );
    }
}

export default Code;