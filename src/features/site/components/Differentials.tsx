import { Zap, Users, ShieldCheck, Heart } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Rapidez na entrega',
      description: 'Cumprimos prazos e entregamos sua obra no tempo combinado'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Equipe completa',
      description: 'Profissionais qualificados e especializados em cada etapa'
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: 'Garantia total',
      description: 'Todas as obras com garantia e suporte pós-entrega'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Atendimento humanizado',
      description: 'Personalizado e transparente do início ao fim'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0e4c75] to-[#0a3a5a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mais que uma construtora.
            <br />
            <span className="text-blue-300">Uma solução completa.</span>
          </h2>
          <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-300 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
              <p className="text-blue-100 text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;

