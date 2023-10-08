import React from 'react'

function login() {
  return (
    <>
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <div className="login-info">
                <div className="Login-username">
                 <label htmlFor="name">Username</label>
                <input type="text" id="name" />
                </div>
                <div className="login-password">
                <label htmlFor="password">Password</label>
                <input type="text" id="name" />
                </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default login