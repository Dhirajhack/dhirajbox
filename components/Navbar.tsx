
import React from 'react';
import { LogoIcon, CartIcon } from './icons';

interface NavbarProps {
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGoHome }) => {
  return (
    <nav className="bg-[#0D1B2A] text-white sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={onGoHome} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <LogoIcon />
          <span className="text-2xl font-bold text-white tracking-wider">MysteryBox</span>
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-yellow-400 transition-colors">Categories</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">My Orders</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative hover:text-yellow-400 transition-colors">
            <CartIcon />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
