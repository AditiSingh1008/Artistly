"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">{isDark ? "🌙" : "☀️"}</span>
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out 
          ${isDark ? "bg-gray-700 justify-end" : "bg-gray-300 justify-start"}`}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out" />
      </button>
    </div>
  );
}
