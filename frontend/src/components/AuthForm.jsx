import React, { Component } from 'react'

class AuthForm extends Component {
    state = {
        username:'',
        password:''
    }
  render() {
    return (
      <div>
        <input 
            type="text"
            value={this.state.username}
            placeholder="Username"/>
        <input 
            type="password"
            value={this.state.password}
            placeholder="password"/>
        <button> Login </button>
        <button> Sign Up</button>
      </div>
    )
  }
}

export default AuthForm
