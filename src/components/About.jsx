import { motion as Motion } from "framer-motion";
import { FaGraduationCap, FaUserMd, FaFlask } from "react-icons/fa";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dani Rodrigues Nutricionista"
                className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-lg shadow-lg">
                <h3 className="text-black font-bold text-xl">Dani Rodrigues</h3>
                <p className="text-gray-800">CRN 00-00000</p>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Sobre <span className="text-green-600">Mim</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Sou nutricionista, pós-graduando em Fisiologia do Exercício
              Aplicada à Nutrição, e estou aqui para te guiar rumo aos seus
              objetivos com mais saúde, bem-estar e performance.
            </p>

            <p className="text-gray-600 mb-8">
              Quer emagrecer, ganhar massa, melhorar a performance ou só se
              sentir melhor no dia a dia? Eu te ajudo com um plano alimentar
              personalizado e respaldado pela ciência!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-green-600 mt-1">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">
                    Formação Acadêmica
                  </h3>
                  <p className="text-gray-600">Graduação em Nutrição</p>
                  <p className="text-gray-600">
                    Pós-graduando em Fisiologia do Exercício Aplicada à Nutrição
                  </p>
                  <p className="text-gray-600">
                    Mestrando em Nutrição, Metabolismo e Estética
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 mt-1">
                  <FaUserMd size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Atendimento</h3>
                  <p className="text-gray-600">
                    Atendimentos online e presenciais
                  </p>
                  <p className="text-gray-600">
                    Planos alimentares individualizados
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 mt-1">
                  <FaFlask size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">
                    Abordagem Científica
                  </h3>
                  <p className="text-gray-600">
                    Fundamentado em pesquisas científicas
                  </p>
                  <p className="text-gray-600">
                    Monitoramento contínuo e ajustes regulares
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="mt-10 p-4 border-l-4 border-yellow-400 bg-gray-50">
              <p className="text-gray-700 italic">
                "NENHUM DESAFIO É GRANDE O SUFICIENTE QUANDO A SUA VONTADE É MAIS FORTE!"
              </p>
            </blockquote>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
