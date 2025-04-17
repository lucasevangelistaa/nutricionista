import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-yellow-400 font-bold text-2xl">DR</span>
              <span className="text-white font-bold text-xl ml-2">
                Nutrição
              </span>
            </div>
            <p className="mt-2 text-gray-400">
              Transformando vidas através da nutrição
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaTiktok size={24} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">CRN 0-00000</p>
            <p className="text-gray-400">
              Pós-graduando em Fisiologia do Exercício Aplicada à Nutrição
            </p>
            <p className="text-gray-400">
              Mestrando em Nutrição, Metabolismo e Estética
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Dani Rodrigues Nutricionista.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
