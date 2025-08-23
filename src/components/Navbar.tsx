
import React from 'react';
import { CartIcon } from './icons';
import { assets } from '../assets';

interface NavbarProps {
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGoHome }) => {
  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-md shadow-gray-200/50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={onGoHome} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src={assets.logo} alt="MysteryBox Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-black tracking-wider">MysteryBox</span>
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-yellow-500 transition-colors">Categories</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">About</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">My Orders</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative hover:text-yellow-500 transition-colors">
            <CartIcon />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};