import React from 'react'

export default class SignUp extends React.Component {

  state = {
    signupClicked: false,
    name: '',
    password: ''
  }

  showSignUpForm = e => {
    this.setState({
      signupClicked: !this.state.signupClicked
    })
  }

  handleSignUpChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUpSubmit = e => {
    this.props.handleSignUpSubmit(e)
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
          onClick={() => this.showSignUpForm()}
        >
          Sign Up
        </button>

        {this.state.signupClicked &&
          <form
            onSubmit={e=>this.handleSignUpSubmit(e)}
          >
            <input
              type="text"
              name="name"
              placeholder="Username"
            />
            <input
              onChange={e=>this.handleSignUpChange(e)} type="password"
              name="password"
              placeholder="Password"
            />
            <input
              onChange={e=>this.handleSignUpChange(e)}
              type="Submit"
              value="Sign Up"
            />
          </form>
        }
      </div>
    )
  }
}
