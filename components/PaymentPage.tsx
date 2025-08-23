import React, { useState } from 'react';
import type { MysteryBox, CustomerInfo } from '../types';
import { ChevronLeftIcon, ShieldCheckIcon } from './icons';
import { assets } from '../assets';
import { SELLER_WHATSAPP_NUMBER } from '../constants';

interface PaymentPageProps {
  box: MysteryBox;
  customerInfo: CustomerInfo;
  onPay: () => void;
  onGoBack: () => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ box, customerInfo, onPay, onGoBack }) => {
  const shipping = 40.00;
  const total = box.price + shipping;
  const [paymentStep, setPaymentStep] = useState<'pay' | 'upload' | 'confirming'>('pay');
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [proofPreview, setProofPreview] = useState<string | null>(null);

  const upiId = 'gurujiseller@ybl';
  const upiLink = `upi://pay?pa=${upiId}&pn=MysteryBox&am=${total.toFixed(2)}&cu=INR&tn=Order for ${encodeURIComponent(box.name)}`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPaymentProof(file);
      setProofPreview(URL.createObjectURL(file));
    }
  };

  const handleProceedToUpload = () => {
    // A small delay to allow the UPI app to open before changing the state
    setTimeout(() => {
        setPaymentStep('upload');
    }, 1000);
  };

  const handleConfirmOrder = () => {
    if (!paymentProof) return;

    const orderDetails = `
*New Mystery Box Order!* 📦

*Product:* ${box.name}
*Amount:* ₹${total.toLocaleString('en-IN')}

---
*Shipping To:*
${customerInfo.name}
${customerInfo.address}
${customerInfo.mobile}
${customerInfo.email}
---

Order placed from website. Please find payment screenshot attached.
    `.trim();

    const whatsappUrl = `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${encodeURIComponent(orderDetails)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setPaymentStep('confirming');
  };
  
  const handleFinalizeOrder = () => {
      onPay();
  };


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

            {/* Right Side: Payment Steps */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                {paymentStep === 'pay' && (
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Complete your payment</h2>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={assets.paymentIcons.upi} alt="UPI" className="w-10 h-10 object-contain mr-4"/>
                                    <div>
                                        <p className="font-semibold text-white">Pay with UPI</p>
                                        <p className="text-sm text-gray-400">{upiId}</p>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-yellow-400">₹{total.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            Clicking 'Pay Now' will open your UPI app. After payment, return here to upload a screenshot.
                        </p>
                        <div className="mt-6">
                            <a 
                                href={upiLink}
                                onClick={handleProceedToUpload}
                                className="w-full block text-center bg-yellow-400 text-blue-900 font-bold py-4 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pay Now
                            </a>
                        </div>
                        <div className="flex items-center justify-center mt-4 text-gray-400 text-sm space-x-2">
                            <ShieldCheckIcon />
                            <span>Secure payments by trusted gateways</span>
                        </div>
                    </div>
                )}

                {paymentStep === 'upload' && (
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Confirm Your Order</h2>
                        <p className="text-gray-300 mb-6 text-sm">Please upload a screenshot of your successful payment to finalize the order.</p>
                        
                        <div>
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-700/50 rounded-md font-medium text-yellow-400 hover:text-yellow-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-yellow-500 border-2 border-dashed border-gray-500 h-40 flex items-center justify-center text-center p-1">
                                {proofPreview ? (
                                    <img src={proofPreview} alt="Payment proof preview" className="h-full w-auto object-contain rounded-md" />
                                ) : (
                                    <span className="text-gray-400">Click to upload screenshot</span>
                                )}
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                            </label>
                        </div>
                        <p className="text-xs text-gray-400 mt-6 text-center">
                            You'll be redirected to WhatsApp to send us the order details and your payment proof.
                        </p>
                        <div className="mt-2">
                            <button 
                                onClick={handleConfirmOrder}
                                disabled={!paymentProof}
                                className="w-full bg-green-500 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/40 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center space-x-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475l-6.351 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.907 6.18l-1.331 4.873 4.883-1.286zM9.311 8.244c-.273-.124-.552-.187-.829-.187-.302 0-.523.062-.687.187-.179.139-.267.319-.267.546 0 .427.195.844.38 1.037.162.187.354.38.581.592.25.225.488.463.714.724.254.282.483.56.687.829.232.302.436.575.616.829.204.282.38.51.531.687.179.195.319.33.436.418.124.088.248.131.38.131.131 0 .273-.016.418-.047s.273-.062.402-.088c.116-.023.225-.031.319-.031.116 0 .225.008.319.031.162.031.33.094.496.187s.299.195.402.302c.103.116.179.24.219.38.047.139.07.282.07.436 0 .15-.016.291-.047.418s-.088.232-.131.33c-.047.103-.116.195-.219.282-.103.088-.219.162-.354.219-.131.047-.282.07-.463.07-.319 0-.699-.088-1.141-.267s-.923-.427-1.436-.752c-.523-.328-.995-.735-1.412-1.218-.418-.496-.752-.995-1.013-1.498-.273-.523-.488-1.049-.649-1.575-.162-.535-.24-.1.088-.302.088-.07.187-.131.302-.187.116-.047.232-.07.354-.07.124 0 .24.023.354.07.116.047.219.116.302.187.088.088.15.187.187.302.047.116.07.24.07.365 0 .116-.016.225-.047.319-.031.088-.07.162-.124.219-.047.047-.103.088-.162.116-.062.031-.131.047-.219.047-.116 0-.219-.023-.302-.07-.088-.047-.162-.116-.219-.204-.047-.088-.07-.187-.07-.282 0-.088.023-.162.07-.225.047-.07.103-.124.162-.162.062-.047.124-.07.187-.07.07 0 .131.016.187.047s.103.062.131.103c.031.047.047.088.047.124 0 .047-.008.088-.023.124s-.031.062-.047.088c-.023.016-.047.023-.07.023-.023 0-.047-.008-.062-.023-.023-.016-.031-.031-.031-.055z"/></svg>
                                <span>Confirm on WhatsApp</span>
                            </button>
                        </div>
                    </div>
                )}

                {paymentStep === 'confirming' && (
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">One Last Step!</h2>
                        <p className="text-gray-300 mb-6 text-sm">We've opened WhatsApp for you. Please attach your payment screenshot in the chat and send the message to confirm your order.</p>
                        
                        <div className="p-4 bg-blue-900/50 rounded-lg border border-blue-700 text-center flex flex-col items-center space-y-3">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            <p className="font-semibold text-blue-300">Waiting for you to send the message on WhatsApp...</p>
                        </div>

                        <div className="mt-6">
                            <button 
                                onClick={handleFinalizeOrder}
                                className="w-full bg-green-500 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/40 flex items-center justify-center space-x-3"
                            >
                                <span>I Have Sent the Screenshot!</span>
                            </button>
                        </div>
                         <p className="text-xs text-gray-400 mt-4 text-center">
                            Click the button above after sending the message to see your order confirmation.
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};