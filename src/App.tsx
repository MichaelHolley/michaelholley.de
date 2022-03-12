import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Skills' element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
