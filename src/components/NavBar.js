import React from 'react';
import AppBar from './AppBar';
import EditScript from './EditScript';
import AddScript from './AddScript';
import CreateScript from './CreateScript';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const Navigation = () => (

    <div className="nav-bar">

        <Link to="/edit">
            <EditScript/>
        </Link>
        
        <Link to="/add">
            <AddScript/>
        </Link>

        <Link to="/create">
            <CreateScript/>
        </Link>
        


    </div>
);

export default Navigation;