import React from 'react';
import ContentBody from './Content';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import MenuAppBar from './AppBar';
import ScriptSteps from './ScriptSteps';
import { Grid, Backdrop } from '@material-ui/core';
import SideDrawer from './SideDrawer';


const Dashboard = () => (

    <div style={{height: '100%'}}>

        <MenuAppBar />
        <SideDrawer /> 
        <Backdrop />
        <main style={{marginTop: '64px'}}>
            Content
        </main>

    
    </div>
);

export default Dashboard;