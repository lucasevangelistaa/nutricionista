import { motion as Motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>

      <div className="container mx-auto px-4 z-20 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transforme sua saúde com{" "}
            <span className="text-yellow-400">Nutrição</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Conquiste seus objetivos com um plano alimentar feito sob medida e
            com base científica!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="contato"
              smooth={true}
              duration={500}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Agendar Consulta
            </Link>

            <Link
              to="servicos"
              smooth={true}
              duration={500}
              className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Conhecer Serviços
            </Link>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            className="text-white hover:text-yellow-400 cursor-pointer"
          >
            <FaArrowDown className="animate-bounce" size={24} />
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}
