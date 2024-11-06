import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const data =[
        {
            id:1,
            icon:<FaFacebookF />,
            url:"https://web.facebook.com/profile.php?id=100073643885134"
        },
        {
            id:2,
            icon:<FaInstagram />,
            url:"https://www.instagram.com/terry_osakwe/"
        },
        {
            id:3,
            icon:<CiLinkedin />,
            url:"https://www.linkedin.com/in/terry-osakwe-5314a731b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BZdG%2BfQrbTb%2BvRHY%2BEwTHAA%3D%3D"
        },
    ]
  return (
    <div className='w-full h-[100px] flex justify-center items-center bg-neutral-900 gap-2 flex-col '>
        <p className='text-white text-[14px] font-normal'>Copyright Terry-Osakwe</p>
        <div className='w-[100px]'><hr /></div>
         
         <div className='flex gap-3'>
            {
                data.map((el:any) => (
                    <Link href={el.url} key={el.id} >
                       <div className='text-white relative 
                       transition-all 
                       hover:text-green-400 hover:bottom-2  
                        '>{el.icon}</div> 
                    </Link>    
                ))
            }
         </div>

    </div>
  )
}

export default Footer