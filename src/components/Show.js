import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Show = props => {
  return (
    <React.Fragment>
      <Card
        fluid image={props.show.image}
        header={props.show.title}
        meta=<h4>Genre: {props.show.genre}</h4>
        description={props.show.description.split("<p>").join(" ").split("</p>").join(" ").split("<b>").join(" ").split("</b>")}
        extra=<h3>❤ {props.show.users.length}</h3>
        href={props.show.url}
      />
    </React.Fragment>
  )
}

export default Show
