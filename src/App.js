import React, { Component } from 'react'
import './App.css'
import ShowContainer from './components/ShowContainer'
import Nav from './components/Nav'

export default class App extends Component {

  state = {
    loggedin: false
  }

  render() {
    return (
      <div className="App">
        <Nav />

        <ShowContainer />
      </div>
    )
  }
}
