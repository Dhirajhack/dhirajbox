
import React from 'react';
import type { MysteryBox } from '../types';
import { MYSTERY_BOXES } from '../constants';
import { MysteryBoxCard } from './MysteryBoxCard';
import { TrustBanner } from './TrustBanner';

interface HomePageProps {
  onViewDetails: (box: MysteryBox) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onViewDetails }) => {
  return (
    <div className="min-h-screen text-white">
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#18283a] to-[#0D1B2A] rounded-2xl p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center mb-16 shadow-2xl shadow-black/40">
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Unbox <span className="text-yellow-400">Royal</span> Surprises
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
                    Hand-picked mystery treasures with guaranteed value, secure checkout, and insured shipping. Your next delight is one click away.
                </p>
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                    <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 transform hover:scale-105">
                        Shop Mystery Boxes
                    </button>
                    <button className="bg-transparent border-2 border-gray-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 hover:border-gray-700 transition-all duration-300">
                        Why choose us?
                    </button>
                </div>
            </div>
             <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img src="/__fp__/user_upload_6.png" alt="Mystery Box" className="rounded-lg shadow-2xl"/>
            </div>
        </div>

        {/* Trust Banner */}
        <div className="my-12">
          <TrustBanner />
        </div>

        {/* Boxes Section */}
        <div>
          <h2 className="text-3xl font-bold text-center">Choose Your Mystery Box</h2>
          <p className="text-center text-gray-400 mt-2">Royal collection curated for value & delight.</p>
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