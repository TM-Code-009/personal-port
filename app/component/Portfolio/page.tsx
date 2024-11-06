import React from 'react'
import Image from 'next/image'
import pic from "../../../public/port1.png"
import pic1 from "../../../public/port2.png"
import pic2 from "../../../public/port3.png"
// import pic3 from "../../../public/port4.jpg"

const page = () => {
  const data = [
    {id:0,img:pic,url:"https://just-codify,web.app"},
    {id:1,img:pic1,url:""},
    {id:2,img:pic2,url:""},
  ]
  return (
    <div className='min-h-[300px] w-full flex flex-col justify-center items-center '>
       <p className='text-white font-semibold text-[25px]'>PORTFOLIO</p>
       <div className='w-full h-[200px] grid md:col-span-2 lg:col-span-4 overflow-y-scroll md:grid-cols-2 lg:grid-cols-3 gap-3 p-6 '>
         {
          data.map((el:any) => (
            <div key={el.id}  >
                <Image src={el.img} alt="" className='w-[300px] h-[200px] object-contain ' width={1000} height={1000}  />
            </div>
          ))
         }
       </div>
    </div>
  )
}

export default page