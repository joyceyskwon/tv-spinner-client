import React from 'react'

export default class LogIn extends React.Component {

  state = {
    loginClicked: false,
    name: '',
    password: ''
  }

  showLoginForm = e => {
    this.setState({
      loginClicked: !this.state.loginClicked
    })
  }

  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = e => {
    this.props.handleLoginSubmit(e)
    this.setState(preState => {
      return {
        username: '',
        password: ''
      }
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.showLoginForm()}
        >
          Login
        </button>

        {this.state.loginClicked &&
          <form onSubmit={e => this.handleLoginSubmit(e)}>
          <input
            onChange={e => this.handleLoginChange(e)}
            type="text" name="name"
            placeholder="Username"
          />
          <input
            onChange={e => this.handleLoginChange(e)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input type="Submit" value="Login" />
          </form>
        }
      </div>
    )
  }
}
