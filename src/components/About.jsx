import React from 'react'
import Navbar from './Navbar'
import ada from '../assets/ada.jpg'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Footer from './Footer';

const About = () => {
  return (
<>

    <Navbar/>
    

 <div className="w-full h-full">

 <div className='bg-slate-500 h-20'>

</div>


<div>

  <div className='w-60 h-full py-11 pl-10 '>
    <img src={ada} alt="" />
  </div>

  

  <div className='py-14 w-full h-full flex-wrap px-6'>

    <p className='text-1xl'>

      <h2 className='text-center pb-7'>EllaTrenDs_</h2>


    Welcome to Ellatrends_ 🤍, A comtemporary brand born from lots of daydreams, the perfect place for premium fashion. 
     deal in all kinds of dresses such as ready to wear, premium Owambe dress (lace),
     Ankara etc. we draw our inspiration from global street fashion, our imagination of fashion. 
    Our goal is to create fashionable yet comfortable piece that will fit your body shape.
    <br /> <br />

          At Ellatrends_ we pay attention to every single details and we work to bring your 
          dream fashion to reality. we ensure that our outcome is unique and durable. 
          We pride ourselves on our committment to excellence, and bringing your dream to reality
<br /><br />

          <h3 className='text-center'>Fashion and Comfort</h3>
          Our desgins gives your a reflection of yourself, we bring your dream fashion to reality, 
          mixing class, high quality material and unqiue desgins which gives birth to perfection.
           we birth designs that thrieve to break boundaries of comtemporary fashion. 
           We believe that fashion is not just about looking good, but feeling comfy, comfortable and beautiful in your own body. 
           'FASHION IS A STATEMENT' and that is why we prioritize comfortability in all our designs.
<br /><br />

         <h3 className='text-center'>Customer Satisfaction</h3> 
          We listen while you tell us about your design you want to create, our attention to details set us apart and unique. 
          From quality material selection to a well drafted precised designs. we strive for perfection and satisfaction. <br />
<br />
          When fitting we let you point out every single mistakes that should be corrected and we put our best to make you happy. 
          Shop with confidence and knowing we are commited to giving you only the best design that will fit your body type.
          We recommend coming yourself for measuring or knowing your body size so to avoid any disappointment and also proper body fittings.
 <br /><br />

          <h3 className='text-center'>Our Fashion Fam</h3>
          Follow us on social media handles so not to miss out on our lastest content drops. 
          Join our fashion community lets vibe and give life to our fashion dreams. its all vibes, lifestyle and fashion.❤❤


    </p>

    <div className='flex justify-evenly pt-8 text-gray-500'>
               <a href="https://t.co/AYSNoeMhX7"><FaInstagramSquare size={50}/></a>
                <a href=""><FaSquareFacebook size={50}/></a>
                <a href="https://t.co/PMlelyLoMs"><FaSquareWhatsapp size={50}/></a>
               
    </div>
 
  </div>
   

    </div>


    </div>

    <Footer />

    
    </>

    
  )
}



export default About