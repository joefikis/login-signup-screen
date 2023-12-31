import React from 'react'
import './signup.css'

function Signup() {
  return (
    <>
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-box">
          <div className="signup-header">
            <h1>Sign Up</h1>
          </div>
          <div className="signup-info">
                <div className="signup-username">
                 <label htmlFor="name">Username</label>
                <input type="text" id="name" />
                </div>
                <div className="signup-password">
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

export default Signup