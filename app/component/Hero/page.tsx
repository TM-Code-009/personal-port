import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
     <main className='w-full min-h-[500px] flex flex-col-reverse lg:flex-row items-center justify-between py-2 lg:py:0'>
        <div className='flex flex-col gap-2 '>
        <p className='text-[14px] text-green-400'>hello!</p>
        <p className='lg:text-[70px] text-center lg:text-left text-[50px] font-bold text-white '>i am <span className='text-green-400'>Terry<br/>Osakwe</span></p>
        <p className='text-white text-[14px] lg:text-[20px] text-center'>A Freelancer Software-Engineer</p>
    </div>
    <div className=''>
       <Image src={""} alt='' width={1000} height={1000} className='lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] object-cover border-2 rounded-full'/>
    </div>
     </main>
  )
}

export default page