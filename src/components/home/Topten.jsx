import React, { useRef } from 'react'
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'
import six from '../../images/six.png'
import seven from '../../images/seven.png'
import eight from '../../images/eight.png'
import nine from '../../images/nine.png'

function Topten() {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full max-w-[1120px] mx-auto mt-5">

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full  block"
      >
        ❯
      </button>
      <div className='ps-6 pb-4'>TOP 10 TRENDING</div>
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex space-x-3 overflow-x-hidden scroll-smooth px-6"
      >

        {/* Card 1 */}
        <div className="relative min-w-[120px]">
          <img src={one} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">1</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={two} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">2</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={three} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">3</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={four} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">4</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={five} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">5</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={six} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">6</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={seven} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">7</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={eight} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">8</span>
        </div>

        <div className="relative min-w-[120px]">
          <img src={nine} className="h-[200px] w-[120px] rounded-[6px]" />
          <span className="absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow-lg">9</span>
        </div>

      </div>
    </div>
  )
}

export default Topten
