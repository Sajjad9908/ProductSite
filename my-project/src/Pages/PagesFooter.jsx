import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const PagesFooter = () => {
  return (

    <div  className='bg-[#002c3e]' >
    <div className=' px-2.5 flex items-center justify-center gap-3.5 flex-wrap p-16 '>
    
            <div className='p-9 text-white'>
                <h4 className='text-[#FFFFFF] font-playfair text-[28px]'>Reach At ..</h4>
                <div className='flex items-center gap-2 mt-7'>
                <p  className='font-sans text-[15px] hover:text-red-500 hover:cursor-pointer '><MdLocationPin size={20} /></p> <p  className='font-sans text-[16px] text-center  hover:text-red-500 hover:cursor-pointer'>Location </p> 
                </div>
               <div className='flex items-center gap-2 mt-3'>
                <p  className='font-sans text-[15px]  hover:text-red-500 hover:cursor-pointer'><IoCall size={20} /></p> <p  className=' text-[16px] text-center font-sans  hover:text-red-500 hover:cursor-pointer'>Call +92 3403269833 </p> 
                </div>
                 <div className='flex items-center gap-2 mt-3'>
                <p  className='font-sans text-[15px]  hover:text-red-500 hover:cursor-pointer'><CgMail size={20} /></p> <p  className='font-sans text-[16px] text-center  hover:text-red-500 hover:cursor-pointer'>somebody@gmail.com </p> 
                </div>
                
            </div>
            <div className='p-6 text-white max-w-[340px]'>
                <h4 className='text-[#FFFFFF] font-sans font-bold text-[28px] '>Fammas</h4> 
                <p className='font-sans text-[16px] text-left mt-7 '>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                <div className='flex items-center mt-3 gap-3'>
                    <a className='w-8 h-8 text-center rounded-[50%] bg-white text-black' href='https://facebook.com'><BiLogoFacebook className='text-[30px] m-auto hover:text-red-500 text-center'/></a>
                    <a className='w-8 h-8 text-center rounded-[50%] bg-white text-black' href='https://twitter.com'><FaTwitter className='text-[22px] m-auto text-center mt-1 hover:text-red-500 '/></a>
                    <a className='w-8 h-8 text-center rounded-[50%] bg-white text-black' href='www.facebook.com'><FaLinkedinIn className='text-[22px] text-center m-auto mt-1 hover:text-red-500 '/></a>
                    <a className='w-8 h-8 text-center rounded-[50%] bg-white text-black' href='www.facebook.com'><FaInstagram className='text-[22px] text-center mt-1 m-auto hover:text-red-500 '/></a>
                </div>

            </div>
            </div>

            <div className='max-w-7/12 h-[1px] bg-gray-200 m-auto '/> 
             <p  className='text-white font-sans mt-2 text-[15px] text-center'>© 2025 All Rights Reserved By <span className='text-red-500'> Sajjad Hussain Memon </span></p>
             <p className='text-white font-sans text-[15px] text-center'> Front End React <span className='text-red-500'>Developer</span></p>
          


            </div>
  )
}

export default PagesFooter