import React from 'react';

export class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }


  focus() {
    // textInput是一个标准的DOM元素
    this.textInput.focus();
  }


  render() {
    return (
      <div>
        <input type="text" ref={input => {
          this.textInput = input;
        }}/>
        <input type="button" value="选中上面的text input" onClick={this.focus}/>
      </div>
    );
  }
}