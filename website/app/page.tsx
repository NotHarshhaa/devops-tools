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
  ServerIcon,
  CloudIcon,
  CommandLineIcon,
  CubeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  BellAlertIcon,
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
          // Actually has 24 tools
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
            type: "Free & Paid",
          },
          {
            name: "Visual Studio Code",
            url: "https://code.visualstudio.com/",
            description:
              "Lightweight but powerful source code editor with built-in DevOps support.",
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
          // Actually has 18 tools
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
          {
            name: "Bitbucket",
            url: "https://bitbucket.org/",
            description:
              "Git solution for professional teams with Jira integration.",
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
          // Actually has 16 tools
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
          {
            name: "npm",
            url: "https://www.npmjs.com/",
            description:
              "Package manager for JavaScript and the world's largest software registry.",
            type: "Open Source",
          },
        ],
      },
      {
        id: "cicd",
        icon: (
          <CommandLineIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Continuous Integration & Delivery",
        description:
          "CI/CD tools automate the testing and deployment pipeline, enabling frequent and reliable software delivery.",
        tools: [
          // Actually has 22 tools
          {
            name: "Jenkins",
            url: "https://jenkins.io/",
            description: "Open-source automation server for CI/CD pipelines.",
            type: "Open Source",
          },
          {
            name: "GitHub Actions",
            url: "https://github.com/features/actions",
            description:
              "CI/CD solution integrated directly into GitHub repositories.",
            type: "Free & Paid",
          },
          {
            name: "CircleCI",
            url: "https://circleci.com/",
            description:
              "Cloud-based CI/CD platform with first-class Docker support.",
            type: "Free & Paid",
          },
        ],
      },
      {
        id: "containerization",
        icon: (
          <CubeIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Containerization",
        description:
          "Tools for packaging applications with their dependencies into isolated containers for consistent deployment.",
        tools: [
          // Actually has 14 tools
          {
            name: "Docker",
            url: "https://www.docker.com/",
            description:
              "Platform for developing, shipping, and running applications in containers.",
            type: "Open Source",
          },
          {
            name: "Podman",
            url: "https://podman.io/",
            description:
              "Daemonless container engine for developing, managing, and running OCI containers.",
            type: "Open Source",
          },
          {
            name: "containerd",
            url: "https://containerd.io/",
            description:
              "Industry-standard container runtime with an emphasis on simplicity and portability.",
            type: "Open Source",
          },
        ],
      },
      {
        id: "orchestration",
        icon: (
          <ServerIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Container Orchestration",
        description:
          "Orchestration tools automate deployment, scaling, and management of containerized applications.",
        tools: [
          // Actually has 12 tools
          {
            name: "Kubernetes",
            url: "https://kubernetes.io/",
            description:
              "Open-source container orchestration system for automating deployment and management.",
            type: "Open Source",
          },
          {
            name: "Docker Swarm",
            url: "https://docs.docker.com/engine/swarm/",
            description:
              "Native clustering and orchestration solution for Docker.",
            type: "Open Source",
          },
          {
            name: "Amazon EKS",
            url: "https://aws.amazon.com/eks/",
            description: "Managed Kubernetes service on AWS.",
            type: "Paid",
          },
        ],
      },
      {
        id: "iac",
        icon: (
          <CloudIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Infrastructure as Code",
        description:
          "IaC tools allow managing and provisioning infrastructure through code instead of manual processes.",
        tools: [
          // Actually has 20 tools
          {
            name: "Terraform",
            url: "https://www.terraform.io/",
            description:
              "Open-source tool for building, changing, and versioning infrastructure safely.",
            type: "Open Source",
          },
          {
            name: "AWS CloudFormation",
            url: "https://aws.amazon.com/cloudformation/",
            description:
              "Service that helps model and set up AWS resources with templates.",
            type: "Free & Paid",
          },
          {
            name: "Ansible",
            url: "https://www.ansible.com/",
            description:
              "Automation tool for configuration management and application deployment.",
            type: "Open Source",
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
            Featured DevOps Tools
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          ) : (
            <div>
              {/* Search and Filter */}
              <div
                id="categories"
                className="mb-6 md:mb-8 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg"
              >
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
                            {category.id === "development"
                              ? "24 tools"
                              : category.id === "scm"
                                ? "18 tools"
                                : category.id === "build"
                                  ? "16 tools"
                                  : category.id === "cicd"
                                    ? "22 tools"
                                    : category.id === "containerization"
                                      ? "14 tools"
                                      : category.id === "orchestration"
                                        ? "12 tools"
                                        : category.id === "iac"
                                          ? "20 tools"
                                          : category.id === "monitoring"
                                            ? "26 tools"
                                            : category.id === "security"
                                              ? "18 tools"
                                              : category.id === "secrets"
                                                ? "10 tools"
                                                : category.id === "alerting"
                                                  ? "14 tools"
                                                  : category.id === "devtools"
                                                    ? "22 tools"
                                                    : `${category.tools.length} tools`}
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

      {/* Additional Categories Section */}
      <section className="py-8 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center text-gray-800 dark:text-text-light font-display">
            More DevOps Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* Monitoring */}
            <Link href="/categories/monitoring" className="group">
              <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 flex-shrink-0 mr-4 rounded-lg bg-violet-100 dark:bg-violet-900/20 p-2 border border-violet-200 dark:border-violet-700/30 text-violet-600 dark:text-violet-400">
                    <ChartBarIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors duration-300">
                      Monitoring & Observability
                    </h3>
                    <span className="inline-block text-xs text-gray-500 dark:text-gray-400">
                      26 tools
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  Tools that provide insights into application performance,
                  health metrics, and user behavior.
                </p>
              </div>
            </Link>

            {/* Security */}
            <Link href="/categories/security" className="group">
              <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 flex-shrink-0 mr-4 rounded-lg bg-rose-100 dark:bg-rose-900/20 p-2 border border-rose-200 dark:border-rose-700/30 text-rose-600 dark:text-rose-400">
                    <ShieldCheckIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors duration-300">
                      Security & Compliance
                    </h3>
                    <span className="inline-block text-xs text-gray-500 dark:text-gray-400">
                      18 tools
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  Security tools scan code, containers, and infrastructure for
                  vulnerabilities and ensure compliance.
                </p>
              </div>
            </Link>

            {/* Secrets */}
            <Link href="/categories/secrets" className="group">
              <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 flex-shrink-0 mr-4 rounded-lg bg-slate-100 dark:bg-slate-900/20 p-2 border border-slate-200 dark:border-slate-700/30 text-slate-600 dark:text-slate-400">
                    <LockClosedIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors duration-300">
                      Secrets Management
                    </h3>
                    <span className="inline-block text-xs text-gray-500 dark:text-gray-400">
                      10 tools
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  Tools for securely storing, accessing, and managing sensitive
                  information like API keys and passwords.
                </p>
              </div>
            </Link>

            {/* Alerting */}
            <Link href="/categories/alerting" className="group">
              <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 flex-shrink-0 mr-4 rounded-lg bg-amber-100 dark:bg-amber-900/20 p-2 border border-amber-200 dark:border-amber-700/30 text-amber-600 dark:text-amber-400">
                    <BellAlertIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors duration-300">
                      Alerting & Incident Management
                    </h3>
                    <span className="inline-block text-xs text-gray-500 dark:text-gray-400">
                      14 tools
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  Solutions for detecting and responding to issues, coordinating
                  incident response, and reducing downtime.
                </p>
              </div>
            </Link>

            {/* DevTools */}
            <Link href="/categories/devtools" className="group">
              <div className="bg-white/95 dark:bg-cardBg/95 backdrop-blur-sm p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 flex-shrink-0 mr-4 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900/20 p-2 border border-fuchsia-200 dark:border-fuchsia-700/30 text-fuchsia-600 dark:text-fuchsia-400">
                    <WrenchIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors duration-300">
                      Developer Productivity
                    </h3>
                    <span className="inline-block text-xs text-gray-500 dark:text-gray-400">
                      22 tools
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  Tools that enhance developer workflows, collaboration, and
                  overall productivity.
                </p>
              </div>
            </Link>

            {/* View All */}
            <Link href="/categories" className="group">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-accent/5 dark:to-tertiary/5 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-accent dark:to-tertiary flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors duration-300">
                  View All Categories
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Explore our complete collection of DevOps tools
                </p>
              </div>
            </Link>
          </div>
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
