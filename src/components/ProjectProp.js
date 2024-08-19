import React from "react";

export default function ProjectProps({ title, source, preview }) {
  return (
  <> 
 
    <div className="shadow-gray-700 rounded-md space-x-5 m-4 p-2 bg-red-200">
      <div>
        <a href={"/"}>
          <div className="flex justify-center items-center group">
            <img
              className="rounded-md group-hover:opacity-50 h-[200px]"
              src={"https://tse4.mm.bing.net/th?id=OIP.Yb9ccHZuEW52enMrIh_8wAHaE7&pid=Api&P=0&h=220"} alt="/"/>
          </div>
        </a>
      </div>

      <div className="group flex justify-between font-bold p-2">
       <button className="bg-blue-400 p-2 rounded-md"><a href={"/"}>source</a>
        </button> 
       <button className="bg-blue-400 p-2 rounded-md"><a href={"/"} >preview</a>
        </button> 
       
        
      </div>
    </div>
    </>
  );
}
  