// import React from 'react'
// import { Card } from 'semantic-ui-react'
//
// const ShowInfo = props => {
//
//   // Api had p tags and break tags inside of the description; We cherry picked
//   // those html tags
//
//   const fixedDescription = props.show.description.split("<p>").join(" ").split("</p>").join(" ").split("<b>").join(" ").split("</b>").join(" ")
//
//   return (
//     <div>
//     <React.Fragment>
//       <Card centered
//         image={props.show.image}
//         header={props.show.title}
//         meta=<h4>Genre: {props.show.genre}</h4>
//         description={fixedDescription}
//         extra=<h3 onClick={props.handleAddFavorite}>❤ {props.show.favorites.length}</h3>
//       />
//     </React.Fragment>
//     </div>
//   )
//
// }
//
// export default ShowInfo;
