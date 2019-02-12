import React from 'react'
import './App.css'
import ShowContainer from './components/ShowContainer'
import Nav from './components/Nav'

export default class App extends React.Component {

  state = {
    shows: [],
    visibility: 'hidden',
    genre: '',
    schedule: '',
    rating: 0,
    currentUser: null,
    loginClicked: false,
    loginName: '',
    loginPassword: '',
    signupClicked: false,
    signUpName: "",
    signUpPassword: ""
  }

/////// FETCH SHOW DATA //////////////////////////
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
  /////// LOG IN ///////////////////////////////
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
      console.log(loggedinUser)
      this.setState({
        currentUser: loggedinUser
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

  /////// SIGN UP ///////////////////////////////
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
        currentUser: newUser
      })
    })
  }

  handleSignUpInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //////////// FILTER ///////////////////////////
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
    console.log("is it working?");
    this.filterShows()
  }

  filterShows = e => {
    return this.state.shows.filter(show => {
      return show.genre.toLowerCase().includes(this.state.genre.toLowerCase()) && show.schedule.toLowerCase().includes(this.state.schedule.toLowerCase()) && show.rating < this.state.rating
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TV Spinner</h1>
        {!this.state.currentUser ?
          <Nav
            handleLoginChange={this.handleLoginChange}
            handleLoginSubmit={this.handleLoginSubmit}
            loginClicked={this.state.loginClicked}
            showLoginForm={this.showLoginForm}
            signupClicked={this.state.signupClicked}
            showSignUpForm={this.showSignUpForm}
            handleSignUpSubmit={this.handleSignUpSubmit}
            handleSignUpInputs={this.handleSignUpInputs}
          />
        :
          <ShowContainer
            genre={this.state.genre}
            schedule={this.state.schedule}
            rating={this.state.rating}
            handleFilterChange={this.handleFilterChange}
            handleSubmit={this.handleSubmit}
            visibility={this.state.visibility}
            filterShows={this.filterShows()}
          />
        }
      </div>
    )
  }
}
