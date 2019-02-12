import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

const Nav = (props) => {

  return (
    <div>
    <LogIn
      handleLoginSubmit={props.handleLoginSubmit}
      handleLoginChange={props.handleLoginChange}
      loginClicked={props.loginClicked}
      showLoginForm={props.showLoginForm}
    />
    <SignUp
      handleSignUpSubmit={props.handleSignUpSubmit}
      handleSignUpInputs={props.handleSignUpInputs}
      signupClicked={props.signupClicked}
      showSignUpForm={props.showSignUpForm}
    />
    </div>
  )

}

export default Nav
