import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hello from './Hello';
import Home from './Home/Home';
export default function RouteRoot() {
  return (
    <Routes>
      <Route path="/" deafault element={<Hello />} />
      <Route path="/home" deafault element={<Home />} />
    </Routes>
  );
}
