import React, {Component} from 'react';

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  change = (e) => {
    this.setState({value: e.target.value});
  }

  submit = (e) => {
    e.preventDefault();
    console.log("submit:" + this.state.value);
  }

  render(){
    return(
      <form onSubmit={this.submit}>
        <label>
          {/*Name:*/}
          {/*<input type="text" value={this.state.value} onChange={this.change}/>*/}
          {/*<textarea value={this.state.value} onChange={this.change}/>*/}
          请选择一个喜欢的水果
          <select value={this.state.value} onChange={this.change}>
            <option value="fruit">fruit</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}