"use client";

import { useState, useEffect, useMemo, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaGithub, FaSearch, FaTimes } from "react-icons/fa";
import { WrenchIcon } from "@heroicons/react/24/solid";
import ToolCard from "./components/ToolCard";
import CategoryIcon from "./components/CategoryIcon";
import { CATEGORIES, TOOL_TYPES, TOTAL_TOOLS } from "@/lib/data";

function matchesSearch(toolName: string, description: string, type: string, query: string) {
  const q = query.toLowerCase();
  return (
    toolName.toLowerCase().includes(q) ||
    description.toLowerCase().includes(q) ||
    type.toLowerCase().includes(q)
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);
  const [activeType, setActiveType] = useState<string>("all");
  const [categoriesExpanded, setCategoriesExpanded] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Keep the search in sync when navigating to /?q=... from the navbar
  // (client-side navigation does not remount this component).
  useEffect(() => {
    setSearchQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const searchRef = useRef<HTMLInputElement>(null);

  const isGlobalSearch = searchQuery.trim().length > 0;

  // "/" focuses the search box, Escape clears it
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (event.key === "/" && !typing) {
        event.preventDefault();
        searchRef.current?.focus();
      } else if (event.key === "Escape" && document.activeElement === searchRef.current) {
        setSearchQuery("");
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Tools to display: a global search across every category, or the
  // currently selected category filtered by search text and type.
  const searchResults = useMemo(() => {
    if (!isGlobalSearch) return null;
    const query = searchQuery.trim();
    return CATEGORIES.map((category) => ({
      category,
      tools: category.tools.filter(
        (tool) =>
          (activeType === "all" || tool.type === activeType) &&
          matchesSearch(tool.name, tool.description, tool.type, query),
      ),
    })).filter((group) => group.tools.length > 0);
  }, [searchQuery, activeType, isGlobalSearch]);

  const categoryTools = useMemo(() => {
    const selected = CATEGORIES.find((cat) => cat.id === activeCategory);
    if (!selected) return [];
    return selected.tools.filter(
      (tool) =>
        (activeType === "all" || tool.type === activeType) &&
        (!searchQuery.trim() ||
          matchesSearch(tool.name, tool.description, tool.type, searchQuery)),
    );
  }, [activeCategory, activeType, searchQuery]);

  const activeTools = isGlobalSearch ? [] : categoryTools;
  const searchTotal = searchResults?.reduce((sum, g) => sum + g.tools.length, 0) ?? 0;
  const activeCategoryData = CATEGORIES.find((cat) => cat.id === activeCategory);

  return (
    <div className="pt-20 relative">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 mb-8 md:mb-12 z-10 mx-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-accent dark:via-purple-600 dark:to-tertiary rounded-3xl overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-display text-white">
              DevOps Arsenal
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-white">
              A comprehensive collection of essential DevOps tools for
              development, deployment, monitoring, automation, security, and
              more. Whether you&apos;re a beginner exploring DevOps or a seasoned
              engineer looking for the best tools, this site has everything you
              need!
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link
                href="/categories"
                className="btn bg-white hover:bg-gray-100 text-purple-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center"
              >
                Explore Categories <WrenchIcon className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://github.com/NotHarshhaa/devops-tools"
                className="btn bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10 text-white/90 text-sm md:text-base">
              <span className="flex flex-col items-center">
                <strong className="text-2xl md:text-3xl font-display">{CATEGORIES.length}</strong>
                Categories
              </span>
              <span className="w-px bg-white/30" aria-hidden="true" />
              <span className="flex flex-col items-center">
                <strong className="text-2xl md:text-3xl font-display">{TOTAL_TOOLS}+</strong>
                Curated Tools
              </span>
              <span className="w-px bg-white/30" aria-hidden="true" />
              <span className="flex flex-col items-center">
                <strong className="text-2xl md:text-3xl font-display">100%</strong>
                Free to Browse
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Tools Section */}
      <section id="tools" className="py-8 md:py-16 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center text-gray-800 dark:text-text-light font-display">
            Featured DevOps Tools
          </h2>

          {/* Search and Filter */}
          <div className="mb-6 md:mb-8 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 md:gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  ref={searchRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search all tools... (press / to focus)"
                  aria-label="Search tools across all categories"
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
                    {TOOL_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type === "all" ? "All Types" : type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Categories List */}
            <div className="md:w-1/4">
              <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm p-4 md:p-5 rounded-xl mb-6 md:sticky md:top-20 border border-gray-200 dark:border-gray-800 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center">
                    <WrenchIcon className="w-5 h-5 mr-2 text-purple-600 dark:text-accent" />{" "}
                    Categories
                  </h3>
                  <button
                    className="md:hidden bg-gray-100 dark:bg-secondary/30 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-secondary/50 transition-colors"
                    onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                    aria-label={
                      categoriesExpanded
                        ? "Collapse categories"
                        : "Expand categories"
                    }
                  >
                    {categoriesExpanded ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div
                  className={`max-h-[60vh] overflow-y-auto pr-2 space-y-1 ${!categoriesExpanded && "hidden md:block"}`}
                >
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center ${
                        !isGlobalSearch && activeCategory === category.id
                          ? "bg-accent text-white [&_svg]:!text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary/50"
                      }`}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setActiveType("all");
                        setSearchQuery("");
                        setCategoriesExpanded(false);
                      }}
                    >
                      <span className="mr-2 flex-shrink-0 w-5 h-5">
                        <CategoryIcon icon={category.icon} />
                      </span>
                      {category.shortTitle}
                      <span className="ml-auto text-xs bg-white/60 dark:bg-secondary/40 rounded-full px-2 py-1 border border-gray-200 dark:border-gray-700">
                        {category.tools.length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="md:w-3/4">
              {/* Global search results across all categories */}
              {isGlobalSearch ? (
                <>
                  <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                    Found <strong>{searchTotal}</strong>{" "}
                    {searchTotal === 1 ? "tool" : "tools"} matching &quot;
                    {searchQuery.trim()}&quot; across{" "}
                    <strong>{searchResults?.length ?? 0}</strong>{" "}
                    {searchResults?.length === 1 ? "category" : "categories"}
                    {activeType !== "all" ? ` in ${activeType}` : ""}
                  </div>

                  {searchTotal === 0 ? (
                    <div className="text-center py-16 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
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
                  ) : (
                    searchResults?.map(({ category, tools }) => (
                      <div key={category.id} className="mb-10">
                        <Link
                          href={`/categories/${category.id}`}
                          className="inline-flex items-center gap-2 mb-4 text-lg font-bold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-accent transition-colors"
                        >
                          <span className="w-6 h-6 text-purple-600 dark:text-accent">
                            <CategoryIcon icon={category.icon} />
                          </span>
                          {category.title}
                          <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                            ({tools.length})
                          </span>
                        </Link>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {tools.map((tool) => (
                            <ToolCard
                              key={`${category.id}-${tool.name}`}
                              name={tool.name}
                              url={tool.url}
                              description={tool.description}
                              type={tool.type}
                              category={category.shortTitle}
                            />
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </>
              ) : (
                <>
                  {/* Active Category Details */}
                  {activeCategoryData && (
                    <div className="bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-6 rounded-xl mb-6 md:mb-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                      <div className="flex items-center mb-2">
                        <span className="mr-3 w-8 h-8 text-purple-600 dark:text-accent">
                          <CategoryIcon icon={activeCategoryData.icon} />
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {activeCategoryData.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {activeCategoryData.description}
                      </p>
                      <Link
                        href={`/categories/${activeCategoryData.id}`}
                        className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-accent hover:underline"
                      >
                        Open {activeCategoryData.shortTitle} page →
                      </Link>
                    </div>
                  )}

                  {/* Search Results Info */}
                  {searchQuery && (
                    <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                      Found {activeTools.length}{" "}
                      {activeTools.length === 1 ? "tool" : "tools"} matching &quot;
                      {searchQuery}&quot; in {activeType === "all" ? "all types" : activeType}
                    </div>
                  )}

                  {/* Empty State */}
                  {activeTools.length === 0 && (
                    <div className="text-center py-16 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
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
                    {activeTools.map((tool) => (
                      <ToolCard
                        key={tool.name}
                        name={tool.name}
                        url={tool.url}
                        description={tool.description}
                        type={tool.type}
                        category={activeCategoryData?.shortTitle}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* View All Categories Button */}
      <div className="flex justify-center mt-10 mb-16">
        <Link
          href="/categories"
          className="px-6 py-3 bg-white dark:bg-secondary/50 border border-purple-200 dark:border-accent/30 text-purple-600 dark:text-accent rounded-xl hover:bg-purple-50 dark:hover:bg-secondary transition-all duration-300 hover:shadow-lg flex items-center gap-2"
        >
          View All Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-200/80 to-pink-200/80 dark:from-accent/20 dark:to-tertiary/20 py-10 md:py-16 border border-gray-200 dark:border-gray-800 relative z-10 backdrop-blur-sm mx-2 rounded-xl mt-12 md:mt-20 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800 dark:text-white font-display">
            Join the DevOps Arsenal Community
          </h2>
          <p className="text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Whether you&apos;re a beginner exploring DevOps or a seasoned engineer,
            start using these tools to streamline your processes or contribute
            to our collection to help others improve their workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/NotHarshhaa/devops-tools"
              className="px-6 py-3 bg-purple-600 dark:bg-accent text-white rounded-xl hover:bg-purple-700 dark:hover:bg-accent-dark transition-all duration-300 hover:shadow-lg flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-64 pt-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent" />
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
