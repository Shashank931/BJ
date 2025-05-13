import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='text-black flex w-full justify-between items-start p-10 md:p-20 '>

      <div className='md:w-2/4 md:pt-10 '>

        <h1 className='text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter'>Hello I am Bhagwan Jha</h1>
        <h3 className='text-2xl text-blue-600 md:text-3xl font-bold flex leading-normal tracking-tighter'>Advocate</h3>

        <p className=' text-blue-600 text-sm font-medium md:text-2xl tracking-tight'>Tax & Legal Consultant</p>

        <Link to="/contact">
          <button
            className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-[#3e58c0]
      transition-all duration-300 ease-in-out
      active:scale-95 hover:scale-105 hover:opacity-90
      shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>
        </Link>



      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end items-center md:items-start">
        <img
          className="w-2/4 max-w-[100px] sm:max-w-[140px] md:w-[220px] md:max-w-[260px] lg:w-[280px] lg:max-w-[300px] object-contain transition-transform duration-300 hover:scale-105"
          src={logo}
          alt="logo"
        />
      </div>

   </div>


  )
}

export default Home