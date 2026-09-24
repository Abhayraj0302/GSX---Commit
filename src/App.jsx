import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Event from './components/Event';
import WhatWeDo from './components/WhatWeDo';
import Workshop from './components/Workshop';
import Schedule from './components/Schedule';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [introPhase, setIntroPhase] = useState(0);


  useEffect(() => {
    // Small initial delay so the page settles
    const t1 = setTimeout(() => setIntroPhase(1), 100);
    // After the title has animated in, bring in the rest
    const t2 = setTimeout(() => setIntroPhase(2), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className={`app-layout intro-phase-${introPhase}`}>
      <Navbar />
      <main>
        <Hero introPhase={introPhase} />
        <About />
        <WhatWeDo />
        <Event />
        {/* Sections below are kept as placeholders — not shown in current screenshots */}
        <Workshop />
        <Schedule />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
