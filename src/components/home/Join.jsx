import React from 'react'
import join1 from '../../images/join1.png'
import join2 from '../../images/join2.png'
import join3 from '../../images/join3.png'
import join4 from '../../images/join4.png'
function Join() {
  return (
    <>
      <div className=' w-full max-w-[1120px] mx-auto mt-10'>
        <div className='bg-white h-[300px] items-center text-center flex justify-center'>
            <span className='text-black  text-[50px] font-bold  '>ADVERTISE HERE</span>
        </div>

        <div className="w-full max-w-[1120px] mx-auto mt-16 text-center 
                bg-gradient-to-b from-[#3f3f3f8e] to-[#0A0612] 
                rounded-xl p-6 sm:p-10">

  <span className="block text-[22px] sm:text-[26px] md:text-[30px] 
                   font-bold text-white mb-8">
    MORE REASONS TO JOIN
  </span>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {[join1, join2, join3, join4].map((img, index) => (
      <div
        key={index}
        className="group flex flex-col items-center 
                   bg-white/5 backdrop-blur-sm 
                   rounded-xl p-4 
                   transition-all duration-300 ease-in-out
                   hover:-translate-y-2 
                   hover:shadow-[0_10px_30px_rgba(149,59,245,0.4)]"
      >
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={img}
            alt=""
            className="rounded-[10px] mb-3 w-full 
                       transition-transform duration-300 
                       group-hover:scale-110"
          />
        </div>

        <span className="text-white font-semibold 
                         transition-colors duration-300 
                         group-hover:text-[#953BF5]">
          {['ENTERTAINMENT', 'BE A CREATOR', 'CONNECT & LEARN', 'GROW WITH US'][index]}
        </span>
      </div>
    ))}

  </div>
</div>

      </div>
    </>
  )
}

export default Join;
