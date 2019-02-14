import React, { Component } from 'react'
import ShowList from './ShowList'
import Filter from './Filter'
import CurrentUser from './CurrentUser'

export default class ShowContainer extends Component {

  render() {
    return (
      <div>
        <CurrentUser />
        <Filter
          genre={this.props.genre}
          schedule={this.props.schedule}
          rating={this.props.rating}
          handleFilterChange={this.props.handleFilterChange}
          handleSubmit={this.props.handleSubmit}
        />
        <ShowList
          handleSubmit={this.props.handleSubmit}
          shows={this.props.filterShows}
        />
      </div>
    )
  }

}
