import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <div className='mt-16 bg-[#f8f8f8] px-2.5 flex items-center justify-center laptop:gap-7 flex-wrap tablet:gap-5 w-full py-10 '>

        <div className='p-3 laptop:w-[350px] tablet:w-[300px] mobile:w-[300px] '>
            <img src={logo} className='w-60 h-9'/>
            <p  className='mt-3 font-sans text-[15px] '><span  className='font-bold'> Address: </span> bangloo No b281 Suechs Jamshoro</p>
            <p className='mt-3 font-sans text-[15px] '><span className='font-bold'> Telephone: </span> +92 3403269833</p>
            <p className='mt-3 font-sans text-[15px] '><span className='font-bold'> Email: </span> gulbadan128@gmail.com</p>
            
        </div>
        <div className='p-2 laptop:w-[200px] tablet:w-[150px]  mobile:w-[300px] '>
            <h2 className='font-bold font-sans'>Menu</h2>
            <p className='font-sans text-[15px] mt-2 '>Home</p>
            <p className='font-sans text-[15px] '>About</p>
            <p className='font-sans text-[15px] '>Services</p>
            <p className='font-sans text-[15px] '>Testonomial</p>
            <p className='font-sans text-[15px] '>Blog</p>
            <p className='font-sans text-[15px] '>Contact</p>
        </div>

         <div className='p-2 laptop:w-[200px] tablet:w-[150px] mobile:w-[300px] '>
            <h2 className='font-bold font-sans'>Account</h2>
            <p className='font-sans text-[15px] mt-2 '>Check out</p>
            <p className='font-sans text-[15px] '>Login</p>
            <p className='font-sans text-[15px] '>Register</p>
            <p className='font-sans text-[15px] '>Account</p>
            <p className='font-sans text-[15px] '>Shopping</p>
            <p className='font-sans text-[15px] '>Widget</p>
        </div>

         <div className='p-2  laptop:w-[350px] tablet:w-[300px] mobile:w-[300px] mobile:p-4'>
            <h2 className='font-bold font-sans'>NewsLetter</h2>
              <p className='font-sans text-[15px] mt-2 '>Subscribe by our newsletter and get update protidin.</p>
          <div className='flex flex-col laptop:flex-row mt-6 gap-2'>
  <input
    className='font-sans w-56 bg-white h-7 p-8'
    type='email'
    placeholder='Enter Your Email'
  />
  <button className='bg-red-400 w-56 p-3.5 text-white'>Subscribe</button>
</div>


            </div>

    </div>
    <div className='bg-black p-6'>

      <p  className='text-white font-sans text-[15px] text-center'>© 2025 All Rights Reserved By <span className='text-red-500'> Sajjad Hussain Memon </span></p>
      <p className='text-white font-sans text-[15px] text-center'> Front End React <span className='text-red-500'>Developer</span></p>
    </div>
    
    </>
  )
}

export default Footer