import React from 'react'
import "./App.css";
import Nav from './Routes/public/Nav';
import SignLogin from './Routes/public/SignLogin';
function App() {
  return (
    <>
    <div className='background'>
    <Nav/>
    <SignLogin/>
    </div>
    </>
  )
}

export default App;