import React from 'react';

export class NameFormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this)
  }


  submit(e) {
    e.preventDefault();
    console.log('有一个name提交了：', this.input.value);
  }


  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Name:
          <input type="text" defaultValue="demo" ref={input => {
            this.input = input;
          }}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}