import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Olá Dr. Dani Rodrigues! Meu nome é ${formData.name}. ${formData.message}. Meu telefone é ${formData.phone} e meu email é ${formData.email}. Gostaria de agendar uma consulta!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/55NUMERO?text=${encodedMessage}`, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-yellow-400">Contato</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Agende sua consulta e inicie sua jornada rumo a uma vida mais
            saudável!
          </p>
        </Motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-300">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  placeholder="Descreva seus objetivos e necessidades..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} />
                Enviar Mensagem pelo WhatsApp
              </button>
            </form>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-gray-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 mt-1">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">WhatsApp</h4>
                  <p className="text-gray-300">(XX) XXXX-XXXX</p>
                  <p className="text-gray-400 text-sm">
                    Atendimento por mensagem
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-yellow-400 mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-gray-300">contato@danirodrigues.com.br</p>
                  <p className="text-gray-400 text-sm">
                    Respondemos em até 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-yellow-400 mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Atendimento Presencial
                  </h4>
                  <p className="text-gray-300">Rua Exemplo, 123 - Centro</p>
                  <p className="text-gray-300">Cidade - Estado</p>
                  <p className="text-gray-400 text-sm">
                    Agendamento prévio necessário
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                Horário de Atendimento
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span>09:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
