import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import WhyShop from '../Components/WhyShop'
import NewArrival from '../Components/NewArrival'
import Product from '../Components/Product'
import SubscribeDiscount from '../Components/SubscribeDiscount'
import CustomerTestomonial from '../Components/CustomerTestomonial'
import Footer from '../Components/Footer'





const Home = () => {
  return (
    <>
     
  <Hero/>
  <WhyShop/>
  <NewArrival/>
  <Product/>
  <SubscribeDiscount/>
  <CustomerTestomonial/>
  <Footer/>
    </>
  )
}

export default Home