import React from 'react'

function Question() {
  return (
    <div>
       {/* Questions Section */}
        <div className="border-t border-white/20 pt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Do you have any questions?
          </h3>
          <p className="text-gray-400 mb-6 max-w-[600px]">
            Feel free to send us your questions or request a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 rounded-md bg-transparent 
                         border border-white/30 text-white 
                         focus:outline-none focus:border-[#953BF5]"
            />

            <button
              className="px-6 py-3 rounded-md bg-[#953BF5] 
                         hover:bg-[#7d2fe0] transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
    </div>
  )
}

export default Question
