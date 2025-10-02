import { useState } from "react";

export default function IntroForm({
  inputs,
  buttonText,
  onSubmit,
  relativePathText,
  onRelativePathPress,
  headline,
  signupSuccess,
}) {
  const [inputsValue, setInputsValue] = useState(() =>
    Array(inputs?.length || 0).fill("")
  );

  const updateInput = (index, value) => {
    const newValues = [...inputsValue];
    newValues[index] = value;
    setInputsValue(newValues);
  };

  const resetForm = () => {
    setInputsValue(Array(inputs?.length || 0).fill(""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputsValue);
    resetForm();
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

      <div className="flex flex-col items-center space-y-8 z-10 w-full max-w-md">
        {/* Headline Section */}
        {headline && (
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mb-4 font-mono tracking-wider">
              {headline}
            </h1>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {inputs?.map((input, i) => (
            <input
              key={i}
              type="text"
              value={inputsValue[i]}
              onChange={(e) => updateInput(i, e.target.value)}
              placeholder={input || `Input ${i + 1}`}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />
          ))}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg tracking-wide hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-purple-500"
          >
            {buttonText}
          </button>
          {relativePathText && (
            <p
              onClick={onRelativePathPress}
              className="text-center text-purple-300 hover:text-purple-200 cursor-pointer underline transition-colors duration-300"
            >
              {relativePathText}
            </p>
          )}
          {signupSuccess && (
            <p className="text-center text-green-400 font-semibold bg-green-900/20 border border-green-500/30 rounded-lg py-3 px-4 transition-all duration-300">
              Signup succeeded! Login to download playlist as you like.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
