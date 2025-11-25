import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Paula',
      location: 'Nova Iguaçu',
      text: 'Minha casa ficou pronta antes do prazo e tudo do jeitinho que sonhei. Super recomendo.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Ana+Paula&background=0e4c75&color=fff&size=200'
    },
    {
      name: 'Carlos e Letícia',
      location: 'Muriaé',
      text: 'Equipe atenciosa, obra limpa, custo honesto. Foi tudo ótimo.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Carlos+Leticia&background=0e4c75&color=fff&size=200'
    },
    {
      name: 'Roberto Silva',
      location: 'Centro',
      text: 'A reforma da minha casa ficou impecável. Profissionais muito competentes e pontuais.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Roberto+Silva&background=0e4c75&color=fff&size=200'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Quem já construiu com a gente
            <br />
            <span className="text-[#0e4c75]">recomenda</span>
          </h2>
          <div className="w-24 h-1 bg-[#0e4c75] mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:border-[#0e4c75] transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="text-[#0e4c75] mb-4">
                <Quote className="w-10 h-10 opacity-30" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0e4c75]"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

