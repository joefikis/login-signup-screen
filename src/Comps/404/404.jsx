import React from 'react'
import { Link } from "react-router-dom";

function nofile() {
  return (
    <>
        <h1>
            404
        </h1>
        <Link to="/" reloadDocument>
        <button>
            <h1>Go back?</h1>
        </button>
        </Link>
    </>
  )
}

export default nofile