import React, { useState } from 'react'
import {RiCloseLine, RiMenu2Line} from "@remixicon/react"

const Navbar = () => {
    const[ menu , openMenu] = useState(false)
    const [showMenu , setShowMenu] = useState(true)
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-black px-10 pt-6 md:px-20'>
        <span className='text-xl font-bold tracking-wide'>BJ & Associates</span>

        <ul className={`${menu ? "block" : "hidden"} mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-blue-200 px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>

           

            <a href='#MoreDetails'><li className='rounded font-bold text-2xl transition-all duration-300  md:p-0'> More Details </li></a>

        </ul>

        {showMenu ?
        (<RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick ={()=>{openMenu(!menu) ; setShowMenu(!showMenu);}}
        />
        ):(<RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" />

        )}
    </nav>
  )
}

export default Navbar