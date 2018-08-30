import React from 'react';
import Navigation from './NavBar';
import ContentBody from './Content';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppBar from './AppBar';
import ScriptSteps from './ScriptSteps';

const Dashboard = () => (

    <div>
        <AppBar />
        <Navigation />
        <ContentBody />
        <ScriptSteps />
    
    </div>
);

export default Dashboard;