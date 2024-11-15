import React from 'react';
import { Menu, Music2, Calendar, Users, Mail, Video, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#concerts", label: "Concerts" },
    { href: "#groupe", label: "Le Groupe" },
    { href: "#media", label: "Média" },
    { href: "#espace-pro", label: "Espace Pro" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Music2 className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-bold">Elle et les Jean</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}