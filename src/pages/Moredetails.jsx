import React from 'react';
import logo from '../assets/logo.png';

const MoreDetails = () => {
  return (
    <section className="min-h-screen rounded-2xl mt-3 ml-3 mr-3 px-4 py-10 md:py-16 lg:py-20 bg-blue-200 text-gray-800 flex items-center">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full">
    
    {/* Left: Text Content */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
        More About BJ & Associates
      </h2>
      <p className="font-bold sm:text-lg text-gray-600 leading-relaxed">
        We are a team of dedicated legal and tax consultants, committed to providing top-notch services in GST, Income Tax, Company Law, and Intellectual Property Rights. Our aim is to ensure client satisfaction with professionalism and expertise.
      </p>
      <ul className="list-disc font-bold pl-5 text-gray-700 space-y-2">
        <li>Experienced team with industry knowledge</li>
        <li>Transparent and efficient legal services</li>
        <li>Affordable and customized packages</li>
      </ul>
    </div>

    {/* Right: Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <img
        className="w-auto max-w-[220px] md:max-w-[300px] lg:max-w-[340px] object-contain transition-transform duration-300 hover:scale-105"
        src={logo}
        alt="logo"
      />
    </div>
  </div>
</section>

  );
};

export default MoreDetails;
