import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Autenticated from './components/Autenticated';
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Autenticated  />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/profile/:details" element={<ProfileDetails />} />
        <Route path="/profile/:settings" element={<ProfileSettings />} />
      </Routes>
    </Router>
  );
}

export default App;