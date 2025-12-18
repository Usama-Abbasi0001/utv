import React, { useRef } from 'react'
import janny1 from '../../images/janny1.png'
import janny2 from '../../images/janny2.png'
import janny3 from '../../images/janny3.png'
import janny4 from '../../images/janny4.png'
import janny5 from '../../images/janny5.png'
import janny6 from '../../images/janny6.png'
import janny7 from '../../images/janny7.png'

function Channels() {
  const channelRef = useRef(null)

  const scrollLeft = () => {
    channelRef.current.scrollBy({ left: -400, behavior: 'smooth' })
  }

  const scrollRight = () => {
    channelRef.current.scrollBy({ left: 400, behavior: 'smooth' })
  }

  const channels = [
    { img: janny1, name: 'JENNY' },
    { img: janny2, name: 'JACOB' },
    { img: janny3, name: 'SARA' },
    { img: janny4, name: 'FARAZ' },
    { img: janny5, name: 'CASSIE' },
    { img: janny6, name: 'JENNY' },
    { img: janny7, name: 'JACOB' },
  ]

  return (
    <>
      <div className="w-full max-w-[1120px] mx-auto mt-10 p-6">
        <span className="text-[24px] font-bold">CHANNELS</span>
      </div>

      <div className="relative w-full max-w-[1120px] mx-auto p-6 bg-gradient-to-b from-[#953bf562] to-[#0A0612] rounded-lg text-white">
        
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full lg:hidden"
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full lg:hidden"
        >
          ❯
        </button>

        {/* Scroller */}
        <div
          ref={channelRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth py-4 pr-6 lg:overflow-x-hidden"
        >
          {channels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 min-w-[120px]"
            >
              <div className="w-24 h-24 mb-2 overflow-hidden rounded-full">
                <img
                  src={channel.img}
                  alt={channel.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110"
                />
              </div>

              <span className="font-semibold text-center">
                {channel.name}
              </span>

              <button className="mt-2 px-4 py-1 text-[10px] bg-white text-black rounded-full hover:bg-gray-200">
                View Channel
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1120px] mx-auto mt-6 text-center">
        <button className="px-6 py-2 bg-[#953BF5] text-white rounded-full">
          Create your Channel
        </button>
      </div>
    </>
  )
}

export default Channels
