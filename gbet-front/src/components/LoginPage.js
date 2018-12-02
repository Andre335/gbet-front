import React, { Component } from 'react';
import '../css/AuthCss.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Router } from 'react-router-dom';
import history from '../util/history.js';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import axios from 'axios';

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
        const user = {
            email: this.state.user,
            password: this.state.pass
        }

        axios.post('http://localhost:3001/auth/login', user).then(res => {
            if (res.data.error) {
                alert(res.data.error);
            } else {
                alert("Logged in!");
                history.push("/Home");
            }
        });
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
                    <AppBar position='static'>
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
                                <ValidatorForm
                                    ref="form"
                                    onSubmit={this.handleLogin}
                                    onError={errors => console.log(errors)}
                                >
                                    <TextValidator
                                        label="Email"
                                        floatingLabelText="Email"
                                        value={this.state.user}
                                        onChange={this.handleChange('user')}
                                        validators={['required']}
                                        name="email"
                                        errorMessages={['Email required']}
                                    />
                                    <br/>
                                    <TextValidator
                                        type="password"
                                        label="Password"
                                        floatingLabelText="Password"
                                        value={this.state.pass}
                                        onChange={this.handleChange('pass')}
                                        validators={['required']}
                                        name="pass"
                                        errorMessages={['Password required']}
                                    />
                                    <br/>
                                    <div class="loginbuts">
                                        <div class="loginbut"><Button type="submit" variant="contained" color="primary"> Login </Button></div>
                                        <div class="regbut"><Button variant="contained" color="primary" onClick={this.historyPush}> Register </Button></div>
                                    </div>
                                </ValidatorForm>
                            </div>
                        </MuiThemeProvider>
                    </Router>
                </div>
            </div>
        )
    }
}

export default LoginPage;