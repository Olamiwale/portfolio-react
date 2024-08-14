import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";

export default function Sidebar() {
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
    console.log('working')
  };

  return (
    <div>  

      <div className="md:w-[10rem] bg-blue-900 text-white h-screen items-center  md:flex flex-shrink-0 hidden">
        <NavLink /> 
      </div>

      <div className="fixed w-full top-0 bg-red-400 z-50 md:hidden">
        <ul className="flex justify-evenly w-full p-4 font-bold uppercase">
          <Link to='/'>       <li className="hover:underline">Home</li></Link> 
          <Link to='/about'>  <li className="hover:underline">About</li></Link> 
          <Link to='skills'>  <li className="hover:underline">Skills</li></Link> 
          <Link to='project'>  <li className="hover:underline">Project</li></Link> 
          <Link to='contact'>  <li className="hover:underline">Contact</li></Link> 
         
        
          
        </ul>
      </div>
      


     
    </div>
  );
}
