import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './App';
// import Toggle from './Test';
import LoginController from './Login';
import registerServiceWorker from './registerServiceWorker';
import Calculator from "./Calculator";
import CounterButton from './CounterButton';


// ReactDOM.render(<Clock />, document.getElementById('root'));
ReactDOM.render(<CounterButton color="blue"/>, document.getElementById('root'));
registerServiceWorker();
