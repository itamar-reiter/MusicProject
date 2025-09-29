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
    }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <h2 className="userInput__title text-center mb-4">welcome! </h2>
        <p className="userInput__paragraph text-center mb-6">please tell me what you feel <br/> and I will fit you a 10 songs playlist </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
            type="submit"
            className="px-6 py-2 bg-white text-black border-2 border-black rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
        >
            Submit
        </button>
      </form>
    </div>
  );
}