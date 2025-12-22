import React from 'react'

function Banner() {
  return (
    <>
      <div
        className="
        bg-white
          w-[340px]
          md:w-[650px]
          lg:w-[1280px]
          mx-auto
          flex md:md-0 mt-5
          items-center
          justify-center
          text-center
          py-6 sm:py-8 md:py-10
          px-4
        "
      >
        <span
          className="
            text-black
            font-bold
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-[50px]
          "
        >
          ADVERTISE HERE
        </span>
      </div>
    </>
  )
}

export default Banner
