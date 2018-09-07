import React, { Fragment } from 'react';
import ContentBody from './Content';
import {BrowserRouter, Route, Router, Switch, Link, NavLink} from 'react-router-dom';
import MenuAppBar from './AppBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ScriptSteps from './ScriptSteps';
import SideDrawer from './SideDrawer';
import UserList from './UserList';
import Backdrop from './Backdrop';
import ScriptsList from './ScriptsList';
import Content from './Content';
import DefaultContent from './DefaultContent';
import ScriptContent from './ScriptContent';

import {Row, Col, Container} from 'reactstrap';
import ButtonAppBar from './MaterialAppBar';
import { Paper, Grid, withStyles, Drawer, List, Toolbar, Typography, AppBar, CssBaseline, Divider, Card, StepConnector} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddScript from './AddScript';
import ViewScript from './ViewScript'
import EditScript from './EditScript';



const drawerWidth = 240;
const styles = theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },

  });
  

const style = {
    Paper: {
        padding: 20, 
        marginTop: 10,
        marginBottom: 10
    }
}

class MaterialDashboard extends React.Component {
 
    state = {
        open: false,
      };
    
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    render() {

        const { classes } = this.props;

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (
            <React.Fragment>
                    <CssBaseline />
                    <div className={classes.root}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                            classes.menuButton,
                            this.state.open && classes.menuButtonHidden,
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap className={classes.title}>
                            Epic Script Testing
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge >
                            <PhotoCamera/>
                            </Badge>
                        </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                        </div>
                        <BrowserRouter>
                            <div>
                                <Divider />
                                <List><Link to="/">Home</Link></List>
                                <Divider />
                                <List><Link to="/scripts">Script List</Link></List>
                                <Divider />
                                <List><Link to="/create/script">Create Script</Link></List>
                                <Divider />
                                <List>Users</List>
                            </div>
                        </BrowserRouter>
                       

                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Grid item sm={12}>
                            <Paper style={style.Paper}>
                                <BrowserRouter>                            
                                    <div>
                                        <Route path="/" component={DefaultContent} exact={true}/>
                                        <Route path="/scripts/:ScriptID" component={ViewScript} exact={true}/>
                                        <Route path="/edit/script/:ScriptID" component={EditScript} exact={true}/>
                                        <Route path="/create/script/" component={AddScript}/>
                                        <Route path="/scripts" component={ScriptsList} exact={true}/>
                                        <Route path="/userlist" component={UserList}/>
                                    </div>
                                </BrowserRouter>
                            </Paper>
                        </Grid>

                        <div className={classes.tableContainer}>
                    
                        </div>
                    </main>
                    </div>
            </React.Fragment>
            
        );
    }
    
};

export default withStyles(styles)(MaterialDashboard);

// <div>
// <ButtonAppBar drawerClickHandler={this.drawerToggleClickHandler}/>

// <Grid container sm={12} className="grid-body-container">

    
//     <Grid item sm={12}>
//         <Paper style={style.Paper}>
//             <BrowserRouter>
            
//             <div>
//             <Route path="/script" component={ScriptSteps} exact={true}/>
//                 <Route path="/" component={DefaultContent} exact={true}/>
//                 <Route path="/create" component={CreateScript}/>
//                 <Route path="/scriptslist" component={ScriptsList}/>
//                 <Route path="/userlist" component={UserList}/>
                    
//             </div>
     

//  </BrowserRouter>
// </Paper>
// </Grid>
// </Grid>


// </div>
