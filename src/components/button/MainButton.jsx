import React from 'react'
import { Link } from 'react-router-dom'

function MainButton({ name, location }) {
  return (
    <div >
      <Link className='btn btn--animated' to={location}> {name} </Link>
    </div>
  )
}

export default MainButton
