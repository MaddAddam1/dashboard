import React from 'react';
import AppBar from './AppBar';
import EditScript from './EditScript';
import AddScript from './AddScript';
import CreateScript from './CreateScript';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

  return (
    <nav className={drawerClasses}>
        <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create Script</Link></li>
            <li><Link to="/edit">Edit Script</Link></li> */}
        </ul>
    </nav>
    );
};
export default SideDrawer;

{/* <List>
<ListItem><Link to="/">Home</Link></ListItem>
<ListItem><Link to="/create">Create Script</Link></ListItem>
<ListItem><Link to="/edit">Edit Script</Link></ListItem>
</List> */}