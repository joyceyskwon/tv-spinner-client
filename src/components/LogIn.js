import React from 'react'
import {Modal, Button} from 'react-materialize'

const LogIn = (props) => {

  return (
    <div>
      <Modal
        header='Log in'
        trigger={<Button className='red' waves='light'>Login</Button>}>
        <form
          onSubmit={props.handleLoginSubmit}
        >
          <input
            onChange={props.handleLoginChange}
            type="text"
            name="loginName"
            placeholder="Username"
          />
          <input
            onChange={props.handleLoginChange}
            type="password"
            name="loginPassword"
            placeholder="Password"
          />

          <input
            type="Submit"
          />
        </form>
      </Modal>
    </div>
  )

}

export default LogIn
