"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHeart,
  FaRocket,
  FaTools,
  FaStar,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-white/80 dark:bg-gradient-to-b dark:from-primary/90 dark:to-black/90 text-gray-800 dark:text-text-light pt-12 md:pt-20 pb-8 md:pb-12 mt-10 md:mt-16 overflow-hidden backdrop-blur-sm mx-2 rounded-t-3xl shadow-lg border-t border-gray-200 dark:border-gray-800">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 dark:bg-accent/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 dark:bg-highlight/20 blur-3xl"></div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 md:top-10 right-6 md:right-10 bg-white dark:bg-accent hover:bg-gray-100 dark:hover:bg-accent-dark p-2 md:p-3 rounded-full shadow-lg dark:shadow-neon transition-all duration-300 hover:-translate-y-1 active:scale-90 border border-gray-200 dark:border-transparent"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-purple-600 dark:text-white" />
      </button>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 pb-6 md:pb-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 mr-3 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 dark:from-accent dark:via-tertiary dark:to-highlight flex items-center justify-center shadow-lg">
                <FaRocket className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 dark:text-white">
                  DevOps <span className="gradient-text">Arsenal</span>
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  The Ultimate DevOps Toolkit
                </p>
              </div>
            </div>
            <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              A comprehensive collection of essential DevOps tools for
              development, deployment, monitoring, automation, security, and
              more. Curated to help teams build better software faster.
            </p>
            <div className="flex items-center text-sm bg-white/95 dark:bg-cardBg/80 p-3 rounded-xl border border-gray-200 dark:border-accent/20 shadow-sm backdrop-blur-sm">
              <FaHeart className="text-pink-500 dark:text-tertiary mr-2" />
              <span>Made with passion for the DevOps community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-5 font-display flex items-center text-gray-800 dark:text-white">
              <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-accent/20 flex items-center justify-center mr-2">
                <FaTools className="text-purple-600 dark:text-accent" />
              </span>
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-accent transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>{" "}
                  Home
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="#categories"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-accent transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>{" "}
                  Categories
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-accent transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>{" "}
                  About
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <a
                  href="https://github.com/NotHarshhaa/devops-tools/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-accent transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>{" "}
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-5 font-display flex items-center text-gray-800 dark:text-white">
              <span className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-highlight/20 flex items-center justify-center mr-2">
                <FaStar className="text-pink-600 dark:text-highlight" />
              </span>
              Connect
            </h4>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <a
                href="https://github.com/NotHarshhaa/devops-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/95 dark:bg-cardBg/60 hover:bg-purple-50 dark:hover:bg-accent/20 p-3 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 group hover:-translate-y-1 hover:scale-105 shadow-sm backdrop-blur-sm"
              >
                <FaGithub
                  size={24}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-accent transition-colors"
                />
              </a>
              <a
                href="https://twitter.com/NotHarshhaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/95 dark:bg-cardBg/60 hover:bg-purple-50 dark:hover:bg-blue-500/20 p-3 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 group hover:-translate-y-1 hover:scale-105 shadow-sm backdrop-blur-sm"
              >
                <FaTwitter
                  size={24}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com/in/NotHarshhaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white/95 dark:bg-cardBg/60 hover:bg-purple-50 dark:hover:bg-blue-800/20 p-3 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 group hover:-translate-y-1 hover:scale-105 shadow-sm backdrop-blur-sm"
              >
                <FaLinkedin
                  size={24}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-blue-600 transition-colors"
                />
              </a>
            </div>

            <div className="mt-6 bg-gradient-to-r from-white/90 to-purple-50/90 dark:from-cardBg dark:to-cardBgHover p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition-transform duration-300 shadow-sm backdrop-blur-sm">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join our community and stay updated with the latest DevOps tools
                and practices.
              </p>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-200 dark:via-gray-700 to-transparent my-6 md:my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-500">
            &copy; {new Date().getFullYear()} DevOps Arsenal. All rights
            reserved.
          </p>
          <a
            href="https://github.com/NotHarshhaa/devops-tools"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 md:mt-0 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/95 dark:bg-cardBg/60 border border-gray-200 dark:border-accent/20 hover:border-purple-300 dark:hover:border-accent/50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm backdrop-blur-sm text-xs md:text-sm"
          >
            <FaGithub className="mr-2 text-purple-600 dark:text-accent" /> Star
            us on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
