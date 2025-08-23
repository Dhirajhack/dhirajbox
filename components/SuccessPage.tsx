
import React, { useState, useEffect } from 'react';

interface SuccessPageProps {
  customerName: string;
  onGoHome: () => void;
}

const Sparkle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div className="absolute text-yellow-300 text-3xl" style={style}>
    &#10024;
  </div>
);

export const SuccessPage: React.FC<SuccessPageProps> = ({ customerName, onGoHome }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStep(1), 500),   // Start shake
      setTimeout(() => setAnimationStep(2), 1500),  // Open box
      setTimeout(() => setAnimationStep(3), 2000),  // Show sparkles
      setTimeout(() => setAnimationStep(4), 2500),  // Show text
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const sparklePositions = [
    { top: '10%', left: '20%', animationDelay: '0s' },
    { top: '20%', left: '80%', animationDelay: '0.1s' },
    { top: '50%', left: '10%', animationDelay: '0.2s' },
    { top: '70%', left: '90%', animationDelay: '0.3s' },
    { top: '90%', left: '50%', animationDelay: '0.4s' },
    { top: '5%', left: '60%', animationDelay: '0.5s' },
  ];
  
  const boxShakeStyle = animationStep >= 1 ? { animation: 'box-shake 1s ease-in-out' } : {};
  const lidOpenStyle = animationStep >= 2 ? { animation: 'box-open-lid 0.5s ease-in forwards' } : {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center p-4 overflow-hidden">
      <div className="relative w-64 h-64 mb-8" style={{ perspective: '1000px' }}>
        {/* Sparkles */}
        {animationStep >= 3 && sparklePositions.map((pos, i) => (
            <Sparkle key={i} style={{ ...pos, animation: `sparkle 1s ease-out ${pos.animationDelay} forwards` }} />
        ))}

        {/* Box Base */}
        <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-yellow-400 to-yellow-600 transform" style={{ transformStyle: 'preserve-3d', ...boxShakeStyle }}>
          <div className="absolute inset-0 bg-yellow-500/30"></div>
          {/* Front */}
          <div className="absolute w-full h-full bg-yellow-500 flex items-center justify-center">
             <div className="w-16 h-16 bg-yellow-600/50 rounded-full"></div>
          </div>
          {/* Top dark part */}
           <div className="absolute top-0 w-full h-full bg-black/50" style={{ transform: 'translateZ(-1px)' }}></div>
        </div>

        {/* Box Lid */}
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-yellow-300 to-yellow-500 transform" style={{ transformStyle: 'preserve-3d', ...boxShakeStyle, ...lidOpenStyle }}>
          <div className="absolute inset-0 bg-yellow-400/30"></div>
          <div className="absolute w-full h-full bg-yellow-400"></div>
        </div>
      </div>

      {animationStep >= 4 && (
        <div style={{ animation: 'fade-in-up 0.8s ease-out forwards' }}>
          <h1 className="text-5xl font-bold text-yellow-400">Purchase Successful!</h1>
          <p className="mt-4 text-xl text-gray-300">
            Thank you, {customerName}! Your royal surprise is on its way.
          </p>
          <div className="mt-10 flex space-x-4 justify-center">
            <button className="bg-transparent border-2 border-gray-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors">
              Track Order
            </button>
            <button 
              onClick={onGoHome}
              className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};