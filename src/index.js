import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './App';
// import Toggle from './Test';
import LoginController from './Login';
import registerServiceWorker from './registerServiceWorker';
import NameForm from './NameForm';

// ReactDOM.render(<Clock />, document.getElementById('root'));
ReactDOM.render(<NameForm />, document.getElementById('root'));
registerServiceWorker();
