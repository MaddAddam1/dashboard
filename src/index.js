import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
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

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(<MaterialDashboard/>, document.getElementById('root'));
