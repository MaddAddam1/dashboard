import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';
import IndecisionApp from './components/Indecision';


import './styles/style.css';
// import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<IndecisionApp options={['Devil\'s Den', 'Second District']} />, document.getElementById('root'));
registerServiceWorker();
