import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#0e4c75]" />,
      title: 'Missão',
      description: 'Facilitar o acesso à moradia com obras rápidas e seguras'
    },
    {
      icon: <Eye className="w-8 h-8 text-[#0e4c75]" />,
      title: 'Visão',
      description: 'Ser a construtora acessível mais confiável da região'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#0e4c75]" />,
      title: 'Valores',
      description: 'Acessibilidade, confiança, agilidade, economia e transparência'
    }
  ];

  return (
    <section id="quem-somos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Desde 2022, <span className="text-[#0e4c75]">construindo sonhos</span>
          </h2>
          <div className="w-24 h-1 bg-[#0e4c75] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A MVL nasceu atendendo licitações públicas e agora leva sua experiência para o setor privado. 
            Nossa missão é facilitar o acesso à casa própria e reformas de qualidade, com obras rápidas, 
            acessíveis e seguras.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

