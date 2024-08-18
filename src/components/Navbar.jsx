import React, {useState} from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";

import { IoCall } from "react-icons/io5";
import {Link} from 'react-router-dom'




const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }
  return (
     <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>EllaTrenDs_</h1>
        </div>

        <ul className=' hidden md:flex'>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/About">About</Link></li>
            {/* <li> <Link to="/Rtw">Rtw</Link></li> */}
            <li> <Link to="/Bespoke">Bespoke</Link></li>
            {/* <li> <Link to="/Contact">Contact</Link></li> */}
        </ul>

        <div className='hidden md:flex'>
        <FaBagShopping size={20} />

        </div>

        {/* mobile icon */}

        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <IoClose className='text-black' size={20}/> : <GiHamburgerMenu size={20}/>}
        

        </div>

{/* Mobile menu */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1>EllaTrenDs_</h1>
            <li className='border-b'><Link to='/'>Home</Link></li>
            <li className='border-b'><Link to='/About'>About</Link></li>
            {/* <li className='border-b'>RTW</li> */}
            <li className='border-b'><Link to='/Bespoke'>Bespoke</Link></li>
            {/* <li className='border-b'>contact</li> */}

            <div className='flex justify-between my-6 '>
                <a href="https://t.co/AYSNoeMhX7"><FaInstagramSquare className='icon'/></a>
                <a href=""><FaSquareFacebook className='icon'/></a>
                <a href="https://t.co/PMlelyLoMs"><FaSquareWhatsapp className='icon'/></a>
                <a href="tel:08160983271"><IoCall className='icon'/></a> 
                <a href=""><AiTwotoneMail className='' /></a>
            </div>
          </ul>
          
        </div>

     </div>
  )
}

export default Navbar