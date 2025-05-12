import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-blue-400 shadow-md border-b border-blue-400 px-6 md:px-20 py-4 sticky top-0 z-50'>
      <div className='flex justify-between items-center'>
        {/* Brand */}
        <span className='text-2xl md:text-3xl font-bold text-black tracking-wide'>
          BJ & Associates
        </span>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-lg font-medium text-gray-700'>
          <li className='hover:text-blue-600 transition-all text-2xl'>
            <a href='#MoreDetails'>More Details</a>
          </li>
          {/* Add more links as needed */}
        </ul>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          {menuOpen ? (
            <RiCloseLine size={30} onClick={() => setMenuOpen(false)} className='cursor-pointer text-blue-900' />
          ) : (
            <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} className='cursor-pointer text-blue-900' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='md:hidden mt-4 flex flex-col space-y-4 text-lg font-medium text-gray-700 bg-blue-100 bg-opacity-30 rounded-lg p-4 border border-blue-200'>
          <li className='hover:text-blue-600 transition-all'>
            <a href='#MoreDetails' onClick={() => setMenuOpen(false)}>More Details</a>
          </li>
          {/* Add more links if needed */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
