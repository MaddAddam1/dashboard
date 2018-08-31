import React from 'react';
import AppBar from './AppBar';
import EditScript from './EditScript';
import AddScript from './AddScript';
import CreateScript from './CreateScript';
import {BrowserRouter, Route, Switch, Link, appLink} from 'react-router-dom';
import DrawerToggle from './DrawerToggle';


const MenuAppBar = (props) => (

        <header className="app-header">
            <nav className="app">
                <div>
                  <DrawerToggle click={props.drawerClickHandler}/>
                </div>
                <div className="app__logo">Epic Script Testing</div>
                <div className="spacer"></div>
                <div className="app__items">
                    <ul>
                        <li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li>
                        <li><Link to="/profile" style={{textDecoration: 'none'}}>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

);

export default MenuAppBar;

