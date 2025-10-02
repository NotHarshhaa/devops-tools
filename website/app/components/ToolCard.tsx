"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaToolbox,
} from "react-icons/fa";

interface ToolCardProps {
  name: string;
  url: string;
  description: string;
  type: string;
  category?: string;
}

export default function ToolCard({
  name,
  url,
  description,
  type,
  category,
}: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate a consistent pseudo-random number based on the tool name
  const getRandomNumber = (min: number, max: number) => {
    const seed = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return min + (seed % (max - min));
  };

  const starCount = getRandomNumber(10, 999);
  const forkCount = getRandomNumber(5, 150);

  return (
    <div
      className="card h-full flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm shadow-lg p-3 md:p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-accent dark:via-tertiary dark:to-highlight" />

      {/* Card content */}
      <div className="p-3 md:p-6 flex flex-col h-full z-10 relative">
        {/* Category badge */}
        {category && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white dark:bg-gray-800/70 border border-purple-200 dark:border-accent/30 text-purple-600 dark:text-accent/90 shadow-sm">
              <FaToolbox className="inline mr-1" size={10} /> {category}
            </span>
          </div>
        )}

        {/* Tool name with glow effect on hover */}
        <h3 className="font-bold text-base md:text-xl mb-2 md:mb-3 text-gray-800 dark:text-text-light group-hover:text-purple-600 dark:group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>

        {/* Type badge */}
        <div className="mb-4">
          <span className="tool-badge text-purple-600 dark:text-accent border-purple-200 dark:border-accent/30 bg-white dark:bg-gray-800/70 shadow-sm">
            {type}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-6 flex-grow text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Stats bar */}
        <div className="mb-4 flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4">
          <span className="flex items-center">
            <FaStar className="mr-1 text-yellow-500" /> {starCount}
          </span>
          <span className="flex items-center">
            <FaCodeBranch className="mr-1 text-blue-400" /> {forkCount}
          </span>
        </div>

        {/* CTA button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center bg-white hover:bg-purple-100 dark:bg-gray-800/50 dark:hover:bg-accent/20 border border-purple-200 dark:border-accent/30 text-purple-600 dark:text-accent rounded-lg py-2 md:py-2.5 px-3 md:px-4 text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
        >
          Explore Tool
          <FaExternalLinkAlt
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            size={10}
          />
        </a>
      </div>

      {/* Background glow effect on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-purple-50 to-white/20 dark:from-accent/5 dark:to-purple-900/5 rounded-2xl z-0 transition-opacity duration-300 ${
          isHovered ? "opacity-80" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
