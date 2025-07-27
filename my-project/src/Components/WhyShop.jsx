import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";
const WhyShop = () => {
    const whyshopadata=[
        {   
            id:1, 
            icon:<FaTruckArrowRight size={48}/>,
            title:"Fast Delivery",
            message:"variations of passages of Lorem Ipsum available"
        },
        {
           id:2,
           icon:<MdLanguage size={48} />,
           title:"Free Shiping",
           message:"variations of passages of Lorem Ipsum available"
           
        },
        {
            id:3,
            icon:<FaMedal size={48} /> ,
            title:"Best Quality" ,
            message:"variations of passages of Lorem Ipsum available" ,

        }
    ]
  return (
    <>
    <div className='group w-full mt-16'>
      <h1 className='text-center tablet:text-[56px] font-playfair mt-3.5 text-[#0C0C0C] font-bold relative mobile:text-[42px]'>Why Shop US</h1>
       <div className='absolute w-[100px] bg-red-500 h-1 text-center left-2/4 '></div>
    </div>
   
    <div className='grid justify-center laptop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 mt-10 p-6 place-items-center gap-8 max-w-[1100px] m-auto tablet:w-full mobile:w-full'>
        
        {whyshopadata.map((data)=>(
        <div key={data.id} className='bg-[#002C3E] text-white w-full min-w-[300px] h-[250px] text-center p-6 rounded-lg'>
            <div className='flex items-center justify-center'>
                {data.icon}
            </div>
            <div className='font-montserrat p-2 mt-2'>
                <h5 className='font-sans text-[21px] font-bold text-white'>
                    {
                        data.title
                    }</h5> 
                    <p className='font-sans text-[16px] text-white mt-1.5'>
                        {data.message}
                    </p>

            </div>

        </div>
        ))}
    
    </div>
    </>
  )
}

export default WhyShop