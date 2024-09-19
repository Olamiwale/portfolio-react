import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Project from '../pages/Project'
import Skills from '../pages/Skills'
import {Routes, Route} from 'react-router-dom'



export default function layout() {
  return (
    <div className="flex-grow h-screen overflow-y-auto bg-black text-white ">

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
