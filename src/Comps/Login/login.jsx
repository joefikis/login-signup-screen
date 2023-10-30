import React from 'react'
import './login.css'

function Login() {
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
                <input type="password" id="password" />
                </div>
                <button>
                  <a href="/">Submit</a>
                </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login