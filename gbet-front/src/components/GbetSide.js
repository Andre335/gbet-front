import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AirplayIcon from '@material-ui/icons/Airplay';
import LogoutIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import ComplaintsIcon from '@material-ui/icons/Report';
import LiveList from './LiveList';
import history from '../util/history';
import { Router, Route, Link } from 'react-router-dom';
import styles from '../css/styles.js';
import LoginPage from './LoginPage';

class GbetSide extends Component {

  constructor(props) {
      super(props);
      this.handleLogout = this.handleLogout.bind(this);
      this.state = {
        open: false,
      };
  }

  handleLogout() {
      alert("Logged Out!");
      history.push("/Login");
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              GBet
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
            <List>
              {['Lives', 'Calendar', 'Complaints'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{[text==='Lives' ? <Link to="/Home"><AirplayIcon/></Link>: "", 
                                  text==='Calendar' ? <Link to="/calender"><CalendarIcon/></Link>: "", 
                                  text==='Complaints' ? <Link to="/complaints"><ComplaintsIcon/></Link>: ""]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider/>
            <List>
              {['Logout'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{[text==='Logout' ? <LogoutIcon onClick={this.handleLogout}/> : ""]}</ListItemIcon>
                </ListItem>
              ))}
            </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Router history={history}>
              <div>
                <Route path="/Home" render={(props) => <LiveList {...props} user={this.props.user}/>}/>
                <Route path="/Login" component={LoginPage}/>
              </div>
            </Router>
        </main>
      </div>
    );
  }
}

GbetSide.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(GbetSide);