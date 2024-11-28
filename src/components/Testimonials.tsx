import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "A FOTUre flux revolucionou nossa operação com soluções de IA. Aumentamos nossa eficiência em 300% em apenas 3 meses."
  },
  {
    content: "A implementação de automação inteligente superou todas as expectativas. Um parceiro verdadeiramente visionário."
  },
  {
    content: "As soluções personalizadas de IA da FOTUre flux transformaram completamente nossa análise de dados e tomada de decisão."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Histórias de Sucesso
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Veja o que nossos clientes dizem sobre nossas soluções de IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}