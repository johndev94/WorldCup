import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Players from './pages/Players';
import GetRoutes from './pages/Routes';
import Teams from './pages/Teams';
import Venues from './pages/Venues';
import NotFoundPage from './pages/NotFound';
import Nav from './pages/Nav';
import Testing from './pages/Testing';




const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Testing />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;