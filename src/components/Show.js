import React from 'react'
import { Button, Icon, Card, CardTitle, Toast } from 'react-materialize'

const Show = props => {
  return (
      <Card header={<CardTitle reveal image={props.show.image} waves='light'/>}
        meta=<h4>Genre: {props.show.genre}</h4>
        title={props.show.title}
        reveal={props.show.description.split("<p>").join(" ").split("</p>").join(" ").split("<b>").join(" ").split("</b>")}>
        <Toast className='red' toast="Favorite added!"><Icon left>favorite</Icon>{props.show.users.length} favorite</Toast>
        <Button className='red' waves='light'>{props.show.users.length}<Icon left>favorite</Icon></Button>
        <p><a href={props.show.url}>Watch this show</a></p>
      </Card>
  )
}

export default Show
