import React from 'react'

const Show = props => {
  return (
    <div>
      <h3>{props.show.title}</h3>
      <p>Genre: {props.show.genre}</p>
      <p>Plays on: {props.show.schedule}</p>
      <p>Description: {props.show.description}</p>
      <p>Rating: {props.show.rating}</p>
      <a href={props.show.url}>Watch NOW!</a>
    </div>
  )
}

export default Show
