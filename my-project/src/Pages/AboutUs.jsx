import React from 'react'
import Navbar from '../Components/Navbar'
import WhyShop from '../Components/WhyShop'
import NewArrival from '../Components/NewArrival'
import PagesFooter from './PagesFooter'

const AboutUs = () => {
  return (
    <>
   
    <div className='w-full h-32 bg-red-500 flex justify-center items-center  '>
    <h1 className='text-white laptop:text-[44px] text-center font-sans font-bold text-[34px]'>About Us</h1>
    </div>

     <WhyShop/>
     <NewArrival/>
     <PagesFooter/>
    </>
    

  )
}

export default AboutUs