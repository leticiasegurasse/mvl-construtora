import { Home, Hammer, Users, Wrench, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Construção de casas do zero',
      description: 'Projeto completo do início ao fim'
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Reformas completas e acessíveis',
      description: 'Renovação total ou parcial do seu imóvel'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Minha Casa Minha Vida',
      description: 'Atendimento especializado ao programa'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Equipe multi-serviços',
      description: 'Profissionais qualificados para toda obra'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Serviços de serralheria',
      description: 'Portões, grades e estruturas metálicas'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Garantia e entrega no prazo',
      description: 'Comprometimento com prazos e qualidade'
    }
  ];

  const whatsappNumber = '5532984017629';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços.');

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            O que a MVL <span className="text-[#0e4c75]">faz por você</span>
          </h2>
          <div className="w-24 h-1 bg-[#0e4c75] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#0e4c75] hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-[#0e4c75] to-[#0a3a5a] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0e4c75] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0a3a5a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Solicite seu orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

