
import React from 'react';
import type { MysteryBox } from '../types';
import { StarIcon, ChevronLeftIcon } from './icons';

interface DetailPageProps {
  box: MysteryBox;
  onBuyNow: () => void;
  onGoBack: () => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ box, onBuyNow, onGoBack }) => {
  return (
    <div className="min-h-screen text-gray-800 animate-fade-in-up" style={{ animation: 'fade-in-up 0.5s ease-out' }}>
      <div className="container mx-auto px-6 py-12">
        <button onClick={onGoBack} className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 transition-colors mb-8">
            <ChevronLeftIcon />
            <span>Back to all boxes</span>
        </button>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-400/20 overflow-hidden md:flex">
          <div className="md:w-1/2">
            <img src={box.imageUrl} alt={box.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{box.name}</h1>
              <p className="text-3xl font-bold text-yellow-500 mt-4">₹{box.price.toLocaleString('en-IN')}</p>
              <p className="text-gray-600 mt-6">{box.detailedDescription}</p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Possible Items Inside:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {box.possibleItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={onBuyNow}
              className="w-full mt-8 bg-yellow-400 text-blue-900 font-bold py-4 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
          <div className="mt-8 space-y-6 max-w-3xl mx-auto">
            {box.reviews.map(review => (
              <div key={review.id} className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-gray-900 text-lg">{review.author}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};