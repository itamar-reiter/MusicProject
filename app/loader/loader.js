"use client";

import { useEffect } from "react";

export default function Loader({headline, escapeLoader}) {

    useEffect(() => {

        const timer = setTimeout(() => {
            if (escapeLoader) {
                escapeLoader();
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [escapeLoader]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Music Notes Animation */}
      <div className="relative mb-8">
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-white rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Spinning Vinyl Record */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-black rounded-full animate-spin border-4 border-gray-800">
          {/* Center hole */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-600 rounded-full"></div>
          {/* Grooves */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border border-gray-700 rounded-full"></div>
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-gray-700 rounded-full"></div>
        </div>
      </div>

      {/* Pulsing Text */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
          {headline}
        </h2>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-white">Loading</span>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '1s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Sound Wave Animation */}
      <div className="flex items-end justify-center space-x-1 mt-8">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-full animate-pulse"
            style={{
              width: '6px',
              height: `${Math.random() * 40 + 20}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.5s'
            }}
          ></div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-700 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}