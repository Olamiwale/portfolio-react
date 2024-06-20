import React from 'react'

export default function Card () {
  return (
    <div>
         <div className="p-4 md:p-8 bg-gray-200 rounded-lg shadow-gray-400 shadow-xl h-[600px] ">
            <img
              className="rounded-xl m-auto mt-[30px]" 
              width={300} height={30} 
              src="./about.jpg" 
              alt="/profile-picture"/>

            <div>
              <h2 className="py-4 font-bold text-2xl">Paul Ola</h2>
              <p>Front-End Developer</p>
              <p className="py-2">
                I am available for freelance or full-time positions. Contact me
                and let&apos;s talk.
              </p>
            </div>

            <div>
              <p className="uppercase pt-8 font-semibold text-center"> Connect With Me</p>

              <div className="flex justify-evenly py-8">
                <a href="https://github.com/Olamiwale" 
                target="_blank" 
                rel="noreferrer">Github</a>

                <a href="https://www.linkedin.com/in/paul-olawale-9236b51a3/"
                  target="_blank" 
                  rel="noreferrer" >Linkdlin</a>
              </div>
            </div>
          </div>
    </div>
  )
}
