import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from '../assets/slider-bg.jpg';

import 'swiper/css';

import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="relative w-full h-[50rem] overflow-hidden">
      {/* Background Image */}
      <img
        src={slider}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background"
      />

      {/* Optional overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10"></div>

      {/* Swiper Container */}
      <div className="relative z-20 h-full w-full">
        <Swiper
          className="h-full"
          
          pagination={true}
          keyboard={true}
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center absolute h-full px-6 text-center text-white ml-7 mobile:px-2">
              <h1 className="text-red-600 text-5xl md:text-7xl font-bold mb-4 mobile:text-[42px]">Sale 20% off</h1>
              <h2 className="text-black font-bold text-4xl md:text-6xl mb-4 mobile:text-3xl">On Everything</h2>
              <p className="max-w-3xl text-lg md:text-xl text-black opacity-[0.8]  mobile:w-full mobile:text-[18px]">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
                Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam,
                vel architecto veritatis delectus repellat modi impedit sequi.
              </p>
              <button className='bg-red-600 p-2.5 width-[350px] mt-4 cursor-pointer hover:bg-red-400 transition-all duration-75'>Shop Now</button>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
           <div className="flex flex-col justify-center items-center absolute h-full px-6 text-center text-white ml-7 mobile:px-2">
              <h1 className="text-red-600 text-5xl md:text-7xl font-bold mb-4 mobile:text-[42px]">Sale 20% off</h1>
              <h2 className="text-black font-bold text-4xl md:text-6xl mb-4 mobile:text-3xl">On Everything</h2>
              <p className="max-w-3xl text-lg md:text-xl  text-black opacity-[0.8] mobile:text-[18px] mobile:w-full">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
                Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam,
                vel architecto veritatis delectus repellat modi impedit sequi.
              </p>
              <button className='bg-red-600 p-2.5 width-[350px] mt-4 cursor-pointer hover:bg-red-400 transition-all duration-75'>Shop Now</button>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center absolute h-full px-6 text-center text-white ml-7 mobile:px-2">
              <h1 className="text-red-600 text-5xl md:text-7xl font-bold mb-4 mobile:text-[42px] font-sans">Sale 20% off</h1>
              <h2 className="text-black font-bold text-4xl md:text-6xl mb-4 mobile:text-3xl font-sans">On Everything</h2>
              <p className="max-w-3xl text-lg md:text-xl  text-black opacity-[0.8] mobile:text-[18px] mobile:w-full font-sans ">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
                Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam,
                vel architecto veritatis delectus repellat modi impedit sequi.
              </p>
              <button className='bg-red-600 p-2.5 width-[350px] mt-4 cursor-pointer hover:bg-red-400 transition-all duration-75'>Shop Now</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
