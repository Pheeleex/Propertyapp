import React from 'react'
import Outro from './Outro'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'

const NotFound = () => {
  return (
    <div>
        <h1>This Page is not found</h1>
        <p> Go back to home page  <NavLink to="/" className='btn'>Home</NavLink> </p>
    </div>
  )
}

export default NotFound