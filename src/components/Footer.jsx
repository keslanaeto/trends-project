import React from 'react'

import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";

import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
         <div className='max-w-[1240px] max-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center py-3 pb-5'>

              <h1>EllaTrenDs</h1>
              <div className='flex justify-between w-full sm:max-w-[280px] my-4:'>
                 <a href="https://t.co/AYSNoeMhX7"><FaInstagramSquare className='icon'/></a>
                <a href=""><FaSquareFacebook className='icon'/></a>
                <a href="https://t.co/PMlelyLoMs"><FaSquareWhatsapp className='icon'/></a>
                <a href="tel:08160983271"><IoCall className='icon'/></a> 
                <a href=""><AiTwotoneMail className='icon' /></a>


              </div>
            </div>
         </div>

         <div>
          <div>
            <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/About">About</Link></li>
            {/* <li> <Link to="/Rtw">Rtw</Link></li> */}
            <li> <Link to="/Bespoke">Bespoke</Link></li>
            {/* <li> <Link to="/Contact">Contact</Link></li> */}

            <li>ENUGU, NIGERIA</li>
            <li><p>ellaogbonna4@gmail.com</p></li>
            <li><a href="tel:">+234 8160983271</a></li>

                
            </ul>

           

          </div>
         </div>
    </div>
   
  )
}

export default Footer