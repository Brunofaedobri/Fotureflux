export default function About() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Reunião em equipe"
              className="rounded-xl shadow-xl"
            />
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Seu Parceiro de Confiança em Excelência Empresarial
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Com nossa experiência, ajudamos centenas de empresas
              a alcançarem seus objetivos através de consultoria estratégica e
              soluções inovadoras. Nossa equipe de especialistas traz conhecimento
              diversificado e um histórico comprovado de sucesso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}