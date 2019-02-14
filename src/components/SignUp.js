import React from 'react'
import {Modal, Button} from 'react-materialize'

const SignUp = (props) => {

  return (
    <div>
      <Modal
        header='Sign up'
        trigger={<Button className='red' waves='light'>Sign Up</Button>}>
        <form
          onSubmit={props.handleSignUpSubmit}
        >
          <input
            onChange={props.handleSignUpInputs}
            type="text"
            name="signUpName"
            placeholder="Username"
          />
          <input
            onChange={props.handleSignUpInputs}
            type="password"
            name="signUpPassword"
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

export default SignUp
