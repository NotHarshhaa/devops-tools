"use client";

import { useState, useEffect, useMemo, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon, ArrowTopRightOnSquareIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
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

/** Three real records, shown as the hero's specimen of the index. */
const SPECIMEN = ["Kubernetes", "Terraform", "GitHub Actions", "Prometheus"]
  .map((name) => {
    for (const category of CATEGORIES) {
      const tool = category.tools.find((t) => t.name === name);
      if (tool) return { tool, category };
    }
    return null;
  })
  .filter((x): x is NonNullable<typeof x> => x !== null);

const TYPE_COUNTS = TOOL_TYPES.filter((t) => t !== "all").map((type) => ({
  type,
  count: CATEGORIES.reduce(
    (sum, c) => sum + c.tools.filter((t) => t.type === type).length,
    0,
  ),
}));

const TYPE_MEANING: Record<string, string> = {
  "Open Source": "Source available. Self-host it, read it, contribute to it.",
  "Free & Paid": "A free tier for most teams; paid plans once you scale.",
  Paid: "Commercial licence. Trials live on the vendor's page.",
  Free: "Free to use, with no paid tier at all.",
};

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
    <div>
      {/* Hero (Counter): the search over the index */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
            <div className="min-w-0 flex-1 basis-[28rem]">
              <h1 id="hero-title">
                {TOTAL_TOOLS} tools, one&nbsp;line each.
              </h1>
              <p className="lead mt-4 text-ink-2">
                From your first commit to the pager, in pipeline order.
              </p>
            </div>
            <div className="reading shrink-0">
              <div>
                <b>{CATEGORIES.length}</b>
                <small>categories</small>
              </div>
              <div>
                <b>{TOTAL_TOOLS}</b>
                <small>tools</small>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-[70rem]">
            <div className="hero-search">
              <input
                type="text"
                ref={searchRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${TOTAL_TOOLS} tools`}
                aria-label="Search tools across all categories"
                className="input"
              />
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              <kbd className="kbd-hint" aria-hidden="true">/</kbd>
            </div>
            {isGlobalSearch && (
              <p className="measured mt-3" role="status">
                <b>{searchTotal}</b> match{searchTotal === 1 ? "" : "es"} below in{" "}
                <a href="#tools" className="underline decoration-rule-2 underline-offset-4">
                  the index
                </a>
              </p>
            )}
          </div>

          {/* The index, as it stands: real records */}
          <div className="mt-10 max-w-[70rem]">
            <div className="panels">
              {SPECIMEN.map(({ tool, category }) => (
                <div key={tool.name} className="tool-row">
                  <div className="min-w-0">
                    <h3>{tool.name}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="chip">{category.shortTitle}</span>
                      <span className="chip chip--cool">{tool.type}</span>
                    </div>
                  </div>
                  <p className="min-w-0">{tool.description}</p>
                  <span className="tool-host justify-self-end whitespace-nowrap">{new URL(tool.url).hostname.replace(/^www\./, "")}</span>
                </div>
              ))}
            </div>
            <p className="measured mt-3">and {TOTAL_TOOLS - SPECIMEN.length} more in the full index</p>
          </div>
        </div>
      </section>

      {/* The directory: trail of stages + the tool rows */}
      <section id="tools" className="scroll-mt-24" aria-labelledby="index-title">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <h2 id="index-title" className="min-w-0">
              Browse by stage
            </h2>
            <div className="flex items-center gap-3">
              <label htmlFor="type-filter" className="caption whitespace-nowrap">
                Filter by
              </label>
              <div className="select">
                <select
                  id="type-filter"
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                  className="min-w-[160px]"
                  aria-label="Filter tools by type"
                >
                  {TOOL_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type === "all" ? "All types" : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
            {/* Stages trail */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="panels">
                <button
                  type="button"
                  className="trail-row lg:hidden whitespace-nowrap"
                  onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                  aria-expanded={categoriesExpanded}
                  aria-controls="stage-trail"
                >
                  <FolderOpenIcon className="h-4 w-4" aria-hidden="true" />
                  {categoriesExpanded ? "Hide the stages" : "All stages"}
                  {categoriesExpanded ? (
                    <ChevronUpIcon className="h-4 w-4 ml-auto" aria-hidden="true" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 ml-auto" aria-hidden="true" />
                  )}
                </button>
                <div
                  id="stage-trail"
                  className={`${!categoriesExpanded ? "hidden lg:block" : ""}`}
                >
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      className="trail-row"
                      aria-current={!isGlobalSearch && activeCategory === category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setActiveType("all");
                        setSearchQuery("");
                        setCategoriesExpanded(false);
                      }}
                    >
                      <span className="h-4 w-4 shrink-0">
                        <CategoryIcon icon={category.icon} className="h-4 w-4" />
                      </span>
                      {category.shortTitle}
                      <span className="count">{category.tools.length}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="min-w-0">
              {isGlobalSearch ? (
                searchTotal === 0 ? (
                  <div className="panels">
                    <div className="p-8 text-center">
                      <h3 className="text-lg font-medium text-ink">No tools found</h3>
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
                  searchResults?.map(({ category, tools }) => (
                    <div key={category.id} className="mb-10 last:mb-0">
                      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h3 className="flex items-center gap-2">
                          <span className="h-5 w-5 text-muted">
                            <CategoryIcon icon={category.icon} className="h-5 w-5" />
                          </span>
                          {category.title}
                        </h3>
                        <Link
                          href={`/categories/${category.id}`}
                          className="caption underline decoration-rule-2 underline-offset-4 hover:text-accent-text"
                        >
                          Open the page
                        </Link>
                      </div>
                      <div className="panels">
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
                )
              ) : (
                <>
                  {activeCategoryData && (
                    <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <div className="min-w-0">
                        <h3 className="flex items-center gap-3">
                          <span className="h-6 w-6 shrink-0 text-muted">
                            <CategoryIcon icon={activeCategoryData.icon} className="h-6 w-6" />
                          </span>
                          {activeCategoryData.title}
                        </h3>
                        <p className="mt-2 max-w-prose text-muted">{activeCategoryData.description}</p>
                      </div>
                      <Link
                        href={`/categories/${activeCategoryData.id}`}
                        className="caption underline decoration-rule-2 underline-offset-4 hover:text-accent-text"
                      >
                        Open the page
                      </Link>
                    </div>
                  )}

                  {searchQuery && (
                    <p className="measured mb-4" role="status">
                      <b>{activeTools.length}</b> match{activeTools.length === 1 ? "" : "es"} for
                      &quot;{searchQuery}&quot; in {activeType === "all" ? "all types" : activeType}
                    </p>
                  )}

                  {activeTools.length === 0 ? (
                    <div className="panels">
                      <div className="p-8 text-center">
                        <h3 className="text-lg font-medium text-ink">No tools found</h3>
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
                    <div className="panels">
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
                  )}
                </>
              )}
            </div>
          </div>

          <p className="mt-8">
            <Link
              href="/categories"
              className="caption underline decoration-rule-2 underline-offset-4 hover:text-accent-text"
            >
              All twelve stages on one page
            </Link>
          </p>
        </div>
      </section>

      {/* What the tools cost */}
      <section className="mt-section" aria-labelledby="cost-title">
        <div className="container">
          <h2 id="cost-title">What the tools cost</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="table-plain">
              <thead>
                <tr>
                  <th scope="col">Licence</th>
                  <th scope="col">Tools</th>
                  <th scope="col">In practice</th>
                </tr>
              </thead>
              <tbody>
                {TYPE_COUNTS.map(({ type, count }) => (
                  <tr key={type}>
                    <td className="name">{type}</td>
                    <td className="num">{count}</td>
                    <td>{TYPE_MEANING[type] ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="caption mt-4">Licences are as each vendor publishes them today.</p>
        </div>
      </section>

      {/* Close: contribute */}
      <section className="band mt-section" aria-labelledby="close-title">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-x-16 gap-y-6">
            <div className="min-w-0 max-w-prose">
              <h2 id="close-title">Add the tool we missed</h2>
              <p className="mt-4 text-ink-2">
                The arsenal is one open-source repo. A pull request keeps a line current.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/NotHarshhaa/devops-tools"
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute on GitHub
              </a>
              <a
                href="https://github.com/NotHarshhaa/devops-tools/blob/main/CONTRIBUTING.md"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the guide
                <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
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
          <div className="spinner" role="status" aria-label="Loading the index" />
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
