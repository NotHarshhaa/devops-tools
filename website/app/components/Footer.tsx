"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-mast">
      <div className="container pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b border-rule">
          <p className="wordmark">DevOps Arsenal</p>
          <button type="button" onClick={scrollToTop} className="icon-btn to-top" aria-label="Back to top">
            <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 pt-6">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/categories" className="footer-link">Categories</Link>
            <Link href="/about" className="footer-link">About</Link>
            <a
              href="https://github.com/NotHarshhaa/devops-tools/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Contribute
            </a>
            <a
              href="https://github.com/NotHarshhaa/devops-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Star us on GitHub
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/NotHarshhaa/devops-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="DevOps Arsenal on GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/NotHarshhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="NotHarshhaa on Twitter"
            >
              <FaTwitter aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/NotHarshhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="NotHarshhaa on LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-10">
          <p className="caption">
            &copy; {new Date().getFullYear()} DevOps Arsenal, by Harshha Reddy. All rights reserved.
          </p>
          <p className="caption">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
