"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaSearch, FaTimes } from "react-icons/fa";
import ToolCard from "../../components/ToolCard";
import CategoryIcon from "../../components/CategoryIcon";
import {
  getCategory,
  getCategoryNeighbours,
  TOOL_TYPES,
} from "@/lib/data";

export default function CategoryTools({ categoryId }: { categoryId: string }) {
  const category = getCategory(categoryId)!;
  const { prev, next } = getCategoryNeighbours(categoryId);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("all");

  const categoryTypes = useMemo(
    () =>
      TOOL_TYPES.filter(
        (type) =>
          type === "all" || category.tools.some((tool) => tool.type === type),
      ),
    [category],
  );

  const filteredTools = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return category.tools.filter(
      (tool) =>
        (activeType === "all" || tool.type === activeType) &&
        (!query ||
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.type.toLowerCase().includes(query)),
    );
  }, [category, searchQuery, activeType]);

  return (
    <div className="pt-20 relative">
      {/* Hero Section */}
      <section
        className={`relative py-10 md:py-20 mb-6 md:mb-12 z-10 mx-2 ${category.color} rounded-3xl overflow-hidden`}
      >
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-3 md:mb-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm p-4 flex items-center justify-center">
                <CategoryIcon icon={category.icon} className="w-full h-full text-white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 font-display text-white">
              {category.title}
            </h1>
            <p className="text-sm md:text-lg mb-4 md:mb-6 max-w-3xl mx-auto text-white/90">
              {category.description}
            </p>
            <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
              {category.tools.length} {category.tools.length === 1 ? "tool" : "tools"}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-4 md:py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-8 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 md:gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for tools..."
                  aria-label="Search tools in this category"
                  className="w-full py-3 px-12 rounded-xl bg-white dark:bg-secondary/50 text-gray-800 dark:text-text-light border border-gray-200 dark:border-transparent focus:ring-2 focus:ring-accent focus:outline-none"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                    aria-label="Clear search"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm whitespace-nowrap text-gray-700 dark:text-gray-300">
                  Filter by:
                </span>
                <div className="relative">
                  <select
                    value={activeType}
                    onChange={(e) => setActiveType(e.target.value)}
                    className="min-w-[140px] sm:min-w-[160px] font-medium cursor-pointer text-sm md:text-base"
                    aria-label="Filter tools by type"
                  >
                    {categoryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type === "all" ? "All Types" : type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              {filteredTools.length} {filteredTools.length === 1 ? "Tool" : "Tools"} Found
            </h2>
            {searchQuery && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Showing results for &quot;{searchQuery}&quot;
                {activeType !== "all" ? ` in ${activeType}` : ""}
              </p>
            )}
          </div>

          {/* No results message */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg mb-6">
              <div className="mb-4 flex justify-center">
                <FaSearch className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">
                No tools found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveType("all");
                }}
                className="px-4 py-2 border-2 border-accent text-accent rounded-xl hover:bg-accent/20 transition-all duration-300"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                url={tool.url}
                description={tool.description}
                type={tool.type}
                category={category.shortTitle}
              />
            ))}
          </div>

          {/* Prev / Next category navigation */}
          <div className="mt-10 md:mt-14 flex flex-wrap gap-4 justify-between items-center">
            {prev ? (
              <Link
                href={`/categories/${prev.id}`}
                className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-accent transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    Previous category
                  </span>
                  {prev.shortTitle}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/categories/${next.id}`}
                className="group flex items-center gap-2 text-right text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-accent transition-colors"
              >
                <span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    Next category
                  </span>
                  {next.shortTitle}
                </span>
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <span />
            )}
          </div>

          {/* Navigation */}
          <div className="mt-6 md:mt-10 flex flex-wrap gap-4 justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-6">
            <Link
              href="/categories"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Categories
            </Link>

            <Link
              href="/"
              className="px-4 py-2 md:px-6 md:py-3 bg-white dark:bg-secondary/50 border border-purple-200 dark:border-accent/30 text-purple-600 dark:text-accent rounded-xl hover:bg-purple-50 dark:hover:bg-secondary transition-all duration-300 text-sm md:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
