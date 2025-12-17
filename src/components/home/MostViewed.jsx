import React from 'react'

function MostViewed(props) {
  return (
    <div
      className="
        min-w-[90%]        /* mobile: 1 card */
        sm:min-w-[90%]
        md:min-w-[48%]     /* tablet: 2 cards */
        lg:min-w-[260px]   /* desktop: 4 cards */
      "
    >
      <div className="mt-0">
        {/* Main Image */}
        <img
          src={props.mainImage}
          alt=""
          className="w-full h-[170px] rounded-[6px]"
        />

        {/* Info */}
        <div className="flex mt-4 space-x-2">
          <img
            src={props.avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />

          <div className="flex flex-col">
            <span className="font-bold leading-tight">
              {props.title}
            </span>

            <span className="text-[12px]">
              {props.author}
            </span>

            <span className="text-[10px] opacity-60">
              {props.views} – {props.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MostViewed
