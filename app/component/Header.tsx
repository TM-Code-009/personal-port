"use client"
import Image from 'next/image'
import React from 'react'
import logo1 from '../../public/logo1.png'


const Header = () => {
    
  return (
    <div className='w-full h-[80px] lg:h-[110px] flex items-center bg-neutral-800 relative '>
       <div   className='w-[90%] h-[80px] lg:h-[110px] flex items-center fixed  justify-start border-b z-10 bg-neutral-800'>
       <Image src={logo1} alt='' width={1000} height={1000} className='w-[80px] lg:w-[150px] h-[80px] lg:h-[150px] object-contain'/>

       </div>
    </div>
  )
}

export default Header