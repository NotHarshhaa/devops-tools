"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaSearch } from "react-icons/fa";
import CategoryIcon from "../components/CategoryIcon";
import { CATEGORIES, TOTAL_TOOLS } from "@/lib/data";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return CATEGORIES;
    return CATEGORIES.filter(
      (category) =>
        category.title.toLowerCase().includes(query) ||
        category.shortTitle.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query) ||
        category.tools.some((tool) =>
          tool.name.toLowerCase().includes(query),
        ),
    );
  }, [searchQuery]);

  return (
    <div className="pt-20 relative">
      {/* Hero Section */}
      <section className="relative py-10 md:py-24 mb-6 md:mb-12 z-10 mx-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-accent dark:via-purple-600 dark:to-tertiary rounded-3xl overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-6xl font-bold mb-2 md:mb-6 font-display text-white">
              DevOps Tool Categories
            </h1>
            <p className="text-base md:text-xl mb-4 md:mb-8 max-w-3xl mx-auto text-white">
              Explore {TOTAL_TOOLS}+ curated DevOps tools organized by
              categories for every stage of your development lifecycle.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search categories or tools..."
                aria-label="Search categories"
                className="w-full py-3 px-12 rounded-xl bg-white/90 dark:bg-secondary/50 text-gray-800 dark:text-text-light border border-gray-200/50 dark:border-transparent focus:ring-2 focus:ring-accent focus:outline-none shadow-lg"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-4 md:py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Categories Count */}
            <div className="mb-8 text-center">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-white font-display">
                {filteredCategories.length}{" "}
                {filteredCategories.length === 1 ? "Category" : "Categories"}{" "}
                Available
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                Click on any category to explore its tools
              </p>
            </div>

            {/* No Results Message */}
            {filteredCategories.length === 0 && (
              <div className="text-center py-16 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                <div className="mb-4 flex justify-center">
                  <FaSearch className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">
                  No categories found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search query
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 border-2 border-accent text-accent rounded-xl hover:bg-accent/20 transition-all duration-300"
                >
                  Clear search
                </button>
              </div>
            )}

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredCategories.map((category) => (
                <Link
                  href={`/categories/${category.id}`}
                  key={category.id}
                  className="group"
                >
                  <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg h-full transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-accent/10 group-focus:ring-2 group-focus:ring-accent">
                    {/* Colored Header */}
                    <div className={`h-2 ${category.color}`}></div>

                    <div className="p-5 md:p-6">
                      <div className="flex items-start mb-4">
                        {/* Icon */}
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 mr-4 rounded-lg bg-purple-100 dark:bg-accent/10 p-2 md:p-3 border border-purple-200 dark:border-accent/30">
                          <CategoryIcon icon={category.icon} />
                        </div>

                        {/* Title and Count */}
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors duration-300">
                            {category.title}
                          </h3>
                          <div className="inline-block px-2 py-1 bg-purple-100 dark:bg-accent/20 text-purple-700 dark:text-accent text-xs rounded-full mt-1">
                            {category.tools.length}{" "}
                            {category.tools.length === 1 ? "tool" : "tools"}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {category.description}
                      </p>

                      {/* Explore Button */}
                      <div className="flex justify-end">
                        <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-accent group-hover:translate-x-1 transition-transform duration-300">
                          Explore tools{" "}
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Back Button */}
            <div className="mt-10 md:mt-16 text-center">
              <Link
                href="/"
                className="px-6 py-3 bg-white dark:bg-secondary/50 border border-purple-200 dark:border-accent/30 text-purple-600 dark:text-accent rounded-xl hover:bg-purple-50 dark:hover:bg-secondary transition-all duration-300 inline-flex items-center"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
