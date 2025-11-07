
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_IMAGES, PORTFOLIO_CATEGORIES } from '../constants';
import type { PortfolioImage } from '../types';

// Define Modal component here to avoid re-rendering issues
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: PortfolioImage | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
    if (!isOpen || !image) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img src={image.src} alt={image.alt} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
                <button 
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState<PortfolioImage[]>(PORTFOLIO_IMAGES);
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredImages(PORTFOLIO_IMAGES);
    } else {
      setFilteredImages(PORTFOLIO_IMAGES.filter(image => image.category === activeCategory));
    }
  }, [activeCategory]);
  
  const openModal = (image: PortfolioImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400 mb-2">Our Portfolio</h2>
          <p className="text-lg text-gray-400">A glimpse into the moments we've captured.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {PORTFOLIO_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category 
                ? 'bg-amber-500 text-gray-900' 
                : 'bg-gray-700 text-gray-300 hover:bg-amber-400 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </section>
  );
};

export default Portfolio;
