import React from 'react'
import Leftbar from '../Leftbar';
import Centerbar from '../Centerbar';
import Rightbar from '../Rightbar';

function MainNavBar() {
  return (
    <>
    <div className=' flex justify-between md:px-14 py-5 items-center lg:w-[1250px] mx-auto'>
        <Leftbar/>
        <Centerbar/>
        <Rightbar/>
    </div>
    </>
  )
}

export default MainNavBar;