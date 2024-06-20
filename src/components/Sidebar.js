import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="md:w-[10rem] bg-blue-900 text-white h-screen items-center flex flex-shrink-0">
      <div className="p-4 flex justify-center items-center w-full">

        <ul className="flex flex-col gap-10">

          <Link to="/">
            
            <li className="gap-3 flex flex-col items-center">
              <FaGithub size={30} /> Home
            </li>
          </Link>
          <Link to="/about">
            
            <li className="gap-3 flex flex-col items-center">
              
              <FaLinkedinIn size={30} /> About
            </li>
          </Link>
          <Link to="/contact">
            
            <li className="gap-3 flex flex-col items-center">
              <FaTwitter size={30} /> Contact
            </li>
          </Link>
          <Link to="/project">
            
            <li className="gap-3 flex flex-col items-center">
              <FaTwitter size={30} /> Contact
            </li>
          </Link>
          <Link to="/skills">
            
            <li className="gap-3 flex flex-col items-center">
              <FaTwitter size={30} /> Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
