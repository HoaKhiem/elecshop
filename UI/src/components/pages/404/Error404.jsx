import React from 'react'
import './Error404.css'
import {Link} from 'react-router-dom'
const Error404 = () => {
  return (
    <div className='err404'>
      <div className="err404-title">
        <h3>404 ERROR</h3>
      </div>
      <div className="err404-des">
        <p>Ooops! This page is not avaiable</p>
      </div>
      <div className="err404-action">
        <Link to='/' className='err404-link'>Back to home page</Link>
      </div>
    </div>
  )
}

export default Error404