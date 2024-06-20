import React from 'react'

export default function SkillsLogo({logo, title}) {
  return (
   
    <div className="flex justify-center ">
      <div className="flex flex-col gap-3 items-center">
        <img src={logo} width={40} height={40} alt="/" className='md:w-[60px] lg:w-[80px]' />
        <h3 className="text-[10px] font-semibold ">{title}</h3>
      </div>
    </div>
   
  )
}
