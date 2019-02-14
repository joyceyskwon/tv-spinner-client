import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import '../assets/Authentication.css'

const Authentication = (props) => {

  return (
    <div className="nav-container">
      <div className="form-container">
        <LogIn
          handleLoginSubmit={props.handleLoginSubmit}
          handleLoginChange={props.handleLoginChange}
          loginClicked={props.loginClicked}
          showLoginForm={props.showLoginForm}
        />
        <p>New to TV Spinner?</p>
        <SignUp
          handleSignUpSubmit={props.handleSignUpSubmit}
          handleSignUpInputs={props.handleSignUpInputs}
          signupClicked={props.signupClicked}
          showSignUpForm={props.showSignUpForm}
          />
      </div>
    </div>
  )

}

export default Authentication
