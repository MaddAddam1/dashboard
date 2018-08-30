import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppBar from './components/AppBar';
import ScriptSteps from './components/ScriptSteps';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/style.css';
import AppRouter from './routers/AppRouter';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(<ScriptSteps / >, document.getElementById('root'));
