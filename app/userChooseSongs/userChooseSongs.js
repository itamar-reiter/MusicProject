"use client";
import { useState } from "react";

export default function UserChooseSongs({ songs = [], onSubmit }) {
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleCheckboxChange = (song, isChecked) => {
    if (isChecked) {
      setSelectedSongs(prev => [...prev, song]);
    } else {
      setSelectedSongs(prev => prev.filter(s => s.song !== song.song || s.author !== song.author));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit && selectedSongs.length > 0) {
      onSubmit(selectedSongs);
    }
  };

  const isSelected = (song) => {
    return selectedSongs.some(s => s.song === song.song && s.author === song.author);
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
      <div className="flex flex-col items-center space-y-8 z-10 w-full max-w-4xl px-4">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mb-4 font-mono tracking-wider">
            Choose Your Songs 🎵
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 font-semibold tracking-wide">
            Select the songs you&apos;d like in your playlist
          </p>
          <p className="text-lg text-purple-300 mt-2">
            ({selectedSongs.length} selected)
          </p>
        </div>

        {/* Songs List Container */}
        <div className="w-full max-h-96 overflow-y-auto bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-600/50 p-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            {songs.map((song, index) => (
              <div 
                key={`${song.song}-${song.author}-${index}`}
                className={`flex items-center p-4 rounded-lg transition-all duration-300 border ${
                  isSelected(song)
                    ? 'bg-purple-600/20 border-purple-500/50 shadow-lg'
                    : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 hover:border-purple-500/30'
                }`}
              >
                <input
                  type="checkbox"
                  id={`song-${index}`}
                  checked={isSelected(song)}
                  onChange={(e) => handleCheckboxChange(song, e.target.checked)}
                  className="w-5 h-5 text-purple-600 bg-gray-700 border-gray-500 rounded focus:ring-purple-500 focus:ring-2 mr-4 accent-purple-500"
                />
                <label 
                  htmlFor={`song-${index}`}
                  className="flex-1 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg text-white">{song.song}</h3>
                      <p className="text-gray-300">by {song.author}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">{song.year}</span>
                    </div>
                  </div>
                </label>
              </div>
            ))}

            {songs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400 text-lg">No songs available</p>
              </div>
            )}
          </form>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={selectedSongs.length === 0}
            className={`px-8 py-4 rounded-lg font-bold text-lg tracking-wide transition-all duration-300 transform shadow-2xl border ${
              selectedSongs.length > 0
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105 border-purple-500 cursor-pointer'
                : 'bg-gray-700 text-gray-400 border-gray-600 cursor-not-allowed'
            }`}
          >
            Create Playlist ✨ ({selectedSongs.length} songs)
          </button>
        </div>
      </div>
    </div>
  );
}