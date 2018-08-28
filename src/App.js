import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

const ExpenseDashboardPage = () => (

    <div>
        This is the dashboard
    </div>
);

const AddExpensePage = () => {

    <div>
        This is the expense creation page
    </div>
};

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage}/>
        </div>
    
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
