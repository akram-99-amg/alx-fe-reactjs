import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Autenticated from './components/Autenticated';
import UserProfile from './components/UserProfile';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Autenticated/>} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} /> 
      </Routes>
    </Router>
  );
}

export default App;