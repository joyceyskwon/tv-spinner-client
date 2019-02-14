import React from 'react'
import { Button, Icon, Card, CardTitle } from 'react-materialize'

const Show = props => {

  // Api had p tags and break tags inside of the description; This method cherry
  // picks those html tags and then this method returns descriptions with 150
  // characters or less

  const fixedDescription = () => {
    return props.show.description.split("<p>").join(" ").split("</p>").join(" ").split("<b>").join(" ").split("</b>").join(" ")
  }
  //   if (splitDescription.length > 50) {
  //     return [...splitDescription.slice(0, 150), "...."]
  //   } else {
  //     return splitDescription
  //   }

  return (
      <Card header={<CardTitle reveal image={props.show.image} waves='light'/>}
        meta=<h4>Genre: {props.show.genre}</h4>
        title={props.show.title}
        reveal={fixedDescription()}>
        <Button onClick={()=>props.handleAddFavorite(props.show.id)} className='red' waves='light'>{props.show.favorites.length}<Icon left>favorite</Icon></Button>
        <p><a href={props.show.url}>Watch this show</a></p>
      </Card>
  )
}

export default Show
