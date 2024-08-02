import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero/page'
import Whatido from './component/Whatido/page'
import About from './component/About/page'
import Contact from './component/Contact/page'
import Footer from './component/Footer'

const page = () => {
  return (
    <div className='flex flex-col'>
      
       <Hero/>
       <Whatido/>
       <About/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default page