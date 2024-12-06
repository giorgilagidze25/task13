import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projekts from './pages/Projekts';
import Hobby from './pages/Hobby';
import HobbyDetail from './pages/HobbyDetail';
import NotFound from './pages/NotFound'; // შეცდომის გვერდი

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projekts" element={<Projekts />} />
      <Route path="/hobby" element={<Hobby />} />
      <Route path="/hobby/:id" element={<HobbyDetail />} />
      {/* "catch-all" შეცდომის გვერდი */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
