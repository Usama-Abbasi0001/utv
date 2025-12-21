import React from "react";

function LinksSec() {
  return (
    <footer className="lg:w-[1120px] mx-auto bg-[#0b0215] text-gray-400 lg:px-0 px-10 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Travelwise
          </h3>
          <p className="text-sm leading-relaxed">
            Enjoy the touring <br /> with Salty
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <span className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-blue-500 hover:text-blue-500 transition">
              f
            </span>
            <span className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-pink-500 hover:text-pink-500 transition">
              ◎
            </span>
            <span className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-sky-400 hover:text-sky-400 transition">
              🐦
            </span>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Download</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Guide Book</li>
            <li className="hover:text-white cursor-pointer">App Directory</li>
          </ul>
        </div>

        {/* Travellers */}
        <div>
          <h4 className="text-white font-medium mb-4">Travellers</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Why Travellers</li>
            <li className="hover:text-white cursor-pointer">Enterprise</li>
            <li className="hover:text-white cursor-pointer">Customer Stories</li>
            <li className="hover:text-white cursor-pointer">Instagram Post</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Travelling</li>
            <li className="hover:text-white cursor-pointer">About Locato</li>
            <li className="hover:text-white cursor-pointer">Success</li>
            <li className="hover:text-white cursor-pointer">Information</li>
          </ul>
        </div>

        {/* Get App */}
        <div>
          <h4 className="text-white font-medium mb-4">Get App</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">App Store</li>
            <li className="hover:text-white cursor-pointer">Google Play Store</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default LinksSec;
