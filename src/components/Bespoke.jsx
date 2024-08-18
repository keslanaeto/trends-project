import React from 'react'



// import back from '../assets/back.mp4'
import black from '../assets/black.jpg'
import blackdress from '../assets/blackdress.jpg'
import bluedress from '../assets/bluedress.jpg'
import brown from '../assets/brown.jpg'
import dress6 from '../assets/dress6.png'
import dress7 from '../assets/dress7.png'
import fa from '../assets/fa.png'
import red from '../assets/red.jpg'
import whitedress from '../assets/whitedress.jpg'
import blackpres from '../assets/blackpres.jpg'
import jed from '../assets/jed.jpg'
import cor from '../assets/cor.jpg'
import bu from '../assets/bu.jpg'
import prespurple from '../assets/prespurple.png'




const Bespoke = () => {
  return (
      


<>


    <div className="w-full h-30">

    <div className='bg-slate-500 h-20'>

    </div>
{/*  
   <video className='w-full h-25' src={back} autoPlay loop muted/>
   <div className=' w-full h-28 bg-gray-900/25'>
   </div>  */}

   <div>

   <h2 className='py-16 text-center font-mono md:text-center text-3xl'>Trendywomen </h2> 

   </div>

   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>

       <img className='w-60 h-full object-cover ' src={dress6} alt="" />
       <img className='w-60 h-full object-cover ' src={blackpres} alt="" />
   </div>

   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>
       <img className='w-60 h-full ' src={cor} alt="" />
       <img className='w-60 h-full  ' src={red} alt="" />
   </div>


   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>
       <img className='w-60 h-full ' src={fa} alt="" />
       <img className='w-60 h-full' src={whitedress} alt="" />
   </div>


   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>
       <img className='w-60 h-full ' src={blackdress} alt="" />
       <img className='w-60 h-full  ' src={brown} alt="" />
   </div>



   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>
       
       <img className='w-60 h-full  ' src={dress7} alt="" />
   </div>

   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>
       <img className='w-60 h-full' src={bu} alt="" />
       <img className='w-60 h-full  ' src={jed} alt="" />
   </div>

   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>
       <img className='w-60 h-full' src={black} alt="" />
       <img className='w-60 h-full  ' src={bluedress} alt="" />
   </div>

   <div className='flex justify-evenly gap-20 md:flex flex-wrap md:gap-40 py-10'>
    <img className='w-60 h-full' src={prespurple} alt="" />
   </div>
  


   
    </div>
    

    </>
  )
}

export default Bespoke