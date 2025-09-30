"use client";

export default function Closure({ onRestart }) {

  const handleRestart = () => {
    if (onRestart) {
      onRestart();
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Music Notes - Similar to loader but with celebratory feel */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="text-4xl text-green-300 opacity-70">🎵</div>
      </div>
      <div className="absolute top-32 right-24 animate-bounce" style={{animationDelay: '0.3s'}}>
        <div className="text-3xl text-yellow-300 opacity-70">🎶</div>
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce" style={{animationDelay: '0.6s'}}>
        <div className="text-5xl text-pink-300 opacity-70">🎵</div>
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce" style={{animationDelay: '0.9s'}}>
        <div className="text-4xl text-blue-300 opacity-70">🎶</div>
      </div>

      {/* Sparkle effects */}
      <div className="absolute top-40 left-1/3 animate-ping">
        <div className="text-2xl text-yellow-400 opacity-60">✨</div>
      </div>
      <div className="absolute bottom-40 right-1/3 animate-ping" style={{animationDelay: '1s'}}>
        <div className="text-2xl text-yellow-400 opacity-60">✨</div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center space-y-8 z-10">
        
        {/* Success Icon - Vinyl with checkmark */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-black rounded-full border-4 border-green-500 shadow-2xl">
            {/* Vinyl grooves */}
            <div className="absolute inset-2 border border-gray-600 rounded-full"></div>
            <div className="absolute inset-4 border border-gray-600 rounded-full"></div>
            <div className="absolute inset-6 border border-gray-600 rounded-full"></div>
            {/* Center label with checkmark */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          {/* Glowing effect */}
          <div className="absolute inset-0 w-32 h-32 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
        </div>

        {/* Success Message with matching typography */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-green-400 mb-2 font-mono tracking-wider">
            All Done! 🎉
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Success message */}
        <div className="text-center">
          <p className="text-xl text-gray-300 font-semibold tracking-wide mb-2">
            Your playlist has been downloaded successfully
          </p>
          <p className="text-lg text-gray-400">
            Thank you for using our service!
          </p>
        </div>

        {/* Success Equalizer Bars - Static but celebratory */}
        <div className="flex items-end justify-center space-x-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-green-600 via-yellow-500 to-green-400 rounded-t-lg shadow-lg"
              style={{
                width: '4px',
                height: `${Math.sin(i * 0.7) * 15 + 25}px`,
                animation: `success-pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>

        {/* Restart Button with matching style */}
        <button
          onClick={handleRestart}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg tracking-wide hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-purple-500"
        >
          Create Another Playlist
        </button>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes success-pulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  );
}