import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default class Nav extends React.Component {

  render() {
    return (
      <div>
      <LogIn handleLoginSubmit={this.props.handleLoginSubmit} handleLoginChange={this.props.handleLoginChange} />
      <SignUp />
      </div>
    )
  }
}
