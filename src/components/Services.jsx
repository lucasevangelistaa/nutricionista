import { motion as Motion } from "framer-motion";
import { FaRunning, FaWeight, FaHeartbeat, FaAppleAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaRunning size={40} className="text-yellow-400" />,
    title: "Nutrição Esportiva",
    description:
      "Estratégias alimentares para otimizar sua performance, aumentar a massa muscular e acelerar a recuperação após o treino!",
  },
  {
    icon: <FaWeight size={40} className="text-yellow-400" />,
    title: "Emagrecimento Saudável",
    description:
      "Programas sob medida para perda de peso saudável e para manter os resultados a longo prazo.",
  },
  {
    icon: <FaHeartbeat size={40} className="text-yellow-400" />,
    title: "Nutrição Estética",
    description:
      "Abordagem nutricional para melhorar a saúde da pele, cabelos e composição corporal.",
  },
  {
    icon: <FaAppleAlt size={40} className="text-yellow-400" />,
    title: "Bem-estar e Qualidade de Vida",
    description:
      "Orientações nutricionais para melhorar energia, disposição e saúde geral.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Serviços <span className="text-green-600">Especializados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofereço atendimento personalizado para diferentes objetivos e
            necessidades nutricionais.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
