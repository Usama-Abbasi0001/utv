import '../components/home/Home.css'
import MainNavBar from '../components/navbar/TopBar/MainNavBar';
import HeroSec from '../components/home/HeroSec';

function MainHome() {
  return (
    <>
    <div className='background'>
        <MainNavBar/>
        <HeroSec/>
    </div>
    </>
  )
}

export default MainHome;