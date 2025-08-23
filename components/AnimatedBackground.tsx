import React from 'react';
import { assets } from '../assets';

const items = [
  { src: assets.animatedItems.laptop, size: 150 },
  { src: assets.animatedItems.iphone, size: 100 },
  { src: assets.animatedItems.car, size: 200 },
  { src: assets.animatedItems.bike, size: 180 },
  { src: assets.animatedItems.gold_chain, size: 120 },
  { src: assets.animatedItems.gold_bar, size: 90 },
  { src: assets.animatedItems.silver_jewelry, size: 110 },
  { src: assets.animatedItems.laptop, size: 120 },
  { src: assets.animatedItems.iphone, size: 130 },
  { src: assets.animatedItems.gold_chain, size: 150 },
];

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-white">
      {/* Central Mystery Box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <img
          src={assets.animatedItems.box}
          alt="Mystery Box"
          className="w-[400px] h-auto object-contain"
          style={{
            animation: 'box-bob 5s ease-in-out infinite, pulse-glow 3s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating Items */}
      {items.map((item, index) => {
        const animationDuration = Math.random() * 10 + 10; // 10s to 20s
        const animationDelay = Math.random() * 15; // 0s to 15s delay
        const leftPosition = Math.random() * 90 + 5; // 5% to 95%
        const initialRotation = Math.random() * 360;

        return (
          <img
            key={index}
            src={item.src}
            alt="Floating prize"
            className="absolute bottom-0 opacity-0 object-contain pointer-events-none"
            style={{
              width: `${item.size}px`,
              left: `${leftPosition}%`,
              transform: `rotate(${initialRotation}deg)`,
              animation: `float-item ${animationDuration}s linear ${animationDelay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
};