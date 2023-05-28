import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hello from './Hello';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import WebDev from './Work/WebDev/WebDev';
import AnimationVideos from './Work/animationVideos/AnimationVideos';
import Contact from './Contact/Contact';
import CommingSoon from './CommingSoon';
export default function RouteRoot() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work/websites" element={<WebDev />} />
      <Route path="/work/animations" element={<AnimationVideos />} />
      <Route path="/contact"  element={<Contact />} />
      <Route path="/comming-soon"  element={<CommingSoon />} />
    

    </Routes>
  );
}
