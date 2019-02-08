import React, { Component } from 'react'
import ShowList from './ShowList'

export default class ShowContainer extends Component {

  state = {
    shows: []
  }

  componentDidMount() {
    this.fetchAllShows()
  }

  fetchAllShows = () => {
    fetch('http://localhost:3000/api/v1/shows')
    .then(r => r.json())
    .then(shows => {
      this.setState({
        shows
      })
    })
  }

  render() {
    return (
      <div>
        <ShowList
          shows={this.state.shows}
        />
      </div>
    )
  }
}
