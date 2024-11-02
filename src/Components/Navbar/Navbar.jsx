import React from 'react'
import './Navbar.css'
import placeholder from '../../assets/placeholder.jpg'
import Navlink from './Navlink.jsx'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={placeholder} alt="placeholder image" className='navlogo'/>
      <ul>
        <li>
          <Navlink className='' href=''>
            Home
          </Navlink>
          </li>
        <li>
          <Navlink className='' href=''>
            About
          </Navlink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar