import Image from 'next/image'
import React from 'react'
import img from "../../../public/hero.jpg"

const page = () => {
  return (
     <main className='w-full h-[400px] lg:h-screen flex items-center justify-center relative'>
      <div className='h-[400px] lg:h-full w-full absolute'>
       <Image src={img} alt='' width={1000} height={1000} className='h-full absolute w-full object-cover flex justify-center items-center bg-black opacity-30 '/>
    </div>
        <div className='flex flex-col gap-2 z-10 '>
        <p className='text-[14px] text-green-400'>hello!</p>
        <p className='lg:text-[100px] text-center lg:text-left text-[50px] font-bold text-white '>i am <span className='text-green-400'>Terry<br/>Osakwe</span></p>
        <p className='text-white text-[14px] lg:text-[20px] text-center'>A Freelancer Software-Engineer</p>
    </div>
    
     </main>
  )
}

export default page