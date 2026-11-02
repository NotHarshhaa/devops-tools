"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { MagnifyingGlassIcon, SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeProvider";

const NAV_ITEMS = [
  { href: "/categories", label: "Categories", external: false },
  { href: "/about", label: "About", external: false },
  {
    href: "https://github.com/NotHarshhaa/devops-tools",
    label: "GitHub",
    external: true,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const darkMode = theme === "dark";
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleDarkMode = () => setTheme(darkMode ? "light" : "dark");

  const submitSearch = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    router.push(`/?q=${encodeURIComponent(trimmed)}#tools`);
  };

  const isActive = (href: string) =>
    href === "/categories"
      ? pathname.startsWith("/categories")
      : pathname.startsWith(href);

  return (
    <nav
      className={`nav-pill ${scrolled ? "border-rule-2" : ""}`}
      aria-label="Main"
    >
      <Link href="/" className="wordmark shrink-0" aria-label="DevOps Arsenal, home">
        DevOps Arsenal
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-links">
        {NAV_ITEMS.map((item) =>
          item.external ? (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ),
        )}

        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            submitSearch(query);
          }}
        >
          <div className="nav-search">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submitSearch(query);
                }
              }}
              placeholder="Search tools"
              aria-label="Search tools"
              className="input"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="nav-search-btn"
            >
              <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>

        <button
          type="button"
          onClick={toggleDarkMode}
          className="icon-btn"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <SunIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <MoonIcon className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile controls */}
      <div className="mobile-only ml-auto items-center gap-2">
        <button
          type="button"
          onClick={toggleDarkMode}
          className="icon-btn"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <SunIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <MoonIcon className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="icon-btn"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          )}
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-[calc(100%+8px)] panels flex-col py-2 mobile-only"
        >
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="trail-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="trail-row"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              submitSearch(query);
            }}
            className="p-3"
          >
            <div className="nav-search w-full">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submitSearch(query);
                  }
                }}
                placeholder="Search tools"
                aria-label="Search tools"
                className="input"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="nav-search-btn"
              >
                <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      )}
    </nav>
  );
}
