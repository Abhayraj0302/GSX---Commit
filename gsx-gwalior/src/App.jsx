import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Event from './components/Event';
import Workshop from './components/Workshop';
import Schedule from './components/Schedule';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Event />
        <Workshop />
        <Schedule />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
