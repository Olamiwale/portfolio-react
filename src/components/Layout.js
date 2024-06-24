import React from 'react'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import {Routes, Route} from 'react-router-dom'



export default function layout() {
  return (
    <div className="flex-grow custom-bg h-screen overflow-auto">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />}/>
        <Route path='/project' element={<Project />}/>
      
        <Route path='/contact' element={<Contact />} />
       
      </Routes>
      
      
    
  </div>
  
  )
}
