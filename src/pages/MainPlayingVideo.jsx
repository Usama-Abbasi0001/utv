import React from 'react'
import MainNavBar from '../components/navbar/TopBar/MainNavBar';
import Banner from '../components/PlayingPage/Banner';
import PlayList from '../components/PlayingPage/PlayList';
import Feature from '../components/PlayingPage/Feature';
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
import MostViewed from '../components/PlayingPage/MostViewed';

function MainPlayingVideo() {
  return (
    <>
      <MainNavBar/>
      <Banner/>
      <div className='  w-[340px]
          md:w-[650px]
          lg:w-[1100px]
          mx-auto
          flex space-x-5
          border-2 border-red-800
          mt-10'>
        <div><PlayList/></div>
            <div className='flex flex-col space-y-5'>
               <Feature mainImage={move1} avatar={move1} title="Batman 2019 (Full Movie)" author="Johan" views="3.9 million views" time="4 hours ago" />
          <Feature mainImage={move2} avatar={move2} title="L’ombre" author="Johan" views="3.9 million views" time="4 hours ago" />
          <Feature mainImage={move3} avatar={move3} title="Lorem Ipsum" author="Johan" views="3.9 million views" time="4 hours ago" />
          <Feature mainImage={move4} avatar={move4} title="Furiosa" author="Johan" views="3.9 million views" time="4 hours ago" />

          <MostViewed mainImage={move5} avatar={move5} title="prank gone wrong" author="usama" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move6} avatar={move6} title="prank gone wrong" author="usama" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move7} avatar={move7} title="lorem lipsum" author="usama" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move8} avatar={move8} title="lorem lipsum" author="usama" views="3.9 million views" time="4 hours ago" />

          <MostViewed mainImage={move9} avatar={move9} title="prank gone wrong" author="shayan" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move10} avatar={move10} title="prank gone wrong" author="Shayan" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move11} avatar={move11} title="lorem lipsum" author="Shayan" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move12} avatar={move12} title="lorem lipsum" author="Shayan" views="3.9 million views" time="4 hours ago" />

           <MostViewed mainImage={move16} avatar={move16} title="prank gone wrong" author="Ahad" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move13} avatar={move13} title="prank gone wrong" author="Ahad" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move14} avatar={move14} title="lorem lipsum" author="Ahad" views="3.9 million views" time="4 hours ago" />
          <MostViewed mainImage={move15} avatar={move15} title="lorem lipsum" author="Ahad" views="3.9 million views" time="4 hours ago" />
            </div>
      </div>
    </>
  )
}

export default MainPlayingVideo;
