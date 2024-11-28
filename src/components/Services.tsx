import { Brain, Cpu, LineChart, Lightbulb, Bot, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Brain,
    title: 'IA Avançada',
    description: 'Implementamos soluções de IA personalizadas para otimizar processos e tomar decisões mais inteligentes.'
  },
  {
    icon: Cpu,
    title: 'Automação Inteligente',
    description: 'Automatize tarefas complexas com nossa tecnologia de ponta em automação baseada em IA.'
  },
  {
    icon: LineChart,
    title: 'Análise Preditiva',
    description: 'Utilize o poder da IA para prever tendências e tomar decisões estratégicas baseadas em dados.'
  },
  {
    icon: Bot,
    title: 'Chatbots Inteligentes',
    description: 'Desenvolva interações naturais e eficientes com seus clientes através de chatbots potencializados por IA.'
  },
  {
    icon: Database,
    title: 'Big Data & IA',
    description: 'Transforme grandes volumes de dados em insights acionáveis com nossa plataforma de análise avançada.'
  },
  {
    icon: Lightbulb,
    title: 'Consultoria em IA',
    description: 'Orientação estratégica para implementar soluções de IA que impulsionam o crescimento do seu negócio.'
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Soluções de IA
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme seu negócio com nossas soluções avançadas de Inteligência Artificial
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}