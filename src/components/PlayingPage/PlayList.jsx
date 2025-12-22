import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import video from '../../images/video.png'
function PlayList() {
  const { state } = useLocation()
  const [showVideo, setShowVideo] = useState(false)

  if (!state) {
    return <p className="text-center mt-10">No data found</p>
  }

  return (
    <div className="max-w-full mx-auto flex flex-col">
      {/* Top Image (Click to show video) */}
      <img
        src={state.mainImage}
        alt=""
        onClick={() => setShowVideo(true)}
        className="
        w-[900px] h-[500px]
        border-2 border-white
          object-cover 
          rounded-lg 
          cursor-pointer
        "
      />

      {/* Info */}
      <div className="flex mt-6 space-x-4">
        <img
          src={state.avatar}
          alt=""
          className="w-[48px] h-[48px] rounded-full"
        />

        <div>
          <h1 className="text-[18px] font-bold">
            {state.title}
          </h1>

          <p className="text-[14px] opacity-70">
            {state.author}
          </p>

          <p className="text-[12px] opacity-60">
            {state.views} • {state.time}
          </p>
        </div>
      </div>
    
      <div>



      </div>
    </div>
  )
}

export default PlayList
