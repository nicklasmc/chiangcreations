import React from 'react'
import './About.css'
import placeholder from '../../assets/placeholder.jpg'
import chiang from '../../assets/ChiangCreations.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={chiang} className='about-img' alt="ChiangCreations"/>
      </div>
      <div className='about-right'>
        <h3>About ChiangCreations</h3>
        <h2>Visionary Consulting Services</h2>
        <p>
          Led by Charley Chiang, an expert in Ellucian Banner and contingent systems for higher education, 
          and Amber Chiang, an image and branding expert for education, nonprofit, and private sector, 
          ChiangCreations Consulting provides an integrated team.
        </p>
        <p>
          Clients include Kern Community College District, Imperial Valley College, 
          Kern County Bar Association, Bakersfield College, Vaperizen, Wok It Out, College of the Siskiyous, 
          Grace Dance Studio, Idaho Vapor Company, China Palace Restaurant, and College of the Sequoias.
        </p>
      </div>
    </div>
  )
}

export default About