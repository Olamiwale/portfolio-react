import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaTwitter,
  FaPhoneVolume,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="md:w-[10rem] bg-blue-900 text-white h-screen items-center flex flex-shrink-0">


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
  );
}
