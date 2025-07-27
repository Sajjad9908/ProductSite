import React, { useEffect, useState } from 'react'
import { fetchproduct } from '../redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

const Product = () => {
  const [showall, setShowall] = useState(false)
  const { product, error, loading } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchproduct())
  }, [dispatch])

  if (loading) return <h1>Loading...</h1>
  if (error) return <p>...Error</p>

  const visibleProducts = showall ? product : product.slice(0, 6)

  return (
    <>
      <div className='group w-full relative'>
        <h1 className='text-center tablet:text-[56px] font-sans mt-[60px] text-[#0C0C0C] font-bold  mobile:text-[42px]'>
          <span className='text-red-500'>Our </span> Products
        </h1>
        <div className='absolute w-[100px] bg-red-500 h-1 text-center left-2/4'></div>
      </div>

      <div className='flex flex-wrap justify-center gap-10 w-[90%] max-w-[1200px] m-auto mt-9 p-2.5'>
        <AnimatePresence>
          {visibleProducts.map((products) => (
            <div className='hover:opacity-50 transition-opacity duration-75'>
            <motion.div
              key={products.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
              className='bg-[#f7f8f9] group w-[350px] p-4 rounded-3xl relative overflow-hidden shadow-md hover:opacity-60 transition-opacity duration-100'
            >
              <img
                className='w-[350px] object-center h-[120px] object-contain bg-[#f7f8f9]'
                src={products.image}
                alt={products.title}
              />
              <div className='flex items-center justify-between w-full p-6 gap-4'>
                <h3 className='font-sans'>{products.title}</h3>
                <p className='w-full text-red-500 font-sans'>{products.price}$</p>
              </div>
              <div className="absolute bottom-[-100%] left-0 w-full h-full flex flex-col justify-center items-center gap-4 
                    transition-all duration-500 group-hover:bottom-0">
                <button className="bg-red-500 text-white px-4 py-2 rounded-[20px] hover:bg-red-600 transition">Add to Cart</button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-[20px] hover:bg-black transition">View Details</button>
              </div>
            </motion.div>
            </div>
          ))}
        </AnimatePresence>

      </div>
      <div className='m-auto w-[72] flex items-center mt-10  p-7'>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          className='bg-red-500 w-72 p-3 rounded-2xl text-white cursor-pointer m-auto'
          onClick={() => setShowall(!showall)}
        >
          {showall ? 'Show Less' : 'View All Products'}
        </motion.button>
      </div>
    </>
  )
}

export default Product
