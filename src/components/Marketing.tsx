import { motion } from 'framer-motion';
import { Target, BarChart, Search, Store } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Google Ads',
    description: 'Campanhas otimizadas para maximizar seu ROI e alcançar clientes qualificados.'
  },
  {
    icon: BarChart,
    title: 'Meta Ads',
    description: 'Estratégias personalizadas para Facebook e Instagram com foco em resultados.'
  },
  {
    icon: Search,
    title: 'SEO Local',
    description: 'Otimização para busca local e maior visibilidade no seu mercado.'
  },
  {
    icon: Store,
    title: 'Google Business',
    description: 'Gestão completa do seu perfil para aumentar sua presença local.'
  }
];

export default function Marketing() {
  return (
    <div id="marketing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Marketing Digital
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções completas para sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}