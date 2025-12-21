
import AboutHeroSec from '../components/About/AboutHeroSec';
import ClientSec from '../components/About/ClientSec';
import LinksSec from '../components/About/LinksSec';
import AboutNav from '../components/About/NavBarAbout/AboutNav';
import NewsLetter from '../components/About/NewsLetter';
import OutTeam from '../components/About/OutTeam';
import Question from '../components/About/Question';
import VisionSec from '../components/About/VisionSec';
import Footer from '../components/home/Footer';

function MainAbout() {
  return (
    <div>
      <AboutNav/>
      <AboutHeroSec/>
      <VisionSec/>
      <OutTeam/>
      <ClientSec/>
      <NewsLetter/>
      <LinksSec/>
      <Question/>
    <Footer/>
    </div>
  )
}

export default MainAbout
