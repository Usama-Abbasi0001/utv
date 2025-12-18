import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0A0612] to-black text-white px-4 sm:px-6 py-12">
      <div className="max-w-[1200px] mx-auto">

        {/* Top Divider */}
        <div className="border-t border-white/20 mb-8">
          <div className="pt-4 flex items-center gap-2 text-gray-400 text-sm cursor-pointer">
            Disclaimer <span className="text-lg">+</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Left Section */}
          <div className="space-y-6">
            {/* Navigation */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <span className="font-semibold">Home</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">About</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Benefit</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Contact Us</span>
              <span className="text-gray-400 hover:text-white cursor-pointer">Token</span>
            </div>

            {/* Phone */}
            <div>
              <p className="uppercase text-xs text-gray-400 mb-1">Sign Up</p>
              <p className="text-white text-sm">+000 0000 0000</p>
            </div>

            {/* Email */}
            <div>
              <p className="uppercase text-xs text-gray-400 mb-1">Email</p>
              <p className="text-white text-sm">usamakhan58461email@mail.com</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex justify-center md:justify-center">
            <div>
              <p className="uppercase text-xs text-gray-400 mb-1">Opening Hours</p>
              <p className="text-white text-sm">24/7</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="text-sm text-gray-300 max-w-[260px] md:text-right">
              Transforming Ideas into Intelligent Solutions
            </p>

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} — 12/18/25
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
