import React from 'react'
import services from '../assets/services.png'
import {IoArrowForward} from "react-icons/io5"

const Services = () => {
  return (
    <div className='text-black mt-3 md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-blue-200 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>Services We Provide </h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className=' md:h-80' src={services} alt="Services" />

          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />

              <span className='w-96'>
                <h1 className='text-xl  md:text-2xl font-semibold leading-normal'>Tax & Legal Consultant</h1>
                <ul className='text-sm m-3  md:text-md leading-tight'>
                  <li className='text-2xl'>GST Registration</li>
                  <li className='text-2xl'>GST Return</li>
                  <li className='text-2xl'>ITR Filling</li>
                  <li className='text-2xl'>Company Registration </li>
                  <li className='text-2xl'>LLP Registration </li>
                  <li className='text-2xl'>Partnership & Firm Registration</li>
                  <li className='text-2xl'>Trust Registration</li>
                  <li className='text-2xl'> Society Registration</li>
                  <li className='text-2xl'>ESI & PF Registration</li>
                  <li className='text-2xl'>Import and Export Code </li>
                  <li className='text-2xl'> Tardemark Registration </li>
                  <li className='text-2xl'> Gem Registration </li>
                  <li className='text-2xl'>Copy Right Registration</li>
                  <li className='text-2xl'> Design Registration </li>
                  <li className='text-2xl'>Patient Registration </li>
                  <li className='text-2xl'> MSME Registration </li>
                  <li className='text-2xl'> FASSAI Registration</li>
                  <li className='text-2xl'> DSC (Digital Signature) </li>
                  <li className='text-2xl'> ISO Certification </li>
                  <li className='text-2xl'> PAN Card </li>
                  <li className='text-2xl'> Civil Matter </li>
                  <li className='text-2xl'> Revenue & Consumer Matter </li>
                </ul>
              </span>
            </div>
            <h1 className='text-3xl m-3 p-3 text-black font-bold bg-teal-900  rounded'>All Types Of Accounts Work On Contact Basis </h1>
            
          </ul>
        </div>
      </div>
    </div>


  )
}

export default Services