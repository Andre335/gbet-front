import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Button from '@material-ui/core/Button';
import { Router } from 'react-router-dom';
import history from '../util/history.js';
import ObjectId from 'bson-objectid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import '../css/AuthCss.css';
import axios from 'axios';

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
            role: "none",
            dob: new Date()
        }
    }

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.password) {
                return false;
            }
            return true;
        });
    }

    historyPush() {
        history.push('/Login');
    }

    handleDateChange = name => event => {
        const newDate = new Date(event.target.value);
        this.setState({
            [name]: newDate,
        })
    }

    handleRegister() {        
        if (this.state.role === "none") {
            alert("Select your role!");
            return;
        }

        const userID = new ObjectId();
        var newRoledUser = {};
        if (this.state.role === "streammer") {
            newRoledUser = {
                user_id: userID,
                lives: []
            }
        } else {
            newRoledUser = {
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

        const newCal = {
            owner: userID,
            favourites: []
        }

        axios.post('http://localhost:3001/user', newUser).then(res => {
            if (res.data.message) {
                alert(res.data.message);
                return;
            }
        });

        if (this.state.role === "streammer") {
            axios.post('http://localhost:3001/streammer', newRoledUser).then(res => {
                if (res.data.message) {
                    alert(res.data.message);
                    return;
                }
            });
        } else {
            axios.post('http://localhost:3001/viewer', newRoledUser).then(res => {
                if (res.data.message) {
                    alert(res.data.message);
                    return;
                }
            });
        }

        axios.post('http://localhost:3001/calendar', newCal).then(res => {
            if (res.data.message) {
                alert(res.data.message);
                return;
            } else {
                history.push('/Login');
            }
        });
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
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleRegister}
                        onError={errors => console.log(errors)}
                    >
                        <div class="falnames">
                            <div class="fnamecont">
                                <TextValidator
                                    autoFocus={true}
                                    label="First Name"
                                    value={this.state.fname}
                                    onChange={this.handleChange('fname')}
                                    margin="normal"
                                    validators={['required']}
                                    name="fname"
                                    errorMessages={['this field is required']}
                                />
                            </div>
                            <div class="lnamecont">
                                <TextValidator
                                    label="Last Name"
                                    value={this.state.lname}
                                    onChange={this.handleChange('lname')}
                                    margin="normal"
                                    validators={['required']}
                                    name="lname"
                                    errorMessages={['this field is required']}
                                />
                            </div>
                        </div> <br/>
                        <div class="email">
                            <TextValidator
                                label="Email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                                validators={['required']}
                                name="email"
                                errorMessages={['Email required']}
                            /> 
                        </div ><br/>
                        <div class="passwords">
                            <div class="pass">
                                <TextValidator
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    margin="normal"
                                    type="password"
                                    validators={['required']}
                                    name="password"
                                    errorMessages={['Password required']}
                                />
                            </div>
                            <div class="passcon">
                                <TextValidator
                                    label="Confirm Password"
                                    value={this.state.passconf}
                                    onChange={this.handleChange('passconf')}
                                    margin="normal"
                                    type="password"
                                    validators={['isPasswordMatch', 'required']}
                                    name="passconf"
                                    errorMessages={['Passwords dont match', 'Password confirmation required']}
                                />
                            </div>
                        </div> <br/>
                        <TextValidator
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            onChange={this.handleDateChange('dob')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            name="birthday"
                        />
                        
                        <RadioGroup name="role" selectedValue={this.state.role} onChange={this.handleRoleChange} horizontal>
                            <RadioButton value="streammer"> Streammer </RadioButton>
                            <RadioButton value="viewer"> Viewer </RadioButton>
                        </RadioGroup> <br/>

                        <Router history={history}>
                            <div>
                                <Button type="submit" variant="contained" color="primary"> Register </Button>
                                <br/>
                                <Button variant="contained" color="primary" onClick={this.historyPush}> Cancel </Button>
                            </div>
                        </Router>
                    </ValidatorForm>
                </div>
            </div>
        )
    }
}

export default RegisterPage;