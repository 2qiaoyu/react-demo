import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './App';
// import Toggle from './Test';
import LoginController from './Login';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Clock />, document.getElementById('root'));
ReactDOM.render(<LoginController />, document.getElementById('root'));
registerServiceWorker();
