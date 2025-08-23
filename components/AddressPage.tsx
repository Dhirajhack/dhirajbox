
import React, { useState } from 'react';
import type { CustomerInfo } from '../types';
import { ChevronLeftIcon } from './icons';

interface AddressPageProps {
  onSubmit: (info: CustomerInfo) => void;
  onGoBack: () => void;
}

export const AddressPage: React.FC<AddressPageProps> = ({ onSubmit, onGoBack }) => {
  const [formData, setFormData] = useState<CustomerInfo>({
    name: '',
    mobile: '',
    address: '',
    email: '',
  });
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  const validate = (): boolean => {
    const newErrors: Partial<CustomerInfo> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    if (!formData.address) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center py-12 px-4 animate-fade-in-up" style={{ animation: 'fade-in-up 0.5s ease-out' }}>
      <div className="max-w-md w-full space-y-8 bg-[#18283a] p-10 rounded-2xl shadow-2xl shadow-black/40 relative">
        <button onClick={onGoBack} className="absolute top-4 left-4 flex items-center space-x-1 text-gray-400 hover:text-yellow-400 transition-colors">
            <ChevronLeftIcon />
        </button>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Shipping Information
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Enter your details for delivery
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input id="mobile" name="mobile" type="tel" required value={formData.mobile} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Mobile Number" />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
             <div>
              <input id="address" name="address" type="text" required value={formData.address} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Delivery Address" />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-blue-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40">
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
