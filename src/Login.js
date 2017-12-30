import React, {Component} from 'react';

export default class LoginController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  render() {
    let button = null;
    const isLogin = this.state.isLogin;
    isLogin ?
      button = <LoginOutButton onClick={this.loginOutClick}/>
      :
      button = <LoginInButton onClick={this.loginInClick}/>;
    return (
      <div>
        <Greet isLogin={isLogin}/>
        {button}
      </div>)
  }

  loginInClick = () => {
    this.setState({
      isLogin: true
    })
  };

  loginOutClick = () => {
    this.setState({
      isLogin: false
    })
  }
}

function LoginInButton(props) {
  return (
    <button onClick={props.onClick}>
      Login In
    </button>
  )
}

function LoginOutButton(props) {
  return (
    <button onClick={props.onClick}>
      Login Out
    </button>
  )
}

function Greet(props) {
  if (props.isLogin) {
    return <GreetOut/>
  }
  return <GreetIn/>
}

function GreetOut() {
  return <h1>登出</h1>
}

function GreetIn() {
  return <h1>登录</h1>
}