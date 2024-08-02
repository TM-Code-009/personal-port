"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo1 from '../../public/logo1.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdCancel, MdMenu } from 'react-icons/md'


const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const pathname = usePathname();

    // const handleToggle = () => {
    //     setToggle(!toggle)
    // }
    const data = [
        {
            id:1,
            name: "Home",
            url:"/"
        },
        {
            id:2,
            name: "What i do",
            url:""
        },
        {
            id:3,
            name: "About",
            url:""
        },
        {
            id:4,
            name: "Contact me",
            url:""
        },
    ]
  return (
    <div className='w-full h-[80px] flex items-center bg-neutral-800 relative '>
       <div   className='w-[90%] h-[80px] flex items-center fixed  justify-between  lg:gap-32 border-b z-10 bg-neutral-800'>
       <Image src={logo1} alt='' width={1000} height={1000} className='w-[100px] h-[80px] object-contain'/>

<div className='hidden w-full lg:flex gap-10'>
    {
        data.map((el:any) => (
            <Link href={el.url} key={el.id} className={pathname === el.url ? "text-[14px] font-semibold text-green-500 hover:text-white hover:underline ":"text-white"} >
                {el.name}
            </Link>
        ))
    }
</div>

   <div  className='flex lg:hidden text-[30px] text-white flex-col' >
   {toggle ? (
              <MdCancel
                onClick={() => {
                  setToggle(false);
                }}
                className="text-white text-[30px] cursor-pointer"
              />
            ) : (
              <MdMenu
                onClick={() => {
                  setToggle(true);
                }}
                className="text-white text-[30px] cursor-pointer"
              />
            )}
   <div className='flex justify-end'>
          {toggle && (
            <div
              className={`flex flex-col w-[70%]  items-start bg-black px-6 py-5  h-[50vh] absolute top-[80px]   gap-5 lg:hidden  `}
            >
              {data.map((el: any) => (
                <Link
                  key={el.id}
                  className="text-[14px] mb-5 font-normal text-gray-400 hover:text-white hover:shadow-sm"
                  href={el.url}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {el.name}
                </Link>
              ))}
            </div>
          )}
        </div>
 </div> 
   

       </div>
    </div>
  )
}

export default Header