import React from 'react'
import './App.css'
import ShowContainer from './components/ShowContainer'
import Nav from './components/Nav'

export default class App extends React.Component {

  state = {
    currentUser: null,
    name: '',
    password: ''
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/users/${this.state.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body:JSON.stringify({
        user: {
          name: this.state.name,
          password: this.state.password
        }
      })
    })
    .then(r => r.json())
    .then(obj => {
      console.log(obj)
    })
  }

  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TV Spinner</h1>
        <Nav handleLoginSubmit={this.handleLoginSubmit} handleLoginChange={this.handleLoginChange} />
        <ShowContainer />
      </div>
    )
  }
}
