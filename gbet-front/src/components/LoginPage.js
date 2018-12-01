import React, { Component } from 'react';
import '../css/AuthCss.css';
import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Router, Link } from 'react-router-dom';
import history from '../util/history.js';

class LoginPage extends Component {
    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            user: "",
            pass: ""
        }
    }

    historyPush() {
        history.push('/Register');
    }

    handleLogin() {
        console.log(this.state.user);
        console.log(this.state.pass);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return(
            <div>
                <div>
                    <AppBar title="Login" position='static'>
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                GBet
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <Router history={history}>
                        <MuiThemeProvider>
                            <div>
                                <TextField
                                    label="Username"
                                    floatingLabelText="Username"
                                    value={this.state.user}
                                    onChange={this.handleChange('user')}
                                />
                                <br/>
                                <TextField
                                    type="password"
                                    label="Password"
                                    floatingLabelText="Password"
                                    value={this.state.pass}
                                    onChange={this.handleChange('pass')}
                                />
                                <br/>
                                <Button variant="contained" color="primary" onClick={this.handleLogin}> Submit </Button>
                                <br/>
                                <Button variant="contained" color="primary" onClick={this.historyPush}> Register </Button>
                            </div>
                        </MuiThemeProvider>
                    </Router>
                </div>
            </div>
        )
    }
}

export default LoginPage;