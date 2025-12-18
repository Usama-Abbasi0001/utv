import { useRef } from 'react'
import '../components/home/Home.css'
import MainNavBar from '../components/navbar/TopBar/MainNavBar'
import HeroSec from '../components/home/HeroSec'
import Topten from '../components/home/Topten'
import Feature from '../components/home/Feature'
import MostViewed from '../components/home/MostViewed'

import move1 from '../images/move1.png'
import move2 from '../images/move2.png'
import move3 from '../images/move3.png'
import move4 from '../images/move4.png'
import move5 from '../images/move5.png'
import move6 from '../images/move6.png'
import move7 from '../images/move7.png'
import move8 from '../images/move8.png'
import move9 from '../images/move9.png'
import move10 from '../images/move10.png'
import move11 from '../images/move11.png'
import move12 from '../images/move12.png'
import move13 from '../images/move13.png'
import move14 from '../images/move14.png'
import move15 from '../images/move15.png'
import move16 from '../images/move16.png'
import Channels from '../components/home/Channels'
import Join from '../components/home/Join'
import UtvFAQ from '../components/home/UtvFAQ'
import Footer from '../components/home/Footer'

function MainHome() {
  // Separate refs for each scroller
  const featureRef = useRef(null)
  const mostViewedRef = useRef(null)
  const latestRef = useRef(null)
  const kidsRef = useRef(null)

  // Generic scroll function
  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction * 400, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="background">
        <MainNavBar />
        <HeroSec />
        <Topten />
      </div>

      {/* FEATURE SECTION */}
      <div className="relative w-full max-w-[1120px] mx-auto mt-6">
        <span className="font-bold text-[24px] ps-6">FEATURE</span>

        <button
          onClick={() => scroll(featureRef, -1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❮
        </button>

        <button
          onClick={() => scroll(featureRef, 1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❯
        </button>

        <div
          ref={featureRef}
          className="flex gap-5 px-6 mt-4 overflow-x-scroll lg:overflow-x-hidden scroll-smooth"
        >
          <Feature mainImage={move1} avatar={move1} title="Batman 2019 (Full Movie)" author="Johan" views="3.9 million views" time="4 hours ago" />
          <Feature mainImage={move2} avatar={move2} title="L’ombre" author="Johan" views="3.9 million views" time="4 hours ago" />
          <Feature mainImage={move3} avatar={move3} title="Lorem Ipsum" author="Johan" views="3.9 million views" time="4 hours ago" />
          <Feature mainImage={move4} avatar={move4} title="Furiosa" author="Johan" views="3.9 million views" time="4 hours ago" />
        </div>
      </div>

      {/* MOST VIEWED SECTION */}
      <div className="relative w-full max-w-[1120px] mx-auto mt-10">
        <span className="text-[24px] ps-6">Most Viewed</span>

        <button
          onClick={() => scroll(mostViewedRef, -1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❮
        </button>

        <button
          onClick={() => scroll(mostViewedRef, 1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❯
        </button>

        <div
          ref={mostViewedRef}
          className="flex gap-5 px-6 mt-4 overflow-x-scroll lg:overflow-x-hidden scroll-smooth"
        >
          <MostViewed mainImage={move5} avatar={move5} title="prank gone wrong" author="usama" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move6} avatar={move6} title="prank gone wrong" author="usama" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move7} avatar={move7} title="lorem lipsum" author="usama" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move8} avatar={move8} title="lorem lipsum" author="usama" views="3.9 million views" time="4 hours ago" />
        </div>
      </div>

      {/* LATEST SECTION */}
      <div className="relative w-full max-w-[1120px] mx-auto mt-10">
        <span className="text-[24px] ps-6">LATEST</span>

        <button
          onClick={() => scroll(latestRef, -1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❮
        </button>

        <button
          onClick={() => scroll(latestRef, 1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❯
        </button>

        <div
          ref={latestRef}
          className="flex gap-5 px-6 mt-4 overflow-x-scroll lg:overflow-x-hidden scroll-smooth"
        >
          <MostViewed mainImage={move9} avatar={move9} title="prank gone wrong" author="shayan" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move10} avatar={move10} title="prank gone wrong" author="Shayan" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move11} avatar={move11} title="lorem lipsum" author="Shayan" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move12} avatar={move12} title="lorem lipsum" author="Shayan" views="3.9 million views" time="4 hours ago" />
        </div>
      </div>

      {/* KIDS SECTION */}
      <div className="relative lg:ps-6 w-full max-w-[1120px] mx-auto mt-10">
        <span className="text-[24px] ">Kids</span>

        <button
          onClick={() => scroll(kidsRef, -1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❮
        </button>

        <button
          onClick={() => scroll(kidsRef, 1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white px-3 py-2 rounded-full block lg:hidden"
        >
          ❯
        </button>

        <div
          ref={kidsRef}
          className="flex gap-5 px-6 mt-4 overflow-x-scroll lg:overflow-x-hidden scroll-smooth"
        >
          <MostViewed mainImage={move16} avatar={move16} title="prank gone wrong" author="Ahad" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move13} avatar={move13} title="prank gone wrong" author="Ahad" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move14} avatar={move14} title="lorem lipsum" author="Ahad" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move15} avatar={move15} title="lorem lipsum" author="Ahad" views="3.9 million views" time="4 hours ago" />
        </div>
      </div>
      <Channels/>
      <Join/>
      <UtvFAQ/>
      <Footer/>
    </>
  )
}

export default MainHome
