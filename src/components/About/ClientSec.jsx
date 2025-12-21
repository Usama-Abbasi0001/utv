import React from "react";

function ClientSec() {
  return (
    <div className="w-full flex justify-center px-4 py-12 bg-[#0b0215]">
      
      {/* Card */}
      <div className="relative w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-12 flex flex-col md:flex-row gap-8 overflow-hidden">

        {/* Decorative circles */}
        <span className="absolute -top-10 -left-10 w-24 h-24 bg-purple-600 rounded-full opacity-80"></span>
        <span className="absolute bottom-10 right-10 w-14 h-14 bg-purple-600 rounded-full opacity-80"></span>

        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            Clients <br /> Testimonials
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            UTV has completely transformed the way we engage with our audience.
            Their innovative content strategies and creative storytelling have
            helped us reach a younger, more dynamic demographic. The team is
            professional, passionate, and always ahead of the curve.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-4">
            <span className="text-yellow-400 text-lg">★★★★★</span>
          </div>

          {/* Client Name */}
          <p className="mt-2 text-white font-semibold">
            Savannah Nguyen
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientSec;
