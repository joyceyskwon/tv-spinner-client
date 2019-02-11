import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default class Nav extends React.Component {

  render() {
    return (
      <div>
        

        <LogIn
          handleLoginSubmit={this.props.handleLoginSubmit}
        />
        <SignUp
          handleSignUpSubmit={this.props.handleSignUpSubmit}
        />
        // if the user is logged in, show their name that links to their profile

      </div>
    )
  }
}
