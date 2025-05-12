import React from 'react';
import services from '../assets/services.png';
import { IoArrowForward } from 'react-icons/io5';

const Services = () => {
  return (
    <div className='text-black mt-3 bg-blue-200 bg-opacity-30 shadow-xl rounded-lg p-6 md:p-12 mx-2 md:mx-20'>
      <h2 className='text-2xl md:text-4xl font-bold mb-6 text-center md:text-left'>Services We Provide</h2>

      <div className='flex flex-col md:flex-row items-center gap-6'>
        {/* Image Section */}
        <div className='flex-shrink-0'>
          <img className='w-full max-w-md md:h-80 object-contain' src={services} alt="Services" />
        </div>

        {/* Text Section */}
        <div className='flex-1'>
          <div className='flex gap-3 items-start'>
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold mb-4'>Tax & Legal Consultant</h1>

              <ul className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {[
                  "GST Registration",
                  "GST Return",
                  "ITR Filling",
                  "Company Registration",
                  "LLP Registration",
                  "Partnership & Firm Registration",
                  "Trust Registration",
                  "Society Registration",
                  "ESI & PF Registration",
                  "Import and Export Code",
                  "Trademark Registration",
                  "Gem Registration",
                  "Copyright Registration",
                  "Design Registration",
                  "Patient Registration",
                  "MSME Registration",
                  "FASSAI Registration",
                  "DSC (Digital Signature)",
                  "ISO Certification",
                  "PAN Card",
                  "Civil Matter",
                  "Revenue & Consumer Matter",
                ].map((item, index) => (
                  <li key={index} className='text-lg bg-blue-400 rounded-2xl p-3'>
                    {item}
                  </li>
                ))}
              </ul>

              <h1 className='text-xl md:text-2xl font-bold bg-teal-900 text-white mt-6 p-3 rounded'>
                All Types Of Accounts Work On Contact Basis
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
