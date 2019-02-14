import React from 'react'
// import { Button, Icon } from 'semantic-ui-react'
import { Dropdown, NavItem, Button } from 'react-materialize'

export default class Filter extends React.Component {
  // <Dropdown
  //   trigger={<Button>Select Genre</Button>}
  //   onOpenStart={e=>this.props.handleFilterChange(e)}
  //   className="genre"
  //   value={this.props.genre}
  //   >
  //   <NavItem value='action'>Action</NavItem>
  //   <NavItem value='anime'>Anime</NavItem>
  //   <NavItem value='crime'>Crime</NavItem>
  //   <NavItem divider />
  // </Dropdown>

  render() {
    return (
      <div>

        <select
          onChange={e=>this.props.handleFilterChange(e)}
          name="genre"
          value={this.props.genre}
        >
          <option value='action'>Action</option>
          <option value='anime'>Anime</option>
          <option value='crime'>Crime</option>
          <option value='drama'>Drama</option>
          <option value='espionage'>Espionage</option>
          <option value='fantasy'>Fantasy</option>
          <option value='horror'>Horror</option>
          <option value='science-fiction'>Sci-Fi</option>
          <option value='supernatural'>Supernatural</option>
          <option value='romance'>Romance</option>
          <option value='thriller'>Thriller</option>
          <option value='mystery'>Mystery</option>
        </select>

        <select
          onChange={e=>this.props.handleFilterChange(e)}
          name="schedule"
          value={this.props.schedule}
        >
          <option value='Sunday'>Sunday</option>
          <option value='Monday'>Monday</option>
          <option value='Tuesday'>Tuesday</option>
          <option value='Wednesday'>Wednesday</option>
          <option value='Thursday'>Thursday</option>
          <option value='Friday'>Friday</option>
          <option value='Saturday'>Saturday</option>
        </select>

        
        <input
          onChange={e=>this.props.handleFilterChange(e)}
          value={this.props.rating}
          name="rating"
          type="range"
          min="0"
          max="10"
        />


      </div>
    )
  }

}
