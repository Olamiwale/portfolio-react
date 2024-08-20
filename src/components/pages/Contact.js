import React from "react";
import Form from "./Form";
import Card from "../Card";


export default function Contact() {
  return (
    <>
      <div className=" text-white p-8 mt-[100px] md:mt-[50px]">
        <p className="text-xl tracking-widest py-3 font-bold">Contact</p>
        <h2 className="text-xl font-semibold py-4">Get In Touch</h2>
        <div className="w-[93%] m-auto md:grid grid-cols-2 gap-8 items-center justify-center">
      
         <Card />

        {/*Form section */}

          <div className="flex justify-center m-auto w-full mt-16 md:mt-0 p-4 bg-gray-700 rounded-lg shadow-xl h-[600px]">

          <Form />
          </div>
        </div>
      </div>
    </>
  );
}
