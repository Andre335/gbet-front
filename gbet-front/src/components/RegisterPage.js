import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Button from '@material-ui/core/Button';
import { Router, Link } from 'react-router-dom';
import history from '../util/history.js';
import ObjectId from 'bson-objectid';

class RegisterPage extends Component {
    constructor() {
        super();
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            passconf: "",
            role: "",
            dob: new Date()
        }
    }

    handleDateChange = name => event => {
        const newDate = new Date(event.target.value);
        this.setState({
            [name]: newDate,
        })
    }

    handleRegister() {
        const userID = new ObjectId();
        if (this.state.role === "streammer") {
            const newRoledUser = {
                user_id: userID,
                lives: []
            }
        } else {
            const newRoledUser = {
                user_id: userID,
                favourite_lives: [],
                favourite_streammers: [],
                bets: []
            }
        }

        const newUser = {
            _id: userID,
            firstName: this.state.fname,
            lastName: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            dateOfBirth: this.state.dob
        }
    }

    handleRoleChange(value) {
        this.setState({role: value});
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
                    <TextField
                        label="First Name"
                        floatingLabelText="First Name"
                        value={this.state.fname}
                        onChange={this.handleChange('fname')}
                    />
                    <TextField
                        label="Last Name"
                        floatingLabelText="Last Name"
                        value={this.state.lname}
                        onChange={this.handleChange('lname')}
                    /> <br/>
                    <TextField
                        label="Email"
                        floatingLabelText="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                    /> <br/>
                    <TextField
                        label="Password"
                        floatingLabelText="Password"
                        value={this.state.fname}
                        onChange={this.handleChange('password')}
                    />
                    <TextField
                        label="Confirm Password"
                        floatingLabelText="Confirm Password"
                        value={this.state.lname}
                        onChange={this.handleChange('passconf')}
                    /> <br/>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={this.handleDateChange('dob')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <RadioGroup name="role" selectedValue={this.state.role} onChange={this.handleRoleChange} horizontal>
                        <RadioButton value="streammer"> Streammer </RadioButton>
                        <RadioButton value="viewer"> Viewer </RadioButton>
                    </RadioGroup> <br/>

                    <Router history={history}>
                        <div>
                            <Button label="Register" primary={true} onClick={this.handleRegister}> Register </Button>
                            <br/>
                            <Button label="Cancel" primary={true}><Link to="/Login"> Cancel </Link></Button>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default RegisterPage;