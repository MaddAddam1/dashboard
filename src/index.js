import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import IndecisionApp from './components/Indecision'

ReactDOM.render(<IndecisionApp options={['Devil\'s Den', 'Second District']} />, document.getElementById('root'));
registerServiceWorker();
