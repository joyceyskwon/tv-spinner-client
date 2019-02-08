import React from 'react'

export default class SignUp extends React.Component {

  state = {
    signupClicked: false
  }

  showSignUpForm = e => {
    this.setState({
      signupClicked: !this.state.signupClicked
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
          <form>
            <input type="text" name="name" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="Submit" value="Sign Up" />
          </form>
        }
      </div>
    )
  }
}
