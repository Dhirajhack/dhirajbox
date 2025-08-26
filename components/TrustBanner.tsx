
import { ShieldCheckIcon, TruckIcon, SparklesIcon } from './icons';

export const TrustBanner = () => {
  const trustPoints = [
    { icon: <ShieldCheckIcon />, text: '100% Secure Payment' },
    { icon: <TruckIcon />, text: 'Fast & Insured Delivery' },
    { icon: <SparklesIcon />, text: 'Guaranteed Mystery Value' },
  ];

  return (
    <div className="bg-gray-100 rounded-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-around items-center text-gray-700">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-3 my-2 sm:my-0">
              <span className="text-yellow-500">{point.icon}</span>
              <span className="font-semibold">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};