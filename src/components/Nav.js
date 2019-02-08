import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default class Nav extends React.Component {

  render() {
    return (
      <div>
        <h1>TV Spinner</h1>
        <LogIn />
        <SignUp />
      </div>
    )
  }
}
