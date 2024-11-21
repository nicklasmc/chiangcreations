import React from 'react'
import './Biography.css'
import placeholder from '../../assets/placeholder.jpg'
import amber from '../../assets/AmberChiang.jpg'
import charley from '../../assets/CharleyChiang.jpg'

const Biography = () => {
  return (
    <div className='biography'>
      {/*Charley Chiang*/}
      <div className='bio-section-1'>
        <img src={charley} alt="Charley Chiang"/>
        <p>
          Charley Chiang is an expert with Ellucian Banner Student specializing in California Community Colleges 
          with nearly 30 years of experience in training, support and custom solution development.
        </p>
      </div>
      {/*Amber Chiang*/}
      <div className='bio-section-2'>
        <img src={amber} alt="Amber Chiang"/>
        <p>
          Amber Chiang is a leading professional in image management services with a 25-year career in public relations, 
          crisis communications, marketing, advertising, and social media. 
          She specializes in nonprofit and higher education clients, 
          providing in-house and consultancy services to guide organizations through their external relations efforts.
        </p>
      </div>
    </div>
  )
}

export default Biography