"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
    <div>
      {/* Hero (Banner): the stage's own sheet */}
      <section className="pt-section-nav" aria-labelledby="category-title">
        <div className="container">
          <p className="measured">
            <b>{category.tools.length}</b> tools in this stage
          </p>
          <h1 id="category-title" className="mt-3 flex items-start gap-4">
            <span className="h-10 w-10 shrink-0 text-muted mt-2">
              <CategoryIcon icon={category.icon} className="h-10 w-10" />
            </span>
            {category.title}
          </h1>
          <p className="lead mt-4 max-w-2xl text-ink-2">{category.description}</p>
        </div>
      </section>

      {/* Tools */}
      <section className="mt-10 md:mt-14" aria-label="Tools in this category">
        <div className="container">
          {/* Search and filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="hero-search max-w-xl flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${category.tools.length} tools`}
                aria-label="Search tools in this category"
                className="input"
              />
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                  aria-label="Clear search"
                >
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="cat-type-filter" className="caption whitespace-nowrap">
                Filter by
              </label>
              <div className="select">
                <select
                  id="cat-type-filter"
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                  className="min-w-[160px]"
                  aria-label="Filter tools by type"
                >
                  {categoryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "all" ? "All types" : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="measured mt-6" role="status">
            <b>{filteredTools.length}</b> of {category.tools.length}
            {searchQuery && (
              <>
                {" "}
                matching &quot;{searchQuery}&quot;
                {activeType !== "all" ? ` in ${activeType}` : ""}
              </>
            )}
          </p>

          {/* No results message */}
          {filteredTools.length === 0 ? (
            <div className="panels mt-4">
              <div className="p-8 text-center">
                <h2 className="text-lg font-medium text-ink">No tools found</h2>
                <p className="mt-2 text-muted">Try adjusting your search or filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveType("all");
                  }}
                  className="btn mt-6"
                >
                  Reset filters
                </button>
              </div>
            </div>
          ) : (
            <div className="panels mt-4">
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
          )}

          {/* Prev / Next category navigation */}
          <nav
            aria-label="Category pages"
            className="mt-12 flex flex-wrap gap-6 justify-between items-center border-t border-rule pt-6"
          >
            {prev ? (
              <Link
                href={`/categories/${prev.id}`}
                className="group flex items-center gap-2 text-ink-2 hover:text-ink transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                <span>
                  <span className="caption block">Previous stage</span>
                  {prev.shortTitle}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/categories/${next.id}`}
                className="group flex items-center gap-2 text-right text-ink-2 hover:text-ink transition-colors"
              >
                <span>
                  <span className="caption block">Next stage</span>
                  {next.shortTitle}
                </span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : (
              <span />
            )}
          </nav>

          {/* Navigation */}
          <div className="mt-6 flex flex-wrap gap-4 justify-between items-center">
            <Link
              href="/categories"
              className="caption underline decoration-rule-2 underline-offset-4 hover:text-accent-text"
            >
              All stages
            </Link>
            <Link href="/" className="btn">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
