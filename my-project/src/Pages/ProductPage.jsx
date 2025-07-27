import React from 'react'
import Product from '../Components/Product'
import PagesFooter from './PagesFooter'

const ProductPage = () => {
  return (
    <>
     <div className='w-full h-32 bg-red-500 flex justify-center items-center  '>
    <h1 className='text-white laptop:text-[44px] text-center font-sans font-bold text-[34px]'>Product Grid</h1>
    </div>

    <Product/>
    <PagesFooter/>
    </>
  )
}

export default ProductPage