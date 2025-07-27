import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [search,setSearch] = useState(false);
   

   const navbarTabs = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About-us", path: "/about-us" },
  { id: 3, name: "Product", path: "/product" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

  return (
   <>
   <div className={'flex justify-around items-center gap-20' }>
    <div className='w-[300px] h-[80px] mt-1.5 p-3 mobile:w-[200px] mobile:h-[60px] laptop:w-[350px] laptop:h-[90px]'>
        <img src={logo} />
    </div>
     <ul className='hidden laptop:flex items-center justify-center gap-4' >
        {navbarTabs.map((navbarTabs,index)=>(
         <li  key={navbarTabs.id}><NavLink   to={navbarTabs.path}  className={({ isActive }) =>
                `text-[18px] p-3 font-montserrat font-bold hover:text-red-400 transition-colors duration-100  ${
                  isActive ? "text-red-400 transition-all duration-100" : ""
                }`
              }>{navbarTabs.name}</NavLink></li>
        ))}
     </ul>
     <div className=' justify-center items-center relative gap-3.5 hidden laptop:flex'>
        <IoCart size={25}className='hover:text-red-400 transition-all duration-75' />
        <FaSearch size={25}  onClick={()=>setSearch(!search)}  className='hover:text-red-400 transition-all duration-75' />

</div>
   {search && (
  <div className='fixed top-0 left-0 w-full bg-white shadow-lg z-[9999] p-4'>
    <div className='flex justify-between items-center'>
      <input type="text" placeholder="Search..." className='w-full p-2 border border-gray-300 rounded' />
      <IoCloseSharp
        size={28}
        className="ml-2 cursor-pointer hover:text-red-400 transition-all duration-200"
        onClick={() => setSearch(false)}
      />
    </div>
  </div>
)}

        
   
     <IoMenuSharp size={28} className='block laptop:hidden text-4xl font-bold'onClick={()=>setIsOpen(!isOpen)}/>
        <div className={`fixed top-0 left-[-290px] w-[250px] h-full bg-white shadow-lg z-50 transition-all duration-300 ${isOpen ? 'left-[0px]' : ''} laptop:hidden`}>
             <div className="flex justify-end p-4">
    <IoCloseSharp
      size={28}
      className="cursor-pointer text-red-600 hover:text-red-400 transition-all duration-200"
      onClick={() => setIsOpen(false)}
    />
  </div>
          <ul className='flex flex-col items-start p-4'>
            {navbarTabs.map((navbarTabs) => (
              <li key={navbarTabs.id} className='my-2'>
                <NavLink
                  to={navbarTabs.path}
                  className={({ isActive }) =>
                    `text-[18px] p-3 font-montserrat font-bold hover:text-red-400 transition-colors duration-100 ${
                      isActive ? "text-red-400 transition-all duration-100" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {navbarTabs.name}
                </NavLink>
              </li>
            ))}
            </ul>
            <div className='flex justify-center items-center gap-3.5 p-4'>
              <IoCart size={25} className='hover:text-red-400 transition-all duration-75' />
              <FaSearch size={25}  onClick={() => setSearch(!search)} className='hover:text-red-400 transition-all duration-75' />
              </div>
              </div>

    </div>

  
   
   </>
  )
}

export default Navbar