import React, { Fragment } from 'react';
import ContentBody from './Content';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import MenuAppBar from './AppBar';
import ScriptSteps from './ScriptSteps';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';


class Dashboard extends React.Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropCLickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropCLickHandler}/>;
        }

        return (
            <Fragment>
                {/* <div style={{height: '100%'}}> */}

                        <MenuAppBar drawerClickHandler={this.drawerToggleClickHandler}/> */}
                        <SideDrawer show={this.state.sideDrawerOpen}/>
                        {backdrop}
                        <ContentBody />
                    
                {/* </div> */}
            </Fragment>
        );
    }
    
};

export default Dashboard;