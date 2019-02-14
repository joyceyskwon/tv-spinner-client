import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Show = props => {

  // Api had p tags and break tags inside of the description; This method cherry
  // picks those html tags and then this method returns descriptions with 150
  // characters or less

  const fixedDescription = () => {
    const splitDescription = props.show.description.split("<p>").join(" ").split("</p>").join(" ").split("<b>").join(" ").split("</b>").join(" ")
    if (splitDescription.length > 50) {
      return [...splitDescription.slice(0, 150), "...."]
    } else {
      return splitDescription
    }
  }

  return (
    <React.Fragment>
      <Card
        fluid image={props.show.image}
        header={props.show.title}
        meta=<h4>Genre: {props.show.genre}</h4>
        description={fixedDescription()}
        extra=<h3>❤ {props.show.users.length}</h3>
        onClick={() => props.handleShowPageClick(props.show)}
      />
    </React.Fragment>
  )
}

export default Show
