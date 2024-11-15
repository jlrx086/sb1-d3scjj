import React from 'react';

const members = [
  {
    name: "Elle",
    role: "Chanteuse",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Jean-Pierre",
    role: "Guitariste",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Jean-Marc",
    role: "Bassiste",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Jean-Paul",
    role: "Batteur",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Groupe() {
  return (
    <section id="groupe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Le Groupe</h2>
          <p className="mt-4 text-xl text-gray-600">Une fusion unique de talents et de personnalités</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-amber-500">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}