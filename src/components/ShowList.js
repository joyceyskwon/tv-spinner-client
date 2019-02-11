import React from 'react'
import Show from './Show'

const ShowList = props => {

  return (
    <div>
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
