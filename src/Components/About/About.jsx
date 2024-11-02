import React from 'react'
import './About.css'
import placeholder from '../../assets/placeholder.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={placeholder} className='about-img'/>
      </div>
      <div className='about-right'>
        <h3>About ChiangCreations</h3>
        <h2>Title About ChiangCreations</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Voluptates asperiores nulla quam, veniam vel dicta eaque. 
          Quaerat, ipsa architecto. Vitae nam harum nihil nulla ab non pariatur incidunt fuga ipsa.
        </p>
      </div>
    </div>
  )
}

export default About