// FILE: src/components/Home.jsx

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.css';
import logo from '../assets/react.svg';

export function Home() {
  useEffect(() => {
    gsap.to('.home-logo', { duration: 1, y: 0, opacity: 1 });
    gsap.to('.home-header', { duration: 1, y: 0, opacity: 1, delay: 0.5 });
    gsap.to('.home-content', { duration: 1, y: 0, opacity: 1, delay: 1 });
  }, []);

  return (
    <div className="home">
      <img src={logo} className="home-logo" alt="Logo" />
      <h1 className="home-header">Welcome to Cooper Adams LLC</h1>
      <p className="home-content">We specialize in concrete and tractor jobs.</p>
    </div>
  );
}