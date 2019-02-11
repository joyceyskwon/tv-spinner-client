import React from 'react'
import Show from './Show'
import './ShowList.css'

const ShowList = props => {

  return (
    <div
      id="show-list"
      style={{visibility: props.visibility}}
    >
      {
        props.shows.map( show => {
          return <Show
            key={show.id}
            show={show}
          />
        })
      }
    </div>
  )
}

export default ShowList
