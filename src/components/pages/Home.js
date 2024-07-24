import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="bg-red-200 md:pb-[200px] h-screen justify-center items-center flex">
        <div>
          <div className="md:mt-[200px] px-8 md:px-16 flex flex-col justify-center items-center">
            <p className="uppercase"> let's build together</p>
            <p className="text-[25px] md:text-[40px] lg:text-[50px] flex flex-col justify-center items-center font-bold p-4">
              <span>
                Hi, I'm <span>Paul </span>
              </span>
              <span className="custom-text text-center text-[2rem] lg:text-[4rem] md:text-[3rem] ">
                A Full stack Developer
              </span>
            </p>
            <p className="md:px-8 text-xl text-center lg:px-20">
              I'm a fullstack developer specializing in building and designing
              exceptional digital experience.
            </p>
          </div>

          <Link to="/contact" className="flex justify-center mt-[50px] p-2">
            <button className="bg-blue-800 text-white p-4 w-1/2 font-bold uppercase hover:bg-blue-700 rounded-lg">
              Contact me
            </button>
          </Link>

          <div className=" mt-20">
            <div className="flex justify-evenly items-center lg:w-[800px] m-auto ">
              <div className="p-2 rounded-[10px] max-sm:w-[60px] md:p-4 ">
                <a
                  href="https://github.com/Olamiwale"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./github.png" alt="link" className="w-[70px]" />
                </a>
              </div>

              <div className="p-2 rounded-[10px] max-sm:w-[60px] md:p-4 ">
                <a
                  href="https://github.com/Olamiwale"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./cv.png" alt="link" className="w-[70px]" />
                </a>
              </div>

              <div className="p-2 rounded-[10px] max-sm:w-[60px] md:p-4 ">
                <a
                  href="https://github.com/Olamiwale"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./linkdlin.png" alt="link" className="w-[70px]" />
                </a>
              </div>

              <div className="p-2 rounded-[10px] max-sm:w-[60px] md:p-4 ">
                <a
                  href="https://github.com/Olamiwale"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./x.png" alt="link" className="w-[70px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
