import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/configureStore';
import { createStore } from 'redux';
import MenuAppBar from './components/AppBar';
import ScriptSteps from './components/ScriptSteps';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/style.css';
import AppRouter from './routers/AppRouter';
import Dashboard from './components/Dashboard';
import ButtonAppBar from './components/MaterialAppBar';
import MaterialTabs from './components/MaterialFooter'
import MaterialDrawer from './components/MaterialDrawer';
import MaterialDashboard from './components/MaterialDashboard';
import { createScript, removeScript } from './actions/scripts';


const store = Store();

// store.dispatch(createScript({ ScriptName: 'Test Script List Test', ScriptDesc: 'this is only a test' }))

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <MaterialDashboard/>
    </Provider>
)



ReactDOM.render(jsx, document.getElementById('root'));
