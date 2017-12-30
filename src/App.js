import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(()=>this.tick(),1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  tick() {
    this.setState({
      date:new Date()
    })
  }
}

export default Clock;
