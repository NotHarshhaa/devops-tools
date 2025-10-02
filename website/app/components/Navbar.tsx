"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaSearch,
  FaBars,
  FaTimes,
  FaTools,
  FaRocket,
  FaCog,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import * as React from "react";
import { useTheme } from "./ThemeProvider";

const motion = {
  nav: "nav",
  div: "div",
  button: "button",
};

const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const darkMode = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setTheme(darkMode ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-primary/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 rounded-lg bg-gradient-to-br from-accent to-tertiary flex items-center justify-center shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                <FaRocket className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold font-display text-gray-800 dark:text-text-light group-hover:opacity-80 transition-opacity">
                  DevOps{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-accent dark:via-purple-500 dark:to-tertiary">
                    Arsenal
                  </span>
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1 hidden sm:block">
                  Essential tools for DevOps beginners & experts
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#categories"
              className="nav-link text-gray-700 dark:text-text-light"
            >
              <span className="flex items-center">
                <FaTools className="mr-1" /> Categories
              </span>
            </Link>
            <Link
              href="/about"
              className="nav-link text-gray-700 dark:text-text-light"
            >
              <span className="flex items-center">
                <FaCog className="mr-1" /> About
              </span>
            </Link>
            <Link
              href="https://github.com/NotHarshhaa/devops-tools"
              className="nav-link text-gray-700 dark:text-text-light"
            >
              <span className="flex items-center">
                <FaGithub className="mr-1" /> GitHub
              </span>
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="bg-white/90 dark:bg-secondary/50 text-gray-800 dark:text-text-light px-3 md:px-4 py-1.5 md:py-2 rounded-full pl-8 md:pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-accent transition-all w-32 md:w-40 focus:w-44 md:focus:w-56 duration-300 border border-gray-200 dark:border-gray-700/50 shadow-sm backdrop-blur-sm text-sm"
              />
              <FaSearch className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xs md:text-sm" />
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-1.5 md:p-2 rounded-full bg-white/80 dark:bg-secondary/30 text-gray-700 dark:text-text-light hover:bg-white dark:hover:bg-secondary/60 transition-colors shadow-sm border border-gray-200 dark:border-gray-700/30 backdrop-blur-sm"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-300" />
              ) : (
                <FaMoon className="text-blue-300" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 md:p-2 rounded-full bg-white/80 dark:bg-secondary/30 text-gray-700 dark:text-text-light hover:bg-white dark:hover:bg-secondary/60 transition-colors shadow-sm border border-gray-200 dark:border-gray-700/30 backdrop-blur-sm"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-300" />
              ) : (
                <FaMoon className="text-blue-300" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-text-light p-1.5 md:p-2 bg-white/80 dark:bg-secondary/40 rounded-lg focus:outline-none hover:bg-white dark:hover:bg-secondary/60 transition-colors hover:scale-105 active:scale-95 shadow-sm border border-gray-200 dark:border-gray-700/30 backdrop-blur-sm"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 space-y-2 glass-card p-3 rounded-xl shadow-lg">
            <Link
              href="#categories"
              className="flex items-center text-gray-700 dark:text-text-light hover:bg-gray-100 dark:hover:bg-secondary/40 p-2.5 rounded-lg transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTools className="mr-2" /> Categories
            </Link>
            <Link
              href="/about"
              className="flex items-center text-gray-700 dark:text-text-light hover:bg-gray-100 dark:hover:bg-secondary/40 p-2.5 rounded-lg transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaCog className="mr-2" /> About
            </Link>
            <Link
              href="https://github.com/NotHarshhaa/devops-tools"
              className="flex items-center text-gray-700 dark:text-text-light hover:bg-gray-100 dark:hover:bg-secondary/40 p-2.5 rounded-lg transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search tools..."
                className="bg-white dark:bg-secondary/30 border border-gray-200 dark:border-gray-700/50 text-gray-800 dark:text-text-light px-3 py-2 rounded-lg pl-8 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-accent focus:bg-white dark:focus:bg-secondary/50 transition-all shadow-sm text-sm"
              />
              <FaSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xs" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
