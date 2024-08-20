import React from "react";

export default function ProjectProps({ title, source, preview, image }) {
  return (
  <> 
 
    <div className="shadow-gray-700 rounded-md space-x-5 m-4 p-2 group bg-gray-600">
      <div>
        <a href={"/"}>
          <div className="flex justify-center items-center group">
            <img
              className="rounded-md h-[200px] w-[300px]"
              src={image} alt="/"/>
          </div>
        </a>
      </div>

      <div className="flex justify-center py-4"><p className="text-xl font-bold">{title}</p></div>

      <div className="md:opacity-0 flex md:group-hover:opacity-100 justify-between font-bold">
       <button className="bg-blue-400 py-1 px-2 rounded-md"><a href={source}>Source Code</a>
        </button> 
       <button className="bg-blue-400 py-1 px-2 rounded-md"><a href={preview}>Preview</a>
        </button> 
       
        
      </div>
    </div>
    </>
  );
}
