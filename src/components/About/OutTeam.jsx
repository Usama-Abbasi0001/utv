import React from 'react'
import team1 from '../../images/team1.png'
import team2 from '../../images/team2.png'
import team3 from '../../images/team3.png'
import team4 from '../../images/team4.png'


function OutTeam() {
  return (
    <>
      <div className='w-full max-w-[1120px] mx-auto mt-10'>
        <div className="w-full max-w-[1120px] mx-auto mt-16 text-center rounded-xl p-6 sm:p-10">
          <span className="block text-center text-[22px] sm:text-[26px] md:text-[30px] font-bold text-white mb-8">
            OUT TEAM
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[team1, team2, team3, team4].map((img, index) => (
              <div
                key={index}
                className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(149,59,245,0.4)]"
              >
                <div className="overflow-hidden rounded-[10px] w-full">
                  <img
                    src={img}
                    alt={`Team member ${index + 1}`}
                    // Fixed dimensions for all images
                    width={220}
                    height={250}
                    className="rounded-[10px] mb-3 w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-white opacity-45 font-semibold transition-colors duration-300  group-hover:text-[#953BF5]">
                  {['CEO', 'Leader', 'Co-leader', 'Editor'][index]}
                </span>
                <span className="text-white font-semibold transition-colors duration-300 group-hover:text-[#953BF5]">
                  {['barbara jones', 'Muzamil', 'Ahmed Raza', 'Faraz Jamali'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OutTeam