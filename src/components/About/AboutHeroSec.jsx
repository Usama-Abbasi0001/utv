import React from 'react';
import '../About/About.css';

function AboutHeroSec() {
  return (
    <div className="lg:w-[1120px]  mx-auto mt-6 sm:mt-10 px-4">
      <div className="background flex flex-col p-5 sm:p-8 lg:p-10 justify-center items-center text-center rounded-xl">
        
        <span className="font-bold text-2xl sm:text-4xl lg:text-[50px]">
          About Us
        </span>

        <span className="text-base sm:text-2xl lg:text-[30px] mt-4 sm:mt-8 leading-snug">
          Welcome to UTV – The Future of Entertainment &{" "}
          <br className="hidden sm:block" />
          Innovation!
        </span>

        <span className="opacity-60 max-w-full sm:max-w-[700px] lg:max-w-[900px] text-sm sm:text-base lg:text-lg mt-4 sm:mt-8">
          UTV is more than just a media platform; it’s a movement. Designed for the
          young generation, we bring a fusion of cutting-edge content, dynamic
          storytelling, and engaging experiences tailored for today’s digital world.
        </span>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8 sm:mt-10">
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl sm:text-5xl lg:text-[60px] font-bold">
              10
            </span>
            <div className="flex flex-col opacity-80 sm:border-e-2 sm:pe-5 border-white text-left">
              <span>Years of</span>
              <span className="-mt-1">experience</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl sm:text-5xl lg:text-[60px] font-bold">
              1K+
            </span>
            <div className="flex flex-col opacity-80 sm:border-e-2 sm:pe-5 border-white text-left">
              <span>Beautiful</span>
              <span className="-mt-1">destinations</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl sm:text-5xl lg:text-[60px] font-bold">
              4K+
            </span>
            <div className="flex flex-col opacity-80 text-left">
              <span>Happy</span>
              <span className="-mt-1">customers</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutHeroSec;
