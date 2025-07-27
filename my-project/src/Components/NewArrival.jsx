import React from 'react'
import Arrivalbg from '../assets/arrival-bg.png'

const NewArrival = () => {
  return (
    <div>
        <section className='w-full grid h-full place-items-center laptop:grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 mt-16 bg-[#d4ced0]'>
            <div className='w-md h-full  mobile:w-[300px] mobile:mx-auto mobile:order-2 laptop:order-1 tablet:w-full laptop:block laptop:ml-28'>
            <img src={Arrivalbg} className='w-full object-center object-cover' />
            </div>
            <div className='w-md p-4 mt-10 text-center mr-96 mobile:w-full mobile:mr-auto mobile:order-1 laptop:order-2 laptop:mr-96'>
                <h2 className='tablet:text-[3.5rem] text-[#0C0C0C] font-semibold font-playfair mobile:text-[36px]'>#New Arrival </h2>
                <p className='font-sans text-black opacity-[0.8] leading-[30px] mt-8 text-[20px] '> 
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                     </p>
                     <button className='font-sans w-[200px] cursor-pointer p-3.5 bg-red-500 hover:bg-[#d4ced0] hover:text-red-600 hover:border-solid hover:border-red-500 hover:border-[3px] transition-all duration-75 mt-4 text-white text-center'>Shop now</button>
            </div>


        </section>
    </div>
  )
}

export default NewArrival