import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Dashboard from './../components/Dashboard';
import AppBar from './../components/AppBar';
import EditExpensePage from './../components/CreateScript';
import EditScript from './../components/EditScript';
import AddScript from './../components/AddScript';
import NotFound from './../components/NotFound';
import CreateScript from './../components/CreateScript';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <AppBar/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/create" component={CreateScript}/>
                <Route path="/edit" component={EditScript} />
                <Route path="/add" component={AddScript} />
                <Route component={NotFound}/>
            </Switch>
        </div>      
    </BrowserRouter>

);

export default AppRouter;