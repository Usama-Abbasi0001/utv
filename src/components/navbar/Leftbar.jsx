import React from 'react'

function Leftbar() {
  return (
    <div className='lg:flex hidden'>
      <ul  className="text-white flex space-x-10 ">
      <li className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>Home</li>
      <li className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>About Us</li>
      <li className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>Tech</li>
       <li className='relative cursor-pointer font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500'>Contect</li>
      </ul>
    </div>
  )
}

export default Leftbar;