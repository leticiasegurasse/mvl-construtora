import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '5532984017629';

  return (
    <footer id="contato" className="bg-gradient-to-br from-[#0e4c75] to-[#0a3a5a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MVL Construtora</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Construindo com confiança, rapidez e qualidade.
              <br />
              Atendimento em Muriaé e região.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>(32) 98401-7629</span>
              </a>
              <a
                href="mailto:contato@mvlconstrutora.com.br"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>contato@mvlconstrutora.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-blue-100">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Muriaé - MG e região</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <nav className="space-y-3">
              {[
                { id: 'quem-somos', label: 'Quem Somos' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'portfolio', label: 'Portfólio' },
                { id: 'contato', label: 'Contato' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-blue-100 text-sm">
            <p>© {currentYear} MVL Construtora. Todos os direitos reservados.</p>
            <p className="text-center md:text-right">
              Desenvolvido com ❤️ por{' '}
              <a
                href="https://sgr.dev.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 font-semibold transition-colors underline decoration-2 underline-offset-2"
              >
                SGR Desenvolvimento
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

