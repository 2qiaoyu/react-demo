import React from 'react';

export default class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
    this.click = this.click.bind(this);
  }

  click() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <button color={this.props.color} onClick={this.click}>
        Count: {this.state.count}
      </button>
    );
  }
}