import React from "react";


export default function ProjectProps({ title }) {
  return (
    <div className="shadow-gray-700 rounded-md space-x-4 p-4">
      <a href={'/'}>
        <div className="flex justify-center  items-center group">
          <img
            className="rounded-md group-hover:opacity-50 h-[200px]"
            src={'https://tse4.mm.bing.net/th?id=OIP.Yb9ccHZuEW52enMrIh_8wAHaE7&pid=Api&P=0&h=220'}
            alt="/"
            
          />

          <div className="absolute text-white justify-center items-center flex flex-col gap-4 opacity-0 ">
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
