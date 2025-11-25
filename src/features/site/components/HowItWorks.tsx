import { MessageCircle, FileText, Hammer, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageCircle className="w-10 h-10" />,
      title: 'Fale com a gente',
      description: 'Entre em contato pelo WhatsApp e conte seu projeto'
    },
    {
      number: '02',
      icon: <FileText className="w-10 h-10" />,
      title: 'Receba o orçamento',
      description: 'Orçamento transparente e detalhado sem surpresas'
    },
    {
      number: '03',
      icon: <Hammer className="w-10 h-10" />,
      title: 'Acompanhe a obra',
      description: 'Obra com agilidade, qualidade e comunicação constante'
    },
    {
      number: '04',
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'Receba com garantia',
      description: 'Casa pronta, entregue no prazo com garantia total'
    }
  ];

  const whatsappNumber = '5532984017629';
  const whatsappMessage = encodeURIComponent('Olá! Quero falar com um especialista.');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Construir com a MVL
            <br />
            <span className="text-[#0e4c75]">é simples</span>
          </h2>
          <div className="w-24 h-1 bg-[#0e4c75] mx-auto"></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (only for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#0e4c75] to-transparent z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}

              {/* Step Card */}
              <div className="relative bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#0e4c75] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 z-10">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 bg-[#0e4c75] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-br from-[#0e4c75] to-[#0a3a5a] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0e4c75] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#0a3a5a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

