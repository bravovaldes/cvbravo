import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import ExperienceMap from './components/ExeperienceCard'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects/>
      <Certifications/>
      <ExperienceMap/>
      
      
    </>
  )
}

export default App
