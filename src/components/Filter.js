import React from 'react'

export default class Filter extends React.Component {

  render() {
    return (
      <div>
        <select>
          <option value='Action'>Action</option>
          <option value='Anime'>Anime</option>
          <option value='Crime'>Crime</option>
          <option value='Drama'>Drama</option>
          <option value='Espionage'>Espionage</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Horror'>Horror</option>
          <option value='Sci-Fi'>Sci-Fi</option>
          <option value='Supernatural'>Supernatural</option>
          <option value='Romance'>Romance</option>
          <option value='Thriller'>Thriller</option>
          <option value='Mystery'>Mystery</option>
        </select>
      </div>
    )
  }

}
