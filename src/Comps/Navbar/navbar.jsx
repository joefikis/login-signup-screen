import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="navbar-box">
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-links">
                    <Link to="/Signup" reloadDocument><button>Signup</button></Link>
                    <Link to="/Login" reloadDocument><button>Login</button></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar