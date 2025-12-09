import React from 'react'
import Leftbar from '../Leftbar';
import Centerbar from '../Centerbar';
import Rightbar from '../Rightbar';

function MainNarBar() {
  return (
    <>
    <div className='flex justify-between md:px-10 ps-5 py-5 items-center'>
        <Leftbar/>
        <Centerbar/>
        <Rightbar/>
    </div>
    </>
  )
}

export default MainNarBar;