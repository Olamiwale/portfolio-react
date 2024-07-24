import React from "react";
import Form from "./Form";
import Card from "../Card";


export default function Contact() {
  return (
    <>
      <div className="p-8 mt-[100px] md:mt-[50px]">
        <p className="text-xl tracking-widest font-bold">Contact</p>
        <h2 className="text-xl font-semibold">Get In Touch</h2>
        <div className="w-[93%] m-auto md:grid grid-cols-2 gap-8 items-center justify-center">
      
         <Card />

        {/*Form section */}

          <div className="flex justify-center m-auto w-full mt-16 md:mt-0 p-4 bg-gray-300 rounded-lg shadow-gray-400 shadow-xl h-[600px]">

          <Form />
          </div>
        </div>
      </div>
    </>
  );
}
