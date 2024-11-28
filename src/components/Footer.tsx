import { Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">FotureFlux</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Capacitando empresas através de soluções inovadoras em IA e automação inteligente.
              Seu sucesso é nossa prioridade.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">Sobre</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">IA Avançada</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Automação Inteligente</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Análise Preditiva</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Consultoria em IA</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} FotureFlux. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}