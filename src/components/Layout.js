import React from 'react'
import About from './pages/About'
import Home from '../components/pages/Home'
import Contact from './pages/Contact'
import Project from '../components/pages/Project'
import Skills from '../components/pages/Skills'
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
