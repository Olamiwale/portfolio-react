import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaTwitter,
  FaPhoneVolume,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Sidebar() {

const [nav, setNav] = useState(true)

const toggle = () => {
  setNav(!nav)
}

  return (
    <div>
 <div onClick={toggle} className="bg-gray-400 absolute right-0 m-4 p-2 md:hidden
  ">{nav ? <div>Open</div> : <div>Close</div>}
    </div> 

      <div className={!nav ? " w-3/5 md:hidden bg-red-500 absolute top-8 bg-red-500 right-0 p-2 mx-4 my-8 z-10" : 'hidden'}>

       

        
           <ul className="p-4 text-white">

            <Link to='/'>
            <li className="hover:bg-red-400/50 p-4 font-bold uppercase">Home</li>
            </Link>
            <Link to='/about'>
            <li className="hover:bg-red-400/50 p-4 font-bold uppercase">About</li>
            </Link>
            <Link to='/skills'>
            <li className="hover:bg-red-400/50 p-4 font-bold uppercase">Skill</li>
            </Link>
            <Link to='project'>
            <li className="hover:bg-red-400/50 p-4 font-bold uppercase">Project</li>
            </Link>
            <Link to='contact'>
            <li className="hover:bg-red-400/50 p-4 font-bold uppercase">Contact</li>
            </Link>
          
         
          </ul>
       
        
       
        
      </div>

  
    <div className="md:w-[10rem] bg-blue-900 text-white h-screen items-center md:flex flex-shrink-0 hidden
    ">


      <div className="p-4 flex justify-center items-center w-full">
        <ul className="flex flex-col gap-10">
          <Link to="/">
            <li className="gap-3 flex flex-col items-center group">
            <img src="./homeIcon.png" alt="link" className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[35px]" />
              <p className="group opacity-0 group-hover:opacity-100 ">Home</p>
            </li>
          </Link>


          <Link to="/about">
            <li className="group gap-3 flex flex-col items-center">
              <FaUser color={'black'} size={40} /> 
               <p className="group opacity-0 group-hover:opacity-100 ">About</p>
            </li>
           
          </Link>

          <Link to="/skills">
            <li className="group gap-3 flex flex-col items-center">
              <img src="./skills.png" alt="link" className="w-[70px] max-sm:w-[50px]" />
              <p className="group opacity-0 group-hover:opacity-100 ">Skill</p>
            </li>
          </Link>

          <Link to="/project">
            <li className="group gap-3 flex flex-col items-center">
              <FaProjectDiagram color={'black'} size={35} />
              <p className="group opacity-0 group-hover:opacity-100 ">Project</p>
            </li>
          </Link>
          <Link to="/contact">
            <li className="group gap-3 flex flex-col items-center">
            <img src="./imageCon.png" alt="link" className="w-[50px] max-sm:w-[30px] " /> 
              <p className="group opacity-0 group-hover:opacity-100 ">Contact</p>
            </li>
          </Link>
          
          
        </ul>
      </div>
    </div>
    </div>
  );
}
