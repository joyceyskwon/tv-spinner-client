import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import '../assets/Nav.css'
import logo from'../assets/images/tv-spinner-white.png';

const Nav = (props) => {

  return (
    <div className="nav-container">
      <div className="form-container">
        <img id="logo" src={logo} alt="tv-spinner" />
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

export default Nav
