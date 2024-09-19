import React, { useState } from "react";


export default function Form() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  return (
    <form className="w-full">
      <div className="grid mt-[30px]">      

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 font-bold ">Name</label>
          <input className="p-2 rounded text-[15px]" type="text"
                 name="name" value={name}
                 onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 font-bold">Phone</label>
          <input className="p-2 rounded text-[15px]" type="number"
                 name="phone" value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 font-bold">Email</label>
          <input className="p-2 rounded text-[15px]" type="email"
                 name="email" value={phone}
                 onChange={(e)=>setPhone(e.target.value)}/>
        </div>
       

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 font-bold">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="5"
            name="message"
          ></textarea>
        </div>

        <div className="flex justify-center">
           <button className="mt-[35px] hover:bg-blue-500 bg-blue-400 p-2 w-1/2 flex justify-center">
          Send Message
        </button>  
        </div>

       
      </div>
    </form>
  );
}


