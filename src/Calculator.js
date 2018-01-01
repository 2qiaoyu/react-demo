import React, {Component} from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水沸腾了</p>
  }
  return <p>水还没有沸腾</p>
}

// 将华氏度转换为摄氏度
function toCelsius(f) {
  return (f - 32) * 5 / 9;
}

// 将摄氏度转换为华氏度
function toFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return String(rounded);
}

export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', scale: 'c'};
  }

  CelsiusChange = (value) => {
    this.setState({scale: 'c', value});
  };

  FahrenheitChange = (value) => {
    this.setState({scale: 'f', value});
  };

  render() {
    const value = this.state.value;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
    return (
      <div>
        <TemperatureInput scale='c' value={celsius} onChange={this.CelsiusChange}/>
        <TemperatureInput scale='f' value={fahrenheit} onChange={this.FahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', scale: 'c'}
  }

  change = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>
          请输入{scaleNames[scale]}温度
        </legend>
        <input value={value} onChange={this.change}/>
      </fieldset>
    )
  }
}