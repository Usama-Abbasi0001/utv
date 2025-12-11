
import { Routes, Route } from 'react-router-dom';
import SignLogin from './Routes/public/SignLogin';
import MainHome from './pages/MainHome';

function App() {
  return (
    <>
 
        <Routes>
          <Route path="/" element={<SignLogin />} />
          <Route path="/home" element={<MainHome />} />
        </Routes>
    
    </>
  );
}

export default App;
