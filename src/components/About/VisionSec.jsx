import React from 'react'
import '../About/About.css';
import map from '../../images/map.png'
function VisionSec() {
  return (
    <div className='vision lg:w-[1300px] md:w-full text-center lg:text-start space-y-16 mt-24 px-10  lg:justify-between justify-center lg:items-start items-center  mx-auto flex lg:flex-row flex-col py-16'>
    <div className='flex flex-col w-[500px] '>
        <span className='text-[50px] font-bold'>Our Vision</span>
        <span className='opacity-60 mt-6'>To revolutionize digital entertainment by providing fresh, innovative, and engaging content that connects with the aspirations of young minds.</span>
    </div>
      <div>
        <img src={map} alt="" className='w-[650px]'/>
      </div>
    </div>
  )
}

export default VisionSec
