import React from 'react'
import Show from './Show'
// import './ShowList.css'
import { Card } from 'semantic-ui-react'

const ShowList = props => {

  return (
    <Card.Group itemsPerRow={4}
      id="show-list"
    >
      {
        props.shows.map( show => {
          return <Show
            key={show.id}
            show={show}
            handleAddFavorite={props.handleAddFavorite}
          />
        })
      }
    </Card.Group>
  )
}

export default ShowList
