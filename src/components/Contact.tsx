import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <p className="mt-4 text-xl text-gray-300">Restons en contact</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Contactez-nous</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Informations</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-amber-500 mr-3" />
                <span>contact@elleetlesjean.fr</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-amber-500 mr-3" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-amber-500 hover:text-amber-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-amber-500 hover:text-amber-400">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}