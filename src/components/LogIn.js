import React from 'react'

const LogIn = (props) => {

  return (
    <div>
      <button
        onClick={props.showLoginForm}
      >
      Login
      </button>
      {props.loginClicked &&
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
      }
    </div>
  )

}

export default LogIn
