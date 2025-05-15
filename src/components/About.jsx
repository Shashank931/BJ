import React from 'react'
import about from "../assets/about.png"
import {IoArrowForward} from "react-icons/io5"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='text-black relative ml-2 mr-2 mt-3 md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-blue-200 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className=' md:h-80' src={about} alt="About" />

                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1"/>

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>BJ Associate</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores molestiae molestias. Odio assumenda dolores, ducimus facere cumque inventore quos?</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1"/>

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>BJ Associate</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores molestiae molestias. Odio assumenda dolores, ducimus facere cumque inventore quos?</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1"/>

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>BJ Associate</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores molestiae molestias. Odio assumenda dolores, ducimus facere cumque inventore quos?</p>
                        </span>
                    </div>
                </ul>
            </div>
           
        </div>
              <Link to="/MoreDetails">
  <div className="mt-5 md:mt-0 md:absolute md:bottom-8 md:right-8">
    <button
      className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-[#3e58c0]
      transition-all duration-300 ease-in-out
      active:scale-95 hover:scale-105 hover:opacity-90
      shadow-md hover:shadow-lg"
    >
      More Details
    </button>
  </div>
</Link>

    </div>
  )
}

export default About