import React from 'react'
import { FaLaptopCode, FaMobile } from 'react-icons/fa'
import { SiAltiumdesigner } from 'react-icons/si'

const page = () => {
    const data = [
        {
            id:1,
            title: 'Web Development',
            description: 'I specialize in creating responsive and user-friendly websites using HTML, CSS, and JavaScript.',
            icon:<FaLaptopCode />
        },
        {
            id:2,
            title: 'UI/UX',
            description: "I specialize in creating responsive and user-friendly",
            icon: <SiAltiumdesigner />
        },
        {
            id:3,
            title: 'Responsiveness',
            description: "I specialize in creating responsive and user-friendly",
            icon: <FaMobile />
        },
        {
            id:4,
            title: 'Responsiveness',
            description: "I specialize in creating responsive and user-friendly",
            icon: <FaMobile />
        },
        {
            id:5,
            title: 'Responsiveness',
            description: "I specialize in creating responsive and user-friendly",
            icon: <FaMobile />
        },
        {
            id:6,
            title: 'Responsiveness',
            description: "I specialize in creating responsive and user-friendly",
            icon: <FaMobile />
        },
    ]
  return (
    <div className='w-full min-h-[230px] flex justify-center items-center pt-3 flex-col gap-5 bg-neutral-900  '>
        <p className='text-[30px] font-semibold text-white '>What i do</p>
        <div className='w-full flex justify-between p-6 lg:flex-row gap-5 flex-wrap '>
            {
                data.map((el:any) => (
                 <div key={el.id} className='flex gap-2'>
                    <div className='text-[14px] w-[50px] h-[50px] rounded-full border-2 flex justify-center items-center md:text-[20px] text-green-400'>
                    {el.icon}
                    </div>
                    <div className='w-[100px] md:w-[250px] '>
                        <p className='text-white text-[10px] md:text-[20px] font-bold'>{el.title}</p>
                        <p className='text-white text-[10px] md:text-[12px] w-[200px]'>{el.description}</p>
                    </div>
                 </div>
                ))
            }
        </div>
    </div>
  )
}

export default page