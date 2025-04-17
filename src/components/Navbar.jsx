import { motion as Motion} from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <span className="text-yellow-400 font-bold text-2xl">DR</span>
          <span className="text-white font-bold text-xl ml-2">Nutrição</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-white hover:text-yellow-400 cursor-pointer transition-colors"
          >
            Início
          </Link>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            className="text-white hover:text-yellow-400 cursor-pointer transition-colors"
          >
            Sobre
          </Link>
          <Link
            to="servicos"
            smooth={true}
            duration={500}
            className="text-white hover:text-yellow-400 cursor-pointer transition-colors"
          >
            Serviços
          </Link>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className="text-white hover:text-yellow-400 cursor-pointer transition-colors"
          >
            Contato
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black py-4 px-4"
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="block py-2 text-white hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            className="block py-2 text-white hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </Link>
          <Link
            to="servicos"
            smooth={true}
            duration={500}
            className="block py-2 text-white hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </Link>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className="block py-2 text-white hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
        </Motion.div>
      )}
    </Motion.nav>
  );
}
