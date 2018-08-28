import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header> 
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> <br/>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> <br/> 
        <NavLink to="Help" >Help</NavLink>
    </header>
);
export default Header;