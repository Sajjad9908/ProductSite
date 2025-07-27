import React from 'react'

const SubscribeDiscount = () => {
  return (
    <>
    <div className='w-full bg-[#d4ced0] flex flex-col items-center justify-center mt-16 p-6'>
        <h3 className='text-[40px] font-sans font-semibold mt-6 m-6 mobile:text-[35px]'>
            Subscribe To Get Discount Offers
        </h3>
        <p className='text-[18px] font-sans text-[#0C0C0C] m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <input className='w-full tablet:max-w-2/5 h-11 mt-6 p-4 focus:outline-none text-left rounded-3xl bg-white' type='email' placeholder='Enter your email'/>
        <button className='bg-red-600 text-white w-64 mt-8 rounded-3xl p-2 cursor-pointer hover:bg-[#d4ced0] hover:border-2 hover:border-solid hover:text-red-400 
        transition-all duration-100 hover:border-red-400'>Subscribe</button>

    </div>
    </>
  )
}

export default SubscribeDiscount