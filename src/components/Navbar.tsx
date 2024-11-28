import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">FotureFlux</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Início</a>
              <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Serviços</a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Sobre</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">Contato</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md font-medium">Início</a>
            <a href="#services" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md font-medium">Serviços</a>
            <a href="#about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md font-medium">Sobre</a>
            <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md font-medium hover:bg-blue-700">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
}