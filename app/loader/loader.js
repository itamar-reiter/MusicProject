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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Music Notes */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="text-4xl text-purple-300 opacity-60">♪</div>
      </div>
      <div className="absolute top-32 right-24 animate-bounce" style={{animationDelay: '0.5s'}}>
        <div className="text-3xl text-blue-300 opacity-60">♫</div>
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce" style={{animationDelay: '1s'}}>
        <div className="text-5xl text-pink-300 opacity-60">♪</div>
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce" style={{animationDelay: '1.5s'}}>
        <div className="text-4xl text-indigo-300 opacity-60">♫</div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center space-y-8 z-10">
        
        {/* Spinning Vinyl Record - Enhanced */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-black rounded-full animate-spin border-4 border-gray-700 shadow-2xl">
            {/* Vinyl grooves */}
            <div className="absolute inset-2 border border-gray-600 rounded-full"></div>
            <div className="absolute inset-4 border border-gray-600 rounded-full"></div>
            <div className="absolute inset-6 border border-gray-600 rounded-full"></div>
            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full border-2 border-yellow-400">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
          {/* Glowing effect */}
          <div className="absolute inset-0 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        </div>

        {/* Headline with better typography */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 mb-2 font-mono tracking-wider">
            {headline}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Loading text with dots */}
        <div className="flex items-center space-x-3">
          <span className="text-xl text-gray-300 font-semibold tracking-wide">Loading</span>
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '0.8s'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Audio Equalizer Bars */}
        <div className="flex items-end justify-center space-x-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-purple-600 via-pink-500 to-purple-400 rounded-t-lg shadow-lg"
              style={{
                width: '4px',
                height: `${Math.sin(i * 0.5) * 20 + 30}px`,
                animation: `pulse 1.2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full animate-pulse shadow-lg"
            style={{
              animation: 'loading-progress 2s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes loading-progress {
          0%, 100% { width: 20%; }
          50% { width: 80%; }
        }
      `}</style>
    </div>
  );
}