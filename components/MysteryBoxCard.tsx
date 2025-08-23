
import React from 'react';
import type { MysteryBox } from '../types';
import { StarIcon } from './icons';

interface MysteryBoxCardProps {
  box: MysteryBox;
  onViewDetails: (box: MysteryBox) => void;
}

export const MysteryBoxCard: React.FC<MysteryBoxCardProps> = ({ box, onViewDetails }) => {
  const averageRating = box.reviews.length > 0
    ? (box.reviews.reduce((acc, r) => acc + r.rating, 0) / box.reviews.length).toFixed(1)
    : '5.0';

  return (
    <div className="bg-[#18283a] rounded-xl overflow-hidden shadow-lg shadow-black/30 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img className="w-full h-56 object-cover" src={box.imageUrl} alt={box.name} />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white">{box.name}</h3>
        <p className="text-gray-400 mt-2 flex-grow">{box.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-2xl font-bold text-yellow-400">₹{box.price.toLocaleString('en-IN')}</p>
          <div className="flex items-center space-x-1 text-sm text-gray-300">
            <StarIcon className="text-yellow-400" />
            <span>{averageRating} &middot; {box.reviews.length} reviews</span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={() => onViewDetails(box)}
          className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
