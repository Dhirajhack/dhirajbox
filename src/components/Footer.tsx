
import React from 'react';
import { ShieldCheckIcon } from './icons';

export const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-600 mt-16">
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg text-gray-900 font-bold">MysteryBox</h3>
                        <p className="max-w-md mt-1 text-sm">Unbox Mystery Surprises. Hand-picked mystery treasures with guaranteed value, secure checkout, and insured shipping.</p>
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-yellow-500 transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-yellow-500 transition-colors">Contact Us</a>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} MysteryBox. All Rights Reserved.</p>
                    <div className="flex items-center space-x-2 mt-3 sm:mt-0">
                        <ShieldCheckIcon />
                        <span>SSL Secure | Verified Sellers | Refund Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};