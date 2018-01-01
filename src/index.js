import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './App';
// import Toggle from './Test';
import LoginController from './Login';
import registerServiceWorker from './registerServiceWorker';
import Calculator from "./Calculator";

// ReactDOM.render(<Clock />, document.getElementById('root'));
ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
