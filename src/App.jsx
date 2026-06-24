import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
