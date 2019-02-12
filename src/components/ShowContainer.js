import React, { Component } from 'react'
import ShowList from './ShowList'
import Filter from './Filter'

export default class ShowContainer extends Component {

  render() {
    return (
      <div>
        <Filter
          genre={this.props.genre}
          schedule={this.props.schedule}
          rating={this.props.rating}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
        <ShowList
          visibility={this.props.visibility}
          handleSubmit={this.props.handleSubmit}
          shows={this.props.filterShows}
        />
      </div>
    )
  }

}
