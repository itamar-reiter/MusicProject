"use client";
import { useState } from "react";

export default function UserInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Music Notes */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="text-4xl text-purple-300 opacity-60">♪</div>
      </div>
      <div
        className="absolute top-32 right-24 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="text-3xl text-blue-300 opacity-60">♫</div>
      </div>
      <div
        className="absolute bottom-32 left-32 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-5xl text-pink-300 opacity-60">♪</div>
      </div>
      <div
        className="absolute bottom-20 right-20 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="text-4xl text-indigo-300 opacity-60">♫</div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center space-y-8 z-10 w-full max-w-lg">
        {/* Welcome Header with beautiful typography */}
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mb-4 font-mono tracking-wider">
            Welcome! 🎵
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 font-semibold tracking-wide text-center leading-relaxed">
            Tell me what you feel
            <br />
            <span className="text-lg text-purple-300">
              and I&apos;ll create a 10-song playlist just for you
            </span>
          </p>
        </div>

        {/* Form with modern styling */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your mood, feelings, or the vibe you're looking for..."
            rows={4}
            className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className={`w-full px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all duration-300 transform shadow-2xl border ${
              inputValue.trim()
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105 border-purple-500 cursor-pointer"
                : "bg-gray-700 text-gray-400 border-gray-600 cursor-not-allowed"
            }`}
          >
            Create My Playlist ✨
          </button>
        </form>
      </div>
    </div>
  );
}
