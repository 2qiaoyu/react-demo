import React, {Component} from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }
  }

  render() {
    return (
      <botton onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </botton>
    )
  }

  handleClick=()=>{
    this.setState(prevState => ({
      isToggleOn:!prevState.isToggleOn
    }));
  }
}