import React, { useEffect, useState } from 'react'
import './Navbar.css'
import placeholder from '../../assets/placeholder.jpg'
import Navlink from './Navlink.jsx'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={placeholder} alt="placeholder image" className='navlogo'/>
      <ul>
        <li>
          <Navlink scrollToClassName='hero' smooth='smooth' offset={0} duration={500}>
            Home
          </Navlink>
          </li>
        <li>
          <Navlink scrollToClassName='about' smooth='smooth' offset={-150} duration={500}>
            About
          </Navlink>
        </li>
        <li>
          <Navlink scrollToClassName='contact' smooth='smooth' offset={-260} duration={500}>
            Contact
          </Navlink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar