import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="h-screen md:p-10 items-center justify-center grid  md:grid-cols-2 md:gap-10">

        <div className="p-4 flex justify-center bg-red-600  ">
          <div>
             <p className="text-6xl lg:text-8xl"> Hello <br /> I am <span> Paul</span></p>
          <p className="py-8 font-bold text-5xl">Web Developer</p>

          <button className="bg-blue-800 md:max-w-[50%] w-full p-3 rounded mt-10">
            <Link to="/contact"> Contact Me </Link>
          </button>
          </div>

         
        </div>

        <div className=" flex justify-center p-10">
          <img
            src="https://free4kwallpapers.com/uploads/originals/2015/10/21/cool-abstract-technology-wallpaper.jpg"
            alt="profile_image"
            className="w-[70%]  md:w-full md:h-full "
          />
        </div>
      </div>
    </>
  );
}
