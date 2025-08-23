import React, { useState, useEffect, useCallback } from 'react';
import type { MysteryBox } from '../types';
import { MYSTERY_BOXES } from '../constants';
import { MysteryBoxCard } from './MysteryBoxCard';
import { TrustBanner } from './TrustBanner';
import { assets } from '../assets';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { AnimatedBackground } from './AnimatedBackground';

interface HomePageProps {
  onViewDetails: (box: MysteryBox) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onViewDetails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === assets.heroImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? assets.heroImages.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen text-gray-800">
      <AnimatedBackground />
      <main className="container mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center mb-16 shadow-xl shadow-gray-400/10">
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Unbox <span className="text-yellow-400">Royal</span> Surprises
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                    Hand-picked mystery treasures with guaranteed value, secure checkout, and insured shipping. Your next delight is one click away.
                </p>
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                    <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105">
                        Shop Mystery Boxes
                    </button>
                    <button className="bg-transparent border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-300">
                        Why choose us?
                    </button>
                </div>
            </div>
             <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center group">
                <div className="relative w-full rounded-lg shadow-2xl overflow-hidden aspect-square max-w-md bg-gray-200">
                    <div 
                        className="flex transition-transform duration-700 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {assets.heroImages.map((src, index) => (
                            <img key={index} src={src} alt={`Mystery Box Slide ${index + 1}`} className="w-full h-full flex-shrink-0 object-contain" />
                        ))}
                    </div>
                    
                    {/* Arrow Controls */}
                    <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100" aria-label="Previous slide">
                        <ChevronLeftIcon />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100" aria-label="Next slide">
                        <ChevronRightIcon />
                    </button>

                    {/* Dots Navigation */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {assets.heroImages.map((_, index) => (
                            <button 
                                key={index} 
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-yellow-400' : 'bg-gray-400'} transition-colors hover:bg-yellow-300`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Trust Banner */}
        <div className="my-12">
          <TrustBanner />
        </div>

        {/* Boxes Section */}
        <div>
          <h2 className="text-3xl font-bold text-center">Choose Your Mystery Box</h2>
          <p className="text-center text-gray-500 mt-2">Royal collection curated for value & delight.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {MYSTERY_BOXES.map((box) => (
              <MysteryBoxCard key={box.id} box={box} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};