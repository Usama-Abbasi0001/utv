import React from 'react'
import tv from '../../images/tvs.png'
function HeroSec() {
  return (
    <>
    <div className='container mx-auto md:mt-10 mt-0 flex md:flex-row flex-col lg:px-16 md:px-16 md:justify-between  px-10'>
        <div className='flex flex-col md:text-start text-center jmd:ustify-start justify-center md:items-start items-center'>
<p className='bg-[#401e6457] p-1 w-[150px] rounded-[10%]'>
  <span className="font-bold  text-white px-2 rounded">
    Usamacom
  </span> 
  Presents
</p>

            <img src={tv} alt="" className='w-[200px] mt-5 h-[200px]'/>
            <p className='lg:text-[90px] md:text-[50px] text-[30px] -mt-5  font-bold'>Usamacom TV</p>
            <p className='font-bold lg:-mt-5 md:-mt-3 lg:text-[24px] text-[14px]'>The Home of Online Entertainment!</p>
            <p className='opacity-70 md:flex hidden'>Premier on Our TV June 27st 2020 at 7pm, <br/>  Same time as the UK</p>
             <p className='opacity-70 md:hidden flex'>Premier on Our TV June 27st 2020 at 7pm, Same time as the UK</p>
            <button className='bg-purple-600 mt-5 px-3 py-2 rounded-[20px]'>Create your Channel </button>
        </div>
        <div className='flex md:flex-col lg:space-y-10 md:space-y-14 md:space-x-0 space-x-8 md:text-start md:mt-0 mt-10'>
            <div >
            <p className='md:text-[50px] text-[18px] font-bold'>250 <span className='text-purple-500'>+</span></p>
            <p className='md:-mt-4'>videos</p>
            </div>

            <div>
            <p className='md:text-[50px] text-[18px] font-bold'>160<span className='text-purple-500'>+</span></p>
            <p className='md:-mt-4'>Channels</p>
            </div>

            <div>
            <p className='md:text-[50px] text-[18px] font-bold'>99<span className='text-purple-500'>%</span></p>
            <p className='md:-mt-4'>Happe Viewers</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default HeroSec;