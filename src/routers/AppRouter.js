import React from 'react';
import {BrowserRouter, Route, Router, Switch, Link, NavLink} from 'react-router-dom';
import Dashboard from './../components/Dashboard';
import MenuAppBar from './../components/AppBar';
import EditScript from './../components/EditScript';
import AddScript from './../components/AddScript';
import NotFound from './../components/NotFound';

import Profile from './../components/Profile';
import ScriptsList from '../components/ScriptsList';
import UserList from '../components/UserList';
import Script from './../components/Script';
import ViewScript from './../components/ViewScript';
import MaterialDashboard from './../components/MaterialDashboard';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            
            <Switch>
                <Route path="/" component={MaterialDashboard} exact={true} />
                <Route path="/create" component={AddScript}/>
                <Route path="/edit/:ScriptID" component={EditScript} />
                <Route path="/profile" component={Profile} />
                <Route path="/scriptlist" component={ScriptsList} />
                <Route path="/userlist" component={UserList} />
                <Route path="/view/script/:ScriptID" component={ViewScript} />
                <Route component={NotFound}/>
            </Switch>
        </div>      
    </BrowserRouter>

);

export default AppRouter;