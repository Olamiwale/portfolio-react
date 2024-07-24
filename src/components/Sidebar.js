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
 <div onClick={toggle} className="absolute bg-red-300 cursor-pointer rounded-md left-0 m-4 p-5 md:hidden
  ">{nav ? <div>Open</div> : <div>Close</div>}
    </div> 

      <div className={!nav ? " w-[100px] md:hidden mt-[200px] m-4 absolute top-8 bg-red-300 left-0  my-8 z-50" : 'hidden'}>

       

        
           <ul className="p-4 text-white flex flex-col justify-start items-center my-10 gap-20">

            <Link to='/'>
            
            <img src="./homeIcon.png" alt="link" className="w-[38px] h-[35px]" />
            
            </Link>
            <Link to='/about'>
            
            <FaUser color={'black'} size={35} /> 
            </Link>
            <Link to='/skills'>
            
            <img src="./skills.png" alt="link" className="w-[60px]" />
            </Link>
            <Link to='project'>
            
            <FaProjectDiagram color={'black'} size={30} />
            </Link>
            <Link to='contact'>
            
            <img src="./imageCon.png" alt="link" className="w-[40px]" />
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
