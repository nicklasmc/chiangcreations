import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Hero/>
        <div className='container'>
          <About/>
          <Contact/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App