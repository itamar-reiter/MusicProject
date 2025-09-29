"use client";

export default function Closure({ onRestart }) {

  const handleRestart = () => {
    if (onRestart) {
      onRestart();
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Goodbye Message */}
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          All Done! 🎉
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Your playlist has been downloaded successfully.<br/>
          Thank you for using our service!
        </p>

        {/* Restart Button */}
        <button
          onClick={handleRestart}
          className="px-8 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-colors"
        >
          Create Another Playlist
        </button>
      </div>
    </div>
  );
}