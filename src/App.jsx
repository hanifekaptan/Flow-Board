import { Routes, Route } from 'react-router-dom';;

import LandingPage from './pages/landing-page/LandingPage';
import BoardPage from './pages/board-page/BoardPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/board" element={<BoardPage />} />
    </Routes>
  );
}

export default App;