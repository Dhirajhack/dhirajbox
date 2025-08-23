
import React from 'react';
import type { MysteryBox, CustomerInfo } from '../types';
import { ChevronLeftIcon, ShieldCheckIcon } from './icons';

interface PaymentPageProps {
  box: MysteryBox;
  customerInfo: CustomerInfo;
  onPay: () => void;
  onGoBack: () => void;
}

const paymentMethods = [
  { name: 'UPI', icon: 'https://cdn.iconscout.com/icon/free/png-256/bhim-3-69845.png' },
  { name: 'Debit/Credit Card', icon: 'https://cdn.iconscout.com/icon/free/png-256/visa-22-226458.png' },
  { name: 'Wallet', icon: 'https://cdn.iconscout.com/icon/free/png-256/paytm-226444.png' },
  { name: 'Net Banking', icon: 'https://cdn.iconscout.com/icon/free/png-256/bank-1763188-1502288.png' },
];

export const PaymentPage: React.FC<PaymentPageProps> = ({ box, customerInfo, onPay, onGoBack }) => {
  const shipping = 40.00;
  const total = box.price + shipping;

  return (
    <div className="min-h-screen text-white flex justify-center items-center py-12 px-4 animate-fade-in-up" style={{ animation: 'fade-in-up 0.5s ease-out' }}>
        <div className="w-full max-w-4xl flex flex-col md:flex-row bg-[#18283a] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
            {/* Left Side: Order Summary */}
            <div className="md:w-1/2 p-8 bg-black/20">
                <button onClick={onGoBack} className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400 transition-colors mb-6">
                    <ChevronLeftIcon /> <span>Back</span>
                </button>
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                <div className="flex items-center space-x-4 border-b border-gray-700 pb-4">
                    <img src={box.imageUrl} alt={box.name} className="w-24 h-24 rounded-lg object-cover"/>
                    <div>
                        <h3 className="font-semibold text-lg">{box.name}</h3>
                        <p className="text-yellow-400 font-bold text-xl">₹{box.price.toLocaleString('en-IN')}</p>
                    </div>
                </div>
                <div className="space-y-2 text-gray-300 mt-4">
                    <div className="flex justify-between"><span>Subtotal</span><span>₹{box.price.toLocaleString('en-IN')}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span>₹{shipping.toFixed(2)}</span></div>
                    <div className="flex justify-between text-white font-bold text-lg border-t border-gray-700 pt-2 mt-2"><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
                </div>
                 <div className="mt-6 text-sm text-gray-400">
                    <h4 className="font-semibold text-white">Shipping to:</h4>
                    <p>{customerInfo.name}</p>
                    <p>{customerInfo.address}</p>
                    <p>{customerInfo.email} | {customerInfo.mobile}</p>
                </div>
            </div>

            {/* Right Side: Payment Methods */}
            <div className="md:w-1/2 p-8">
                 <h2 className="text-2xl font-bold text-white mb-6">Choose Payment Method</h2>
                 <div className="space-y-4">
                     {paymentMethods.map(method => (
                         <div key={method.name} className="flex items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-yellow-400 cursor-pointer transition-all">
                             <input id={method.name} name="payment-method" type="radio" className="h-4 w-4 text-yellow-500 bg-gray-800 border-gray-600 focus:ring-yellow-600"/>
                             <label htmlFor={method.name} className="ml-3 block text-sm font-medium text-white flex-grow">{method.name}</label>
                             <img src={method.icon} alt={method.name} className="w-8 h-8 object-contain"/>
                         </div>
                     ))}
                 </div>
                 <div className="mt-8">
                    <button 
                        onClick={onPay}
                        className="w-full bg-yellow-400 text-blue-900 font-bold py-4 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40"
                    >
                        Pay ₹{total.toLocaleString('en-IN')}
                    </button>
                 </div>
                 <div className="flex items-center justify-center mt-4 text-gray-400 text-sm space-x-2">
                    <ShieldCheckIcon />
                    <span>Secure payments by trusted gateways</span>
                 </div>
            </div>
        </div>
    </div>
  );
};
