
import { Routes, Route } from 'react-router-dom';
import SignLogin from './Routes/public/SignLogin';
import MainHome from './pages/MainHome';
import MainAbout from './pages/MainAbout';
import MainPlayingVideo from './pages/MainPlayingVideo';

function App() {
  return (
    <>
 
        <Routes>
          <Route path="/" element={<SignLogin />} />
          <Route path="/home" element={<MainHome />} />
          <Route path="/about" element={<MainAbout/>} />
          <Route path="/videoplaying" element={<MainPlayingVideo/>} />
        </Routes>
    
    </>
  );
}

export default App;
