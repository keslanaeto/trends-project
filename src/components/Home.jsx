import React from 'react'
import back from '../assets/back.mp4'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";




const Home = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={back} autoPlay loop muted/>

        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/25'>

        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>Welcome to EllaTrenDs_</h1>
            <h2>Home of comfort Class & beauty</h2>
            <h3>We are up for consultation trendy women ❤🧡</h3>

            <div className='flex justify-evenly pt-10 text-4xl'>
                <a href="https://t.co/AYSNoeMhX7"><FaInstagramSquare/></a>
                <a href=""><FaSquareFacebook/></a>
                <a href="https://t.co/PMlelyLoMs"><FaSquareWhatsapp/></a>
                <a href="tel:08160983271"><IoCall/></a> 
                <a href=""><MdAttachEmail/></a>
            </div>
        </div>

        </div>

    </div> 

  )
}

export default Home