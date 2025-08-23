
import React from 'react';
import { ShieldCheckIcon } from './icons';

export const Footer = () => {
    return (
        <footer className="bg-black/20 text-gray-400 mt-20">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl text-white font-bold">MysteryBox</h3>
                        <p className="max-w-md mt-2">Unbox Royal Surprises. Hand-picked mystery treasures with guaranteed value, secure checkout, and insured shipping.</p>
                    </div>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} MysteryBox. All Rights Reserved.</p>
                    <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                        <ShieldCheckIcon />
                        <span>SSL Secure | Verified Sellers | Refund Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
