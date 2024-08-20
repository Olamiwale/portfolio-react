import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex h-screen items-center px-10">
      <div className="grid lg:grid-cols-2 space-y-10  gap-10 items-center">
        <div className="col-span-auto">
          <p className="font-bold text-3xl">About</p>
          <h2 className="py-4 font-semibold text-xl">Who I Am?</h2>

          <p className="md:text-xl">
            I'm a frontend developer, currently expanding my skills to include
            backend development. I specialize in crafting engaging user
            experiences using technologies such as React.js, Next.js, Vue.js,
            HTML5, CSS3, and TailwindCSS. Additionally, I have proficiency in
            backend technologies like Node.js and Solidity. Throughout my
            career, I've completed a diverse range of projects spanning both
            web2 and web3 industries. My primary focus is on client
            satisfaction, and I take pride in delivering high-quality solutions
            tailored to their specific needs..
          </p>

          <button className="custom-btn">
            <Link to="/project">Check out some of my latest projects</Link>
          </button>
        </div>

        <div className=" w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <img
            src="https://free4kwallpapers.com/uploads/originals/2015/10/21/cool-abstract-technology-wallpaper.jpg"
            width={400}
            height={30}
            alt="About-Image"
            className="shadow-md rounded-md py-4 w-full"
          />
        </div>
      </div>
    </div>
  );
}
