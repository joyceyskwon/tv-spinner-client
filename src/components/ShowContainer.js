import React, { Component } from 'react'
import ShowList from './ShowList'
import Filter from './Filter'

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

  filteredShows = () => {
    return this.state.shows.filter(show => {
      return show.genre
    })
  }

  render() {
    return (
      <div>
        <Filter />
        <ShowList shows={this.state.shows} />
      </div>
    )
  }
}
