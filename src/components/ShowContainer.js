import React, { Component } from 'react'
import ShowList from './ShowList'
import Filter from './Filter'

export default class ShowContainer extends Component {

  state = {
    shows: [],
    genre: '',
    schedule: '',
    rating: 0
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.filterShows()
  }

  filterShows = () => {
    return this.state.shows.filter(show => {
      return show.genre.toLowerCase().includes(this.state.genre.toLowerCase()) && show.schedule.toLowerCase().includes(this.state.schedule.toLowerCase()) && show.rating < this.state.rating
    })
  }

  render() {
    return (
      <div>
        <Filter
          genre={this.state.genre}
          schedule={this.state.schedule}
          rating={this.state.rating}
          handleChange={this.handleChange}
          handleSubmit={this.filterShows}
        />
        <ShowList
          shows={this.filterShows()}
        />
      </div>
    )
  }
}
