"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
    <div>
      {/* Hero (Banner): the whole index on one sheet */}
      <section className="pt-section-nav" aria-labelledby="categories-title">
        <div className="container">
          <h1 id="categories-title">
            The {CATEGORIES.length} stages
          </h1>
          <p className="lead mt-4 max-w-2xl text-ink-2">
            Every one of the {TOTAL_TOOLS} tools, sorted by where it fits the pipeline.
          </p>

          {/* Search */}
          <div className="hero-search mt-10 max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${CATEGORIES.length} stages or ${TOTAL_TOOLS} tools`}
              aria-label="Search categories"
              className="input"
            />
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Categories index */}
      <section className="mt-10 md:mt-14" aria-label="Category list">
        <div className="container">
          <p className="measured" role="status">
            <b>{filteredCategories.length}</b> of {CATEGORIES.length} stages
          </p>

          {/* No Results Message */}
          {filteredCategories.length === 0 && (
            <div className="panels mt-4">
              <div className="p-8 text-center">
                <h2 className="text-lg font-medium text-ink">No stages found</h2>
                <p className="mt-2 text-muted">Try adjusting your search.</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="btn mt-6"
                >
                  Clear search
                </button>
              </div>
            </div>
          )}

          {/* Categories as index rows */}
          <div className="panels mt-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="cat-row">
                <span className="cat-icon">
                  <CategoryIcon icon={category.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="cat-title">
                    <Link href={`/categories/${category.id}`} className="cat-link">
                      {category.title}
                    </Link>
                  </h2>
                  <p className="cat-desc">{category.description}</p>
                </div>
                <span className="count">{category.tools.length}</span>
                <Link
                  href={`/categories/${category.id}`}
                  className="btn shrink-0"
                  aria-label={`Open the ${category.title} category`}
                >
                  Open
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
