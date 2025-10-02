'use client';

import { useTheme } from "./components/ThemeProvider";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function TestTheme() {
  const { theme, setTheme } = useTheme();
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-lg mx-auto">
        <div className="bg-white dark:bg-cardBg rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Theme Toggle Test Page
          </h1>

          <div className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Current theme: <span className="font-bold">{theme}</span>
            </p>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-dark transition-all duration-300"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
              Switch to {theme === 'dark' ? 'light' : 'dark'} mode
            </button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Test interaction: {count}
            </p>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              Increment
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-800 dark:text-white">
              Light background, dark text
            </div>
            <div className="bg-gray-700 dark:bg-gray-200 p-4 rounded-lg text-white dark:text-gray-800">
              Dark background, light text
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/"
              className="text-accent hover:text-accent-dark transition-colors"
            >
              Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
