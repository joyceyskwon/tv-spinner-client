import React from 'react'
import Show from './Show'
import './ShowList.css'
import { Card } from 'semantic-ui-react'

const ShowList = props => {

  return (
    <Card.Group itemsPerRow={4}
      id="show-list"
      style={{visibility: props.visibility}}
    >
      {
        props.shows.map( show => {
          return <Show
            key={show.id}
            show={show}
            handleShowPageClick={props.handleShowPageClick}
          />
        })
      }
    </Card.Group>
  )
}

export default ShowList
