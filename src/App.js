import React from 'react'
import './App.css'
import ShowContainer from './components/ShowContainer'
// import Nav from './components/Nav'

export default class App extends React.Component {

  state = {
    shows: [],
    visibility: 'hidden',
    genre: '',
    schedule: '',
    rating: 0,
    currentUser: null,
    name: '',
    password: ''
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      visibility: 'visible'
    })
    console.log("is it working?");
    this.filterShows()
  }

  filterShows = e => {
    // e.preventDefault()
    return this.state.shows.filter(show => {
      return show.genre.toLowerCase().includes(this.state.genre.toLowerCase()) && show.schedule.toLowerCase().includes(this.state.schedule.toLowerCase()) && show.rating < this.state.rating
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TV Spinner</h1>
        <ShowContainer
          genre={this.state.genre}
          schedule={this.state.schedule}
          rating={this.state.rating}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          visibility={this.state.visibility}
          filterShows={this.filterShows()}
        />
      </div>
    )
  }
}
