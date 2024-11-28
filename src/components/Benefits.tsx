import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = {
  withAI: [
    "Automação 24/7 sem interrupções",
    "Redução de até 70% nos custos operacionais",
    "Análise preditiva de dados em tempo real",
    "Personalização em escala",
    "Detecção proativa de problemas"
  ],
  withoutAI: [
    "Operações limitadas ao horário comercial",
    "Altos custos com processos manuais",
    "Análise de dados retrospectiva e lenta",
    "Personalização limitada",
    "Detecção reativa de problemas"
  ]
};

export default function Benefits() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Benefícios da Automação com IA
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Compare a transformação que a IA pode trazer para seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Com IA */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Com IA</h3>
            <div className="space-y-4">
              {benefits.withAI.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sem IA */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Sem IA</h3>
            <div className="space-y-4">
              {benefits.withoutAI.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}