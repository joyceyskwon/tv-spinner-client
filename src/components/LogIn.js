import React from 'react'

export default class LogIn extends React.Component {

  state = {
    loginClicked: false
  }

  showLoginForm = e => {
    this.setState({
      loginClicked: !this.state.loginClicked
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
          <form>
          <input type="text" name="name" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input type="Submit" value="Login" />
          </form>
        }
      </div>
    )
  }
}
