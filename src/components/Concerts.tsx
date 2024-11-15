import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const concerts = [
  {
    date: "15 Juin 2024",
    venue: "La Cigale",
    city: "Paris",
    ticketLink: "#"
  },
  {
    date: "22 Juin 2024",
    venue: "Le Transbordeur",
    city: "Lyon",
    ticketLink: "#"
  },
  {
    date: "29 Juin 2024",
    venue: "Le Bikini",
    city: "Toulouse",
    ticketLink: "#"
  }
];

export default function Concerts() {
  return (
    <section id="concerts" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Prochains Concerts</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {concerts.map((concert, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-white font-semibold">{concert.date}</span>
                </div>
                <div className="flex items-center mb-6">
                  <MapPin className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-white">{concert.venue} - {concert.city}</span>
                </div>
                <a
                  href={concert.ticketLink}
                  className="block text-center bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}