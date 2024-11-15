import React from 'react';
import { Play, Youtube } from 'lucide-react';

const videos = [
  {
    id: "video1",
    title: "Concert Live à La Cigale",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    youtubeId: "#"
  },
  {
    id: "video2",
    title: "Session Acoustique",
    thumbnail: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
    youtubeId: "#"
  },
  {
    id: "video3",
    title: "Clip Officiel - Nouveau Single",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    youtubeId: "#"
  }
];

export default function Media() {
  return (
    <section id="media" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Vidéos</h2>
          <p className="mt-4 text-xl text-gray-300">Découvrez nos performances live et clips officiels</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="group relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{video.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Voir toutes nos vidéos
          </a>
        </div>
      </div>
    </section>
  );
}