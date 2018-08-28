import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import HelpPage from './../components/HelpPage';
import EditExpensePage from './../components/EditExpensePage';
import NotFound from './../components/NotFound';
import AddExpensePage from './../components/AddExpensePage';
import Header from './../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>      
    </BrowserRouter>

);

export default AppRouter;