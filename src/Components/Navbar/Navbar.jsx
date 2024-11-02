import React, { useEffect, useState } from 'react'
import './Navbar.css'
import placeholder from '../../assets/placeholder.jpg'
import Navlink from './Navlink.jsx'
import menu from '../../assets/hamburger.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={placeholder} alt="placeholder image" className='navlogo'/>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
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
      <img src={menu} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar