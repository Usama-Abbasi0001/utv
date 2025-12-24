import React from 'react'
import { Link } from 'react-router-dom';

function AboutLeft() {
  return (
    <>
         <div className='lg:flex hidden opacity-60'>
      <ul  className="text-white flex space-x-10 lg:ps-10 ps-0 ">
      <Link to="/home" className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>Home</Link>
      <Link to="/about" className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>About Us</Link>
      <li className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>Tech</li>
       <li className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>Contect</li>
      </ul>
    </div> 
    </>
  )
}

export default AboutLeft;
