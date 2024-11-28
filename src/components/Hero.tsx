import { ArrowRight, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-black pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-indigo-800/90 to-purple-600/80 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
          alt="Tecnologia Futurista"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div>
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 rounded-full bg-indigo-600/10 px-3 py-1 text-sm leading-6 text-indigo-200 ring-1 ring-indigo-500/20 backdrop-blur-sm">
                <Brain className="h-4 w-4" />
                <span>FotureFlux - Inovação em IA</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
              Transforme seu Negócio com
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"> Inteligência Artificial</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl leading-relaxed">
              Soluções inovadoras de IA e automação inteligente para impulsionar 
              sua empresa ao próximo nível de eficiência e crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/351938602478"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 backdrop-blur-sm md:text-lg"
              >
                Comece sua Transformação
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-indigo-100 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all duration-200 md:text-lg"
              >
                Nossas Soluções
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}