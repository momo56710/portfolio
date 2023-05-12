import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hello from './Hello';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import WebDev from './Work/WebDev/WebDev';
import AnimationVideos from './Work/animationVideos/AnimationVideos';
export default function RouteRoot() {
  return (
    <Routes>
      <Route path="/" deafault element={<Hello />} />
      <Route path="/home" deafault element={<Home />} />
      <Route path="/skills" deafault element={<Skills />} />
      <Route path="/work/websites" deafault element={<WebDev />} />
      <Route path="/work/animations" deafault element={<AnimationVideos />} />

    </Routes>
  );
}
