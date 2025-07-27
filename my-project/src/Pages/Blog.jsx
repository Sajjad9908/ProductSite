import React from 'react'
import WhyShop from '../Components/WhyShop'
import PagesFooter from './PagesFooter'

const Blog = () => {
  return (
   <>
     <div className='w-full h-32 bg-red-500 flex justify-center items-center  '>
    <h1 className='text-white laptop:text-[44px] text-center font-sans font-bold text-[34px]'>Blog List</h1>
    </div>
<WhyShop/>
<PagesFooter/>

   </>
  )
}

export default Blog