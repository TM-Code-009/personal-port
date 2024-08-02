import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { IoLogoFigma, IoLogoReact } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTailwindcss, SiVite } from 'react-icons/si'

const page = () => {
const data = [
    {
        id:1,
        icon:<RiNextjsFill />
    },
    {
        id:2,
        icon:<SiVite />
    },
    {
        id:3,
        icon:<FaNodeJs />
    },
    {
        id:4,
        icon:<SiTailwindcss />
    },
    {
        id:5,
        icon:<IoLogoReact />

    },
    {
        id:6,
        icon:<IoLogoFigma />

    },
]

  return (
    <main className='w-full min-h-[300px] flex flex-col lg:flex-row items-center p-6 justify-between gap-5 lg:gap-0 '>
        <div className='lg:w-[50%] text-center lg:text-left w-full'>
           <p className='text-white text-[30px] font-semi-bold'>About me</p>
           <p className='text-green-400 text-[16px] '>Designer & Developer</p>
           <p className='text-[12px] lg:text-[14px] text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos eligendi, quas temporibus nemo quae et dicta dolorem non reiciendis ex labore veniam laborum libero ullam perferendis quibusdam sequi fugiat.</p>
        </div>

        <div className='w-full lg:w-[40%] flex flex-wrap p-4 justify-center items-center gap-x-7 gap-y-4 '>
           {
            data.map((el) => (
                <div key={el.id} className='text-[100px] flex justify-center items-center text-white'>
                    {el.icon}
                </div>
            ))
           }
        </div>
    </main>
  )
}

export default page