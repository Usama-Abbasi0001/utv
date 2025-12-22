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
        min-w-[90%]
        sm:min-w-[90%]
        md:min-w-[48%]
        lg:min-w-[260px]
        flex
        space-x-4
        cursor-pointer
      "
       onClick={handleClick}
    >
   
        {/* Main Image */}
        <img
          src={props.mainImage}
          alt=""
          className="w-[250px] h-[150px]  rounded-[6px]"
        />

        {/* Info */}
        <div className="flex">
         <div className="flex flex-col">
          <span className=" text-[14 px] leading-tight">
            {props.title}
          </span>

           <span className="text-[8px] opacity-60 mt-3">
            {props.views} • {props.time}
          </span>

          <div className='flex space-x-2 items-center mt-3'>
             <img
          src={props.avatar}
          alt=""
          className="w-[30px] h-[30px] rounded-full"
        />
         <span className="text-[12px]">
            {props.author}
          </span>
          </div>        
        </div>   
      </div>
    
    </div>
  )
}

export default MostViewed;
