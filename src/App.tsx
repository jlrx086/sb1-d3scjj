import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concerts from './components/Concerts';
import Groupe from './components/Groupe';
import Media from './components/Media';
import EspacePro from './components/EspacePro';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Concerts />
      <Groupe />
      <Media />
      <EspacePro />
      <Contact />
    </div>
  );
}