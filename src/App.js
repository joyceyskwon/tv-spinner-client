import React from 'react'
import './App.css'
import ShowContainer from './components/ShowContainer'
// import Nav from './components/Nav'

export default class App extends React.Component {

  // state = {
  //   loggedin: false,
  //   session: {},
  //   loginName: '',
  //   loginPassword: '',
  //   signUpName: '',
  //   signUpPassword: ''
  // }
  //
  // handleLoginSubmit = e => {
  //   e.preventDefault()
  //   const loginNameInput = e.target.name.value
  //   const loginPasswordInput = e.target.password.value
  //   fetch('http://localhost:3000/api/v1/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "name": loginNameInput,
  //       "password": loginPasswordInput
  //     })
  //   })
  //   .then(this.fetchSession)
  // }
  //
  // fetchSession = () => {
  //   fetch('http://localhost:3000/api/v1/login')
  //   .then( r => r.json() )
  //   .then(console.log)
  // }
  //
  // handleSignUpSubmit = e => {
  //   e.preventDefault()
  //   const signUpNameInput = e.target.name.value
  //   const signUpPasswordInput = e.target.password.value
  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "name": signUpNameInput,
  //       "password": signUpPasswordInput
  //     })
  //   })
  //   .then(r=>r.json())
  //   .then(newUserData=>console.log(newUserData))
  // }
  //
  // fetchUser = () => {
  //   fetch(`http://localhost:3000/api/v1/users`)
  //   .then( r => r.json() )
  //   .then(data=>console.log(data))
  // }

  render() {
    return (
      <div className="App">
        <h1>TV Spinner</h1>
        <ShowContainer />
      </div>
    )
  }
}
