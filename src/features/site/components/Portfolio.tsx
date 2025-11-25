import { useState } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';

// Importando imagens e vídeo reais
import image1 from '../../../assets/image/20251113_1639_Modern House Visualization_remix_01k9zbgccjfq8v91n0ww80ympv.png';
import image2 from '../../../assets/image/FLORA-Nighttime House Render-168340b8.png';
import video1 from '../../../assets/video/FINALIZADO.mp4';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title?: string;
  description?: string;
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Galeria com imagens e vídeos reais
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: image1,
      title: 'Projeto Residencial Moderno',
      description: 'Visualização arquitetônica de alta qualidade'
    },
    {
      id: 2,
      type: 'image',
      src: image2,
      title: 'Casa Noturna - Renderização',
      description: 'Projeto FLORA com iluminação noturna'
    },
    {
      id: 3,
      type: 'video',
      src: video1,
      title: 'Projeto Finalizado',
      description: 'Vídeo do projeto concluído'
    }
  ];

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  // Fechar modal com ESC
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-[#0e4c75]">Projetos</span>
            </h2>
            <div className="w-24 h-1 bg-[#0e4c75] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos realizados com excelência e dedicação
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => openModal(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openModal(item);
                }}
                tabIndex={0}
                role="button"
                aria-label={`Abrir ${item.title || 'item da galeria'}`}
              >
                {/* Overlay com efeito hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                  <div className="p-6 text-white w-full">
                    {item.title && (
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="text-sm text-gray-200">{item.description}</p>
                    )}
                  </div>
                </div>

                {/* Badge de tipo */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  {item.type === 'video' ? (
                    <Play className="w-5 h-5 text-[#0e4c75]" fill="currentColor" />
                  ) : (
                    <ImageIcon className="w-5 h-5 text-[#0e4c75]" />
                  )}
                </div>

                {/* Conteúdo */}
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title || `Projeto ${item.id}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-80 bg-gray-900 flex items-center justify-center">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-16 h-16 text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada"
        >
          {/* Botão fechar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
            aria-label="Fechar modal"
          >
            <X size={28} />
          </button>

          {/* Conteúdo do modal */}
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title || 'Imagem ampliada'}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              >
                Seu navegador não suporta vídeos.
              </video>
            )}

            {/* Informações do item */}
            {(selectedItem.title || selectedItem.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                {selectedItem.title && (
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedItem.title}
                  </h3>
                )}
                {selectedItem.description && (
                  <p className="text-gray-200">{selectedItem.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;

