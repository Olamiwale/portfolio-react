import React from "react";


export default function ProjectProps({ title }) {
  return (
    <div className="shadow-xl shadow-gray-700 rounded-md space-x-4 mx-5">
      <a href={'/'}>
        <div className="flex justify-center p-4  items-center group">
          <img
            className="rounded-xl group-hover:opacity-10 h-[200px]"
            src={'/'}
            alt="/"
            width={500}
          />

          <div className="absolute text-white justify-center items-center flex flex-col gap-4 opacity-0 group-hover:opacity-100">
            <p className="font-bold text-xl text-red-500">{title}</p>
            <p className="bg-gray-600 p-2 px-4 rounded-md cursor-pointer text-red-500">
              More
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
