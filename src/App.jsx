
import { Routes, Route } from 'react-router-dom';
import SignLogin from './Routes/public/SignLogin';
import MainHome from './pages/MainHome';
import MainAbout from './pages/MainAbout';

function App() {
  return (
    <>
 
        <Routes>
          <Route path="/" element={<SignLogin />} />
          <Route path="/home" element={<MainHome />} />
          <Route path="/about" element={<MainAbout/>} />
        </Routes>
    
    </>
  );
}

export default App;
