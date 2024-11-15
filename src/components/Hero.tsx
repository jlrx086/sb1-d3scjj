import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div id="accueil" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          className="w-full h-full object-cover"
          alt="Elle et les Jean en concert"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Elle et les Jean</h1>
          <p className="text-xl md:text-2xl mb-8">Musique française authentique et passionnée</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto transition-colors">
            <Play className="w-5 h-5 mr-2" />
            Découvrir notre musique
          </button>
        </div>
      </div>
    </div>
  );
}