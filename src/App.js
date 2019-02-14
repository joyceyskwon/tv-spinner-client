import React from 'react'
import './assets/App.css'
import ShowContainer from './components/ShowContainer'
import Authentication from './components/Authentication'
import Nav from './components/Nav'
// import { Switch, Route, Redirect } from 'react-router-dom'
import ShowInfo from './components/ShowInfo'

export default class App extends React.Component {

  state = {
    shows: [],
    genre: '',
    schedule: '',
    rating: 10,
    currentUser: null,
    loginClicked: false,
    loginName: '',
    loginPassword: '',
    signupClicked: false,
    signUpName: '',
    signUpPassword: '',
    errors: '',
    clickedShow: null,
  }

/////// FETCH SHOW DATA //////////////////////////////////
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
  /////// LOG IN ///////////////////////////////////////
  handleLoginSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/users/${this.state.loginName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body:JSON.stringify({
        user: {
          name: this.state.loginName,
          password: this.state.loginPassword
        }
      })
    })
    .then(r => r.json())
    .then(loggedinUser => {
      this.setState({
        currentUser: loggedinUser || null,
        errors: loggedinUser.message || "",
      })
    })
  }

  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showLoginForm = () => {
    this.setState({
      loginClicked: !this.state.loginClicked
    })
  }

  /////// SIGN UP ////////////////////////////////////
  showSignUpForm = e => {
    this.setState({
      signupClicked: !this.state.signupClicked
    })
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: this.state.signUpName,
          password: this.state.signUpPassword
        }
      })
    })
    .then( r => r.json())
    .then(newUser => {
      console.log(newUser)
      this.setState({
        currentUser: newUser || null,
        errors: newUser.message
      })
    })
  }

  handleSignUpInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //////////// FILTER ////////////////////////////////
  handleFilterChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      visibility: 'visible'
    })
    this.filterShows()
  }

  handleShowPageClick = (showObj) => {
    this.setState({ clickedShow: showObj })
  }

  filterShows = e => {
    return this.state.shows.filter(show => {
      return show.genre.toLowerCase().includes(this.state.genre.toLowerCase()) && show.schedule.toLowerCase().includes(this.state.schedule.toLowerCase()) && show.rating < this.state.rating
    })
  }

  handleAddFavorite = () => {
    const clickedShow = this.state.clickedShow
    if (!this.state.currentUser.favorites.find(favorite => favorite.show_id === clickedShow.id)) {
      fetch('http://localhost:3000/api/v1/favorites', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.currentUser.id,
          show_id: clickedShow.id
        })
      })
      .then(r => r.json())
      .then(updatedData => {
        this.setState({
          clickedShow: { ...this.state.clickedShow, favorites: [...this.state.clickedShow.favorites, updatedData] },
          currentUser: { ...this.state.currentUser, favorites: [...this.state.currentUser.favorites, updatedData] }
         })
      })
    } else {
      let foundFavorite = this.state.currentUser.favorites.find(favorite => {
        return favorite.show_id === clickedShow.id
      })
      fetch(`http://localhost:3000/api/v1/favorites/${foundFavorite.id}`, {method: "DELETE"})
      .then(r => {
        const newFavorites = this.state.clickedShow.favorites.filter(favorite => favorite.id !== foundFavorite.id)
        this.setState({
          clickedShow: { ...this.state.clickedShow, favorites: newFavorites },
          currentUser: { ...this.state.currentUser, favorites: newFavorites }
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {!this.state.currentUser ?
          <Authentication
            handleLoginChange={this.handleLoginChange}
            handleLoginSubmit={this.handleLoginSubmit}
            loginClicked={this.state.loginClicked}
            showLoginForm={this.showLoginForm}
            signupClicked={this.state.signupClicked}
            showSignUpForm={this.showSignUpForm}
            handleSignUpSubmit={this.handleSignUpSubmit}
            handleSignUpInputs={this.handleSignUpInputs}
            currentUser={this.state.currentUser}
          />
        :
          <ShowContainer
            genre={this.state.genre}
            schedule={this.state.schedule}
            rating={this.state.rating}
            handleFilterChange={this.handleFilterChange}
            handleSubmit={this.handleSubmit}
            filterShows={this.filterShows()}
          />
        }
      </div>
    )
  }
}
