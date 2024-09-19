import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  FaUser, FaProjectDiagram,} from "react-icons/fa";


export default function Sidebar() {
  const [nav, setNav] = useState(true);

  const toggle = () => {
    setNav(!nav);
    console.log('working')
  };

  return (
    <div>  

      <div className="md:w-[13rem] bg-blue-900 text-white h-screen items-center md:flex flex-shrink-0 hidden justify-center">
      <div className="p-4 flex justify-center items-center w-full">
          <ul className="flex flex-col gap-10">
            <Link to="/">
              <li className="gap-3 flex flex-col items-center group">
                <img
                  src="./homeIcon.png"
                  alt="link"
                  className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[35px]"
                />
                <p className="group opacity-0 group-hover:opacity-100 ">Home</p>
              </li>
            </Link>

            <Link to="/about">
              <li className="group gap-3 flex flex-col items-center">
                <FaUser color={"black"} size={40} />
                <p className="group opacity-0 group-hover:opacity-100 ">
                  About
                </p>
              </li>
            </Link>

            <Link to="/skills">
              <li className="group gap-3 flex flex-col items-center">
                <img
                  src="./skillIcon.png"
                  alt="link"
                  className="w-[70px] max-sm:w-[50px]"
                />
                <p className="group opacity-0 group-hover:opacity-100 ">
                  Skill
                </p>
              </li>
            </Link>

            <Link to="/project">
              <li className="group gap-3 flex flex-col items-center">
                <FaProjectDiagram color={"black"} size={35} />
                <p className="group opacity-0 group-hover:opacity-100 ">
                  Project
                </p>
              </li>
            </Link>
            <Link to="/contact">
              <li className="group gap-3 flex flex-col items-center">
                <img
                  src="./contactIcon.png"
                  alt="link"
                  className="w-[50px] max-sm:w-[30px] "
                />
                <p className="group opacity-0 group-hover:opacity-100 ">
                  Contact
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </div>







      <div className={!nav ? 'fixed w-full bg-black text-white top-0 justify-center text-center md:hidden ': 'hidden'}>

        <ul className="flex flex-col w-full justify-evenly gap-10 py-4 font-bold uppercase">
          <Link to='/'>       <li className="hover:underline border-b-2 p-3 ">Home</li></Link> 
          <Link to='/about'>  <li className="hover:underline border-b-2 p-3">About</li></Link> 
          <Link to='skills'>  <li className="hover:underline border-b-2 p-3">Skills</li></Link> 
          <Link to='project'>  <li className="hover:underline border-b-2 p-3">Project</li></Link> 
          <Link to='contact'>  <li className="hover:underline p-3">Contact</li></Link> 
        </ul>
      </div>  
      <div className="absolute cursor-pointer right-0 mr-[10px] mt-[10px] p-4 bg-blue-500"
      onClick={toggle}>
        {!nav ? <div>Close</div> : <div>Open</div>}
      </div>   
    </div>
  );
}
