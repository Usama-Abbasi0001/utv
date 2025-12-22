import React from 'react'
import { useNavigate } from 'react-router-dom'

function MostViewed(props) {
    const navigate = useNavigate()

  const handleClick = () => {
    navigate("/videoplaying", {
      state: {
        mainImage: props.mainImage,
        avatar: props.avatar,
        title: props.title,
        author: props.author,
        views: props.views,
        time: props.time,
      }
    })
  }
  return (
    <div
      className="
        min-w-[90%]        /* mobile: 1 card */
        sm:min-w-[90%]
        md:min-w-[48%]     /* tablet: 2 cards */
        lg:min-w-[260px]   /* desktop: 4 cards */
      "
       onClick={handleClick}
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
