import React from 'react'
import { Link } from 'react-router-dom'

function MainButton({name, location}) {
  return (
    <div className='btn'>
      <Link to={location}>{ name}</Link>
    </div>
  )
}

export default MainButton
