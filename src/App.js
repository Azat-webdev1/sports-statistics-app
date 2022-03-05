import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import LeagueCalendarPage from './pages/leagueCalendar';
import LeaguesPage from './pages/leagues';
import TeamsPage from './pages/teams';
import TeamsCalendarPage from './pages/teamsCalendar';

function App() {
  return (
    <div className="app-contaner">
      <Routes>
        <Route path="/" element={<LeaguesPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/competitions/1" element={<LeagueCalendarPage />} />
        <Route path="/teams/1" element={<TeamsCalendarPage />} />
      </Routes>
    </div>
  );
}

export default App;
