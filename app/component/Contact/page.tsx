import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const page = () => {
    const data = [
        {
            id:1,
            icon:<FaPhoneAlt />,
            desc:"09023667255"
        },
        {
            id:2,
            icon:<Link href={"https://wa.link/b6zydn"}><FaWhatsapp /></Link>,
            desc:"+2349023667255"
        },
        {
            id:3,
            icon:<MdEmail />,
            desc:"osakweterrynduka@gmail.com"
        },
    ]
  return (
     <main className='w-full min-h-[500px] bg-neutral-900  flex flex-col lg:flex-row justify-center items-center p-4 gap-10 lg:gap-0'>
         <div className='w-[50%] flex flex-col h-full text-center lg:text-left'>
            <p className='text-[25px] md:text-[30px] text-green-400 font-semibold'>CONTACT ME </p>
            <div className='mt-5 flex lg:flex-col gap-5 text-center justify-center flex-wrap'>
                {
                  data.map((el:any) => (
                    <div key={el.id} className='flex gap-2  items-center'>
                         <div className='w-[40px] h-[40px] flex justify-center items-center rounded-full border-2 text-green-400'>{el.icon}</div>
                         <div className='text-[14px] text-white'>{el.desc}</div>
                    </div>
                  ))
                }
            </div>
         </div>

         <div className='w-[30%]  flex flex-col gap-5 justify-center items-center text-white'>
            <input type="text" className='w-[270px] lg:w-[400px] h-[40px] outline-none border bg-inherit p-2' placeholder='Your Name'/>
            <input type="text" className='w-[270px] lg:w-[400px] h-[40px] outline-none border bg-inherit p-2'placeholder='Your Email' />
            <input type="text" className='w-[270px] lg:w-[400px] h-[40px] outline-none border bg-inherit p-2'placeholder='Purpose of email' />
            <textarea className='h-[120px] w-[270px] lg:w-[400px] bg-inherit border p-2 outline-none resize-none ' placeholder='Your Message' ></textarea>
            <button className='w-[270px] lg:w-[400px] h-[40px] flex justify-center items-center font-semibold text-[14px] bg-green-400 hover:bg-neutral-900 hover:border '>Send Message</button>
         </div>
     </main>
  )
}

export default page