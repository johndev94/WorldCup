import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import GetRoutes from "./pages/Routes";
import Teams from "./pages/Teams";
import Venues from "./pages/Venues";
import NotFoundPage from "./pages/NotFound";
import Nav from "./pages/Nav";
import Testing from "./pages/Testing";
import PoolDetails from "./pages/PoolDetails";
import Results from "./pages/Results";
import ResultsByTeam from "./pages/ResultsByTeam";
import ResultsByDate from "./pages/ResultsByDate";
import PlayerStats from "./pages/PlayerStats";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<GetRoutes />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/pool/:poolId" element={<PoolDetails />} />
          <Route path="/results" element={<Results />} />
          <Route path="/resultsByDate" element={<ResultsByDate />} />playerStats
          <Route path="/playerStats" element={<PlayerStats />} />
          <Route
            path="/resultsByTeam/:teamId/:teamName"
            element={<ResultsByTeam />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
