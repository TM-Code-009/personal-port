import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import {IoLogoFigma} from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiExpress, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si'

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
        icon:<SiExpress />

    },
    {
        id:6,
        icon:<IoLogoFigma />

    },
    {
        id:7,
        icon:<SiTypescript/>

    },
    {
        id:8,
        icon:<DiMongodb />

    },
]

  return (
    <main className='w-full min-h-[300px] flex flex-col lg:flex-row items-center p-6 justify-between gap-5 lg:gap-0 '>
        <div className='lg:w-[50%] text-center lg:text-left w-full'>
           <p className='text-white text-[30px] font-semi-bold'>About me</p>
           <p className='text-green-400 text-[16px] '>Designer & Developer</p>
           <p className='text-[12px] lg:text-[14px] text-white '>I am a <span className='text-green-400'>Full-stack software-engineer & UI/UX designer</span>, For front-end development  i make use of react-framworks like <span className='text-green-400'>Next.js & Vite.js</span> and <span className='text-green-400'>Tailwind</span> for styling, For back-end development I make use of <span className='text-green-400'>Typescript</span> programing language and <span className='text-green-400'>node.js,express  </span> and for the database i make use of <span className='text-green-400' >mongodb</span> for UI design i make use of <span className='text-green-400' >Figma</span> .<br/> Avaliable for hire  </p>
        </div>

        <div className='w-full lg:w-[40%] flex flex-wrap p-4 justify-center items-center gap-x-7 gap-y-4 '>
           {
            data.map((el) => (
                <div key={el.id} className='sm:text-[70px] text-[60px]  flex justify-center items-center text-white'>
                    {el.icon}
                </div>
            ))
           }
        </div>
    </main>
  )
}

export default page