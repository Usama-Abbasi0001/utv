import React from "react";
import { ArrowUpRight } from "lucide-react";

function NewsLetter() {
  return (
    <div className="w-full flex justify-center px-4 py-16 bg-[#0b0215]">
      
      {/* Card */}
      <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] px-6 py-14 md:px-16 md:py-20 text-center shadow-lg">
        
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Sign up to our newsletter
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 text-sm md:text-base mt-3 max-w-xl mx-auto">
          Receive latest news, updates, and many other things every week.
        </p>

        {/* Input */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full px-6 py-4 pr-14 text-sm outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NewsLetter;
