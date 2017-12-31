import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function NumberList(props) {
  const numbers = props.numbers;
  const numberList = numbers.map(item => <li key={item.toString()}>{item}</li>);
  return (
    <ul>{numberList}</ul>
  )
}

const numbers = [1, 2, 3, 4, 5, 6];
ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('root'));
registerServiceWorker();
