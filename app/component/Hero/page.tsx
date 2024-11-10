"use client"
import Image from 'next/image'
import  { useState } from 'react'
import img from "../../../public/hero1.jpg"
import img1 from "../../../public/hero.jpg"
import { MdCancel } from 'react-icons/md'

const page = () => {
   const [toggle,setToggle] = useState(true)
  return (
     <main className='w-full h-[400px] lg:h-screen flex items-center justify-center relative'>
      <div className='h-[400px] lg:h-full w-full absolute'>
       <Image src={img} alt='' width={1000} height={1000} className='h-full absolute w-full object-cover flex justify-center items-center bg-black opacity-30 '/>
    </div>
        <div className='flex flex-col gap-2 z-10 w-full justify-center items-center absolute '>
        <p className='text-[14px] text-green-400 w-[230px] lg:w-[450px] justify-start'>hello!</p>
        <p className='lg:text-[100px] text-center lg:text-left text-[50px] font-bold text-white '>i am <span className='text-green-400'>Terry<br/>Osakwe</span></p>
        <p className='text-white text-[14px] lg:text-[20px] text-center'>A Freelancer Software-Engineer</p>
        <button className='text-white font-semibold border w-[200px] h-[40px] flex justify-center items-center hover:bg-green-400 hover:border-none mt-5 ' onClick={() => {
         setToggle(true)
        }} >Hire Me</button>
    </div>
      {
         toggle ? (<div className='z-50 w-full h-full flex relative justify-center items-center ' >
            <div className='w-[90%] h-[98%] border fixed flex justify-center items-center'>
               <div className='hidden lg:flex w-[50%] h-full  ' >
                  <Image src={img1} alt='' height={1000} width={1000} className='w-full h-full object-cover' />
               </div>
               <div className='w-full lg:w-[50%] h-full flex justify-center items-center flex-col p-8 bg-black opacity-90 ' >
                  <div className='w-full mt-5 h-[10px] flex text-white justify-end '><MdCancel onClick={() => {
                     setToggle(false)
                  }} className='text-[20px] ' /></div>
                 <div className='w-full p-2 lg:w-[300px] h-full flex flex-col lg:mt-20 gap-3 items-center  ' >
                 <div className='flex flex-col w-full '>
                     <label className='text-white font-semibold' >Job type</label>
                     <input type="text" placeholder='fin tech' className='w-full lg:w-[300px] h-[40px] p-2  outline-none ' />
                  </div>

                  <div className='flex flex-col justify-start w-full ' >
                     <label className='text-white font-semibold'>Role</label>
                     <select name="" id="" defaultValue="Role" className='h-[40px] w-full'>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                     </select>
                  </div>
                  <div className='flex flex-col w-full '>
                     <label className='text-white font-semibold'>Pay</label>
                     <input type="text" placeholder='400k' className='w-full lg:w-[300px] h-[40px] p-2  outline-none ' />
                  </div>

                  <div className='w-full' >
                  <textarea name="" id="" placeholder='Job description' maxLength={30} className='h-[100px] resize-none w-full p-2 outline-none ' ></textarea>
                  </div>

                 <button className='text-white font-semibold bg-green-400 w-full h-[40px] ' >
                  Send Request
                 </button>
                  
                 </div>
               </div>

            </div>
         </div>):""
      }
    
     </main>
  )
}

export default page