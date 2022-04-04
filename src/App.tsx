import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Skills' element={<Skills />} />
    </Routes>
  );
}

export default App;
