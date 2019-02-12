import React from 'react'

export default class SignUp extends React.Component {

  state = {
    signupClicked: false,
    name: "",
    password: "",
    errors: ""
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: this.state.name,
          password: this.state.password
        }
      })
    })
    .then(r => r.json())
    .then(obj => {
      this.setState({
        errors: obj.message || ""
      })
      console.log(this.state.errors);
    })
    event.target.reset()
  }

  handleSignUpInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  showSignUpForm = e => {
    this.setState({
      signupClicked: !this.state.signupClicked
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.showSignUpForm}>
          Sign Up
        </button>
        {this.state.signupClicked &&
          <form onSubmit={this.handleSignUpSubmit}>
            <input
              onChange={this.handleSignUpInputs}
              type="text"
              name="name"
              placeholder="Username"
            />
            <input
              onChange={this.handleSignUpInputs}
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
