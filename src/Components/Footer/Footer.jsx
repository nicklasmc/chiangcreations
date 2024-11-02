import React from 'react'
import './Footer.css'
import Navlink from '../Navbar/Navlink.jsx'
import placeholder from '../../assets/placeholder.jpg'

const Footer = () => {
  return (
  <div className='footer container'>
      <div className='footer-section'>
        <div className='footer-links'>
          <div className='footer-links-div'>
            <Navlink href='/'>
              <p className='footer-link'>
                Terms & Conditions
              </p>
            </Navlink>
            <Navlink href='/'>
              <p className='footer-link'>
                Privacy Policy
              </p>
            </Navlink>
          </div>
          <div>
            <img src={placeholder} className='navlogo'/>
          </div>
        </div>

        <hr></hr>

        <div className='footer-lower'>
          <div className='footer-copyright'>
            <p>
              © {new Date().getFullYear()} Chiangcreations. All Rights Reserved.
            </p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer