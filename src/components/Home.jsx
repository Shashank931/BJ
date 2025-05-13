import React from 'react';
import logo from '../assets/logo.png';
const Home = () => {
  return (
    <div className='text-black flex w-full justify-between items-start p-10 md:p-20 '>

      <div className='md:w-2/4 md:pt-10 '>

        <h1 className='text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter'>Hello I am Bhagwan Jha</h1>
        <h3 className='text-2xl text-blue-600 md:text-3xl font-bold flex leading-normal tracking-tighter'>Advocate</h3>

        <p className=' text-blue-600 text-sm font-medium md:text-2xl tracking-tight'>Tax & Legal Consultant</p>

        <button className=' mt-5 md:md-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#3e58c0]'>Contact Us
        </button>

      </div>

      <div className='=md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end'>

        <img className='w-2/3 md:w-1/2' src={logo} alt="logo" />

      </div>
    </div>


  )
}

export default Home