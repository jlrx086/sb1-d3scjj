import React from 'react';
import { Download, FileText, Image, Music } from 'lucide-react';

const documents = [
  {
    icon: FileText,
    title: "Fiche Technique",
    description: "Configuration sonore et technique",
    downloadUrl: "#"
  },
  {
    icon: Music,
    title: "Rider",
    description: "Besoins logistiques et accueil",
    downloadUrl: "#"
  },
  {
    icon: Image,
    title: "Photos HD",
    description: "Photos promotionnelles",
    downloadUrl: "#"
  }
];

export default function EspacePro() {
  return (
    <section id="espace-pro" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Espace Pro</h2>
          <p className="mt-4 text-xl text-gray-600">Ressources pour les organisateurs</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {documents.map((doc, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <doc.icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-6">{doc.description}</p>
                <a
                  href={doc.downloadUrl}
                  className="inline-flex items-center text-amber-500 hover:text-amber-600 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin de plus d'informations ?</h3>
          <p className="text-gray-600 mb-6">
            Pour toute demande spécifique ou information complémentaire, n'hésitez pas à nous contacter directement.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}