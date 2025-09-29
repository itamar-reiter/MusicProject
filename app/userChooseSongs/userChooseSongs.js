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
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-2">Choose Your Songs</h2>
        <p className="text-center mb-8 text-gray-600">
          Select the songs you would like in your playlist ({selectedSongs.length} selected)
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {songs.map((song, index) => (
            <div 
              key={`${song.song}-${song.author}-${index}`}
              className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-black transition-colors"
            >
              <input
                type="checkbox"
                id={`song-${index}`}
                checked={isSelected(song)}
                onChange={(e) => handleCheckboxChange(song, e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-4"
              />
              <label 
                htmlFor={`song-${index}`}
                className="flex-1 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{song.song}</h3>
                    <p className="text-gray-600">by {song.author}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">{song.year}</span>
                  </div>
                </div>
              </label>
            </div>
          ))}

          {songs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No songs available</p>
            </div>
          )}

          <div className="flex justify-center gap-4 pt-6">
            <button
              type="submit"
              disabled={selectedSongs.length === 0}
              className={`px-8 py-3 rounded-md font-semibold transition-colors ${
                selectedSongs.length > 0
                  ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Create Playlist ({selectedSongs.length} songs)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}