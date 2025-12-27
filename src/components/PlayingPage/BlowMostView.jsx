import React from 'react'
import { useNavigate } from 'react-router-dom'

function BlowMostView(props) {
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
        min-w-[90%]
        sm:min-w-[90%]
        md:min-w-[48%]
        lg:min-w-[260px]
       flex flex-col
        space-x-4
        cursor-pointer
      "
       onClick={handleClick}
    >
   
        {/* Main Image */}
        <img
          src={props.mainImage}
          alt=""
          className="md:w-[170px] md:h-[100px] w-[340px] h-[150px]  rounded-[6px] md:px-0 px-2"
        />

        {/* Info */}
       <div className="flex mt-4 space-x-2">
        <img
          src={props.avatar}
          alt=""
          className="w-[20px] h-[20px] rounded-full"
        />

        <div className="flex flex-col">
          <span className="font-bold leading-tight text-[14px]">
            {props.title}
          </span>

          <span className="text-[12px]">
            {props.author}
          </span>

          <span className="text-[10px] opacity-60">
            {props.views} • {props.time}
          </span>
        </div>
      </div>
    
    </div>
  )
}

export default BlowMostView;
