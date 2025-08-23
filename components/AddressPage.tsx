
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
    <div className="min-h-screen text-gray-800 flex items-center justify-center py-12 px-4 animate-fade-in-up" style={{ animation: 'fade-in-up 0.5s ease-out' }}>
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-2xl shadow-gray-400/20 relative border border-gray-200">
        <button onClick={onGoBack} className="absolute top-4 left-4 flex items-center space-x-1 text-gray-500 hover:text-yellow-500 transition-colors">
            <ChevronLeftIcon />
        </button>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Shipping Information
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Enter your details for delivery
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-white text-gray-900" placeholder="Full Name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
               <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-white text-gray-900" placeholder="Email address" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
               <label htmlFor="mobile" className="sr-only">Mobile Number</label>
              <input id="mobile" name="mobile" type="tel" required value={formData.mobile} onChange={handleChange} className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-white text-gray-900" placeholder="Mobile Number" />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
             <div>
               <label htmlFor="address" className="sr-only">Delivery Address</label>
              <input id="address" name="address" type="text" required value={formData.address} onChange={handleChange} className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-white text-gray-900" placeholder="Delivery Address" />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

          <div className="pt-4">
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-blue-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/40">
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};