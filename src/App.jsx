import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Hero/>
        <div className='container'>
          <About/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App