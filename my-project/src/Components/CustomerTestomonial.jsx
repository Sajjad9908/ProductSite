import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Sajjad from '../assets/sajjad.jpg'
// Import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export default function Testimonial() {


  return (
    <div className='relative mt-16 max-w-4xl mx-auto overflow-hidden'>
      
      {/* Prev Button */}
      <div className="testimonial-prev absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <button className="w-12 h-12 bg-red-600 text-white text-xl rounded-full flex items-center justify-center border-2 border-white hover:bg-red-700 transition">
          <GrFormPrevious />
        </button>
      </div>

      {/* Next Button */}
      <div className="testimonial-next absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <button className="w-12 h-12 bg-red-600 text-white text-xl rounded-full flex items-center justify-center border-2 border-white hover:bg-red-700 transition"><MdNavigateNext />
          
        </button>
      </div>

      <Swiper
        cssMode={true}
        navigation={{
          nextEl: '.testimonial-next',
          prevEl: '.testimonial-prev',
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {[1, 2, 3].map((_, i) => (
          <SwiperSlide >
            <div className='flex flex-col items-center text-center p-6 space-y-4'>
              <img
                className='w-[150px] h-[150px] rounded-full object-cover'
                src={Sajjad}
                style={{ filter: 'drop-shadow(0 4px 6px red)' }}
                alt='Client'
              />
              <p className='text-lg font-semibold font-sans text-[20px]'>Sajjad Hussain Memon</p>
              <p className='text-sm text-gray-500'>Customer</p>
              <p className='text-sm max-w-md font-sans'>
                Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et,
                perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium
                sapiente nam! Quaerat.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
