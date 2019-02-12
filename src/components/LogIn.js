import React from 'react'

export default class LogIn extends React.Component {

  state = {
    loginClicked: false
  }

  showLoginForm = () => {
    this.setState({
      loginClicked: !this.state.loginClicked
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.showLoginForm}>
          Login
        </button>
        {this.state.loginClicked &&
          <form onSubmit={this.props.handleLoginSubmit}>
            <input
              onChange={this.props.handleLoginChange}
              type="text"
              name="name"
              placeholder="Username"
            />
            <input
              onChange={this.props.handleLoginChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <input type="Submit" />
          </form>
        }
      </div>
    )
  }
}
