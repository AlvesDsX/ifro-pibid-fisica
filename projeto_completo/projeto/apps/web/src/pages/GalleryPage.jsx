import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Filter } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Experimentos', 'Sala de Aula', 'Eventos', 'Laboratório'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800', alt: 'Alunos observando experimento', category: 'Experimentos', width: 'col-span-1 md:col-span-2', height: 'row-span-2' },
    { src: 'https://images.unsplash.com/photo-1564472332906-8dce28271a39?w=800', alt: 'Laboratório de Física', category: 'Laboratório', width: 'col-span-1', height: 'row-span-1' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', alt: 'Professores na sala de aula', category: 'Sala de Aula', width: 'col-span-1', height: 'row-span-1' },
    { src: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800', alt: 'Feira de Ciências', category: 'Eventos', width: 'col-span-1', height: 'row-span-2' },
    { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800', alt: 'Foguete de Garrafa PET', category: 'Experimentos', width: 'col-span-1 md:col-span-2', height: 'row-span-1' },
    { src: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800', alt: 'Apresentação no ENLIC', category: 'Eventos', width: 'col-span-1', height: 'row-span-1' },
    { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', alt: 'Equipamentos do IFRO', category: 'Laboratório', width: 'col-span-1 md:col-span-3', height: 'row-span-2' },
  ];

  const filteredImages = filter === 'Todos' ? images : images.filter(img => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Galeria de Experimentos — PIBID Física IFRO</title>
        <meta name="description" content="Confira nossa galeria de fotos com os experimentos, aulas práticas e eventos do PIBID Física." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Galeria</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12">
              Registros das nossas atividades, experimentos e momentos inesquecíveis em sala de aula.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-primary text-primary-foreground' : 'bg-muted/50 text-muted-foreground hover:bg-muted'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((img, index) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`${img.width} ${img.height} editorial-frame cursor-pointer group overflow-hidden`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <div className="text-white/80 text-xs font-bold tracking-widest uppercase mb-1">{img.category}</div>
                          <div className="text-white font-medium">{img.alt}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="max-w-6xl w-full max-h-full editorial-frame relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md p-6 border-t border-border">
                  <h3 className="text-xl font-bold">{selectedImage.alt}</h3>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest mt-1">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
