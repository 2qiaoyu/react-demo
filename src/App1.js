import React, {Component} from 'react';
import './App1.css';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        欢迎参观
      </p>
    </FancyBorder>
  );
}

export default class App extends Component {

  constructor(props) {
    super(props);
  }


}