import React from 'react'

const SignUp = (props) => {

  return (
    <div>
      <button
        onClick={props.showSignUpForm}
      >
      Sign Up
      </button>
      {props.signupClicked &&
        <form
          onSubmit={props.handleSignUpSubmit}
        >
          <input
            onChange={props.handleSignUpInputs}
            type="text"
            name="signUpName"
            placeholder="Username"
          />
          <input
            onChange={props.handleSignUpInputs}
            type="password"
            name="signUpPassword"
            placeholder="Password"
          />
          <input
            type="Submit"
          />
        </form>
      }
    </div>
  )
}

export default SignUp
