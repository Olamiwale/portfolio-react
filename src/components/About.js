import React from "react";

export default function About() {
  return (
    <div className="flex h-screen bg-gray-800 items-center px-10">
    

<div className="grid grid-cols-3 gap-10">
  <div className="col-span-2">
    <p className="font-bold text-3xl">About</p>
    <h2 className="py-4 font-semibold text-xl">Who I Am?</h2>
    <p className="md:text-xl">
    I'm a frontend developer, afting engaging userir specific needs..
    </p>

    <button className="flex justify-center bg-red-500 rounded p-5 font-bold ">
    Check out some of my latest projects

    </button>
  </div>

  <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
    <img  
      src="https://free4kwallpapers.com/uploads/originals/2015/10/21/cool-abstract-technology-wallpaper.jpg"
      width={400}
      height={30}
      alt="About-Image"
      className="shadow-xl rounded-md py-4 w-full"
    />
  </div>
</div>



  </div>
  );
}
