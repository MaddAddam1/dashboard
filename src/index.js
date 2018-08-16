import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import IndecisionApp from './Indecision'

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
