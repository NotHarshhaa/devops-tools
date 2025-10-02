"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaSearch, FaTimes } from "react-icons/fa";
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  CogIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import ToolCard from "./components/ToolCard";

interface ToolCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: Tool[];
}

interface Tool {
  name: string;
  url: string;
  description: string;
  type: string;
}

export default function Home() {
  const [categories, setCategories] = useState<ToolCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTools, setActiveTools] = useState<Tool[]>([]);
  const [activeType, setActiveType] = useState<string>("all");

  const searchRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<ToolCategory[]>(
    [],
  );
  const [toolTypes, setToolTypes] = useState<string[]>([]);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulating data that would come from the README.md parsing
    const data: ToolCategory[] = [
      {
        id: "development",
        icon: (
          <RocketLaunchIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Development Environment Tools",
        description:
          "Development environment tools streamline the setup of consistent software configurations, ensuring fast recovery and higher developer productivity.",
        tools: [
          {
            name: "VirtualBox",
            url: "https://www.virtualbox.org/",
            description:
              "Enterprise-grade virtualization for x86 and AMD64/Intel64 systems.",
            type: "Open Source",
          },
          {
            name: "QEMU",
            url: "https://www.qemu.org/",
            description: "Open-source machine emulator and virtualizer.",
            type: "Open Source",
          },
          {
            name: "Docker Desktop",
            url: "https://www.docker.com/products/docker-desktop",
            description: "Simplifies containerized application development.",
            type: "Open Source",
          },
        ],
      },
      {
        id: "scm",
        icon: (
          <DocumentTextIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Source Code Management (SCM)",
        description:
          "Version control tools keep track of every change, making collaboration and automation seamless in DevOps.",
        tools: [
          {
            name: "GitHub",
            url: "https://github.com/",
            description:
              "The most popular Git-based repository hosting platform.",
            type: "Free & Paid",
          },
          {
            name: "GitLab",
            url: "https://about.gitlab.com/",
            description: "Complete DevOps platform with CI/CD integration.",
            type: "Free & Paid",
          },
        ],
      },
      {
        id: "build",
        icon: (
          <CogIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Build Tools",
        description:
          "Build tools automate software compilation and generate deployable artifacts efficiently.",
        tools: [
          {
            name: "Maven",
            url: "https://maven.apache.org/",
            description:
              "A comprehensive project management and build tool for Java.",
            type: "Open Source",
          },
          {
            name: "Gradle",
            url: "https://gradle.org/",
            description:
              "High-performance build automation for Java, Kotlin, Groovy, and more.",
            type: "Free & Paid",
          },
        ],
      },
    ];

    setCategories(data);
    setActiveCategory(data[0].id);
    setFilteredCategories(data);

    // Get unique tool types
    const types = new Set<string>();
    data.forEach((category) => {
      category.tools.forEach((tool) => {
        types.add(tool.type);
      });
    });
    setToolTypes(["all", ...Array.from(types)].sort());

    // Set initial active tools
    if (data.length > 0) {
      setActiveTools(data[0].tools);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    // Filter tools based on search query and active category
    const selectedCategory = categories.find(
      (cat) => cat.id === activeCategory,
    );
    if (!selectedCategory) return;

    let filtered = [...selectedCategory.tools];

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.type.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Apply type filter
    if (activeType !== "all") {
      filtered = filtered.filter((tool) => tool.type === activeType);
    }

    setActiveTools(filtered);
  }, [searchQuery, categories, activeCategory, activeType]);

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
              more. Whether you're a beginner exploring DevOps or a seasoned
              engineer looking for the best tools, this site has everything you
              need!
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href="#categories"
                className="btn bg-white hover:bg-gray-100 text-purple-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center"
              >
                Explore Tools <WrenchIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://github.com/NotHarshhaa/devops-tools"
                className="btn bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Tools Section */}
      <section
        id="categories"
        ref={categoryRef}
        className="py-8 md:py-16 relative z-10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center text-gray-800 dark:text-text-light font-display">
            Browse DevOps Tool Categories
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          ) : (
            <div>
              {/* Search and Filter */}
              <div className="mb-6 md:mb-8 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                <div className="flex flex-col md:flex-row gap-4 md:gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      ref={searchRef}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for tools..."
                      className="w-full py-3 px-12 rounded-xl bg-white dark:bg-secondary/50 text-gray-800 dark:text-text-light border border-gray-200 dark:border-transparent focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
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
                        {toolTypes.map((type) => (
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
                  <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm p-4 md:p-5 rounded-xl mb-6 sticky top-20 border border-gray-200 dark:border-gray-800 shadow-lg">
                    <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                      <WrenchIcon className="w-5 h-5 mr-2 text-purple-600 dark:text-accent" />{" "}
                      Categories
                    </h3>
                    <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-1">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center ${
                            activeCategory === category.id
                              ? "bg-accent text-white [&_svg]:!text-white"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary/50"
                          }`}
                          onClick={() => {
                            setActiveCategory(category.id);
                            setActiveType("all");
                            setSearchQuery("");
                          }}
                        >
                          <span className="mr-2 flex-shrink-0 w-5 h-5">
                            {category.icon}
                          </span>
                          {category.title}
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
                  {/* Active Category Details */}
                  {categories.find((cat) => cat.id === activeCategory) && (
                    <div className="bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-6 rounded-xl mb-6 md:mb-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                      <div className="flex items-center mb-2">
                        <span className="mr-3 w-8 h-8 text-purple-600 dark:text-accent">
                          {
                            categories.find((cat) => cat.id === activeCategory)
                              ?.icon
                          }
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {
                            categories.find((cat) => cat.id === activeCategory)
                              ?.title
                          }
                        </h3>
                      </div>
                      <p className="text-gray-400 mb-4">
                        {
                          categories.find((cat) => cat.id === activeCategory)
                            ?.description
                        }
                      </p>
                    </div>
                  )}

                  {/* Search Results Info */}
                  {searchQuery && (
                    <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                      Found {activeTools.length} tools matching "{searchQuery}"
                      in {activeType === "all" ? "all types" : activeType}
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
                    {activeTools.map((tool, index) => (
                      <div key={index}>
                        <ToolCard
                          name={tool.name}
                          url={tool.url}
                          description={tool.description}
                          type={tool.type}
                          category={
                            categories.find((cat) => cat.id === activeCategory)
                              ?.title
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-200/80 to-pink-200/80 dark:from-accent/20 dark:to-tertiary/20 py-10 md:py-16 border border-gray-200 dark:border-gray-800 relative z-10 backdrop-blur-sm mx-2 rounded-xl mt-12 md:mt-20 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800 dark:text-white font-display">
            Join the DevOps Arsenal Community
          </h2>
          <p className="text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Whether you're a beginner exploring DevOps or a seasoned engineer,
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
