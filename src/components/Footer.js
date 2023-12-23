import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-auto md:h-[10vh] w-full flex flex-col  md:flex-row items-center justify-around text-white z-10 bottom-[0] bg-[#0F0616] sticky '>
      <div className='w-[80vw] md:w-[15vw] text-sm   flex flex-col items-center justify-center '>
       Follow for more..
       <div className='flex cursor-pointer'> 
       <FaInstagramSquare className='w-5 h-5 m-2 text-white hover:text-purple-700 hover:scale-[1.5]' />
       <FaLinkedinIn className='w-5 h-5 m-2 text-white hover:text-purple-700 hover:scale-[1.5]'/>
       <FaTwitterSquare className='w-5 h-5 m-2 text-white hover:text-purple-700 hover:scale-[1.5]'/>

       </div>
      </div>
      <div className='w-[80vw] flex justify-center items-center md:w-[15vw] text-sm  hover:text-purple-700 hover:scale-[1.5] transform duration-500'>
        @copyright Komal
      </div>
      <div className='w-[80vw] md:w-[15vw] flex items-center justify-center text-sm  hover:text-purple-700 '>
      Contact us ;)
      </div>
       
      
    </div>
  )
}

export default Footer
