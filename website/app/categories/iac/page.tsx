"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CloudIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { FaGithub, FaSearch, FaTimes } from "react-icons/fa";
import ToolCard from "../../components/ToolCard";

interface Tool {
  name: string;
  url: string;
  description: string;
  type: string;
}

export default function IaCCategoryPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [tools, setTools] = useState<Tool[]>([]);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [activeType, setActiveType] = useState<string>("all");
  const [toolTypes, setToolTypes] = useState<string[]>([]);

  useEffect(() => {
    // Simulating data fetching
    const data: Tool[] = [
      {
        name: "Terraform",
        url: "https://www.terraform.io/",
        description: "Open-source infrastructure as code software tool for building, changing, and versioning infrastructure safely and efficiently.",
        type: "Open Source",
      },
      {
        name: "AWS CloudFormation",
        url: "https://aws.amazon.com/cloudformation/",
        description: "Service that helps you model and set up Amazon Web Services resources with templates.",
        type: "Free & Paid",
      },
      {
        name: "Azure Resource Manager",
        url: "https://azure.microsoft.com/en-us/features/resource-manager/",
        description: "Deployment and management service for Azure that provides a management layer to create, update, and delete resources.",
        type: "Free & Paid",
      },
      {
        name: "Google Cloud Deployment Manager",
        url: "https://cloud.google.com/deployment-manager",
        description: "Infrastructure deployment service that automates the creation and management of Google Cloud resources.",
        type: "Free & Paid",
      },
      {
        name: "Ansible",
        url: "https://www.ansible.com/",
        description: "Automation tool for configuration management, application deployment, and task automation.",
        type: "Open Source",
      },
      {
        name: "Puppet",
        url: "https://puppet.com/",
        description: "Configuration management tool for defining infrastructure as code.",
        type: "Free & Paid",
      },
      {
        name: "Chef",
        url: "https://www.chef.io/",
        description: "Powerful automation platform that transforms infrastructure into code.",
        type: "Free & Paid",
      },
      {
        name: "Pulumi",
        url: "https://www.pulumi.com/",
        description: "Modern infrastructure as code tool that uses programming languages instead of domain-specific languages.",
        type: "Free & Paid",
      },
      {
        name: "Crossplane",
        url: "https://crossplane.io/",
        description: "Open source multicloud control plane that allows resources to be provisioned and managed using Kubernetes custom resources.",
        type: "Open Source",
      },
      {
        name: "CDK",
        url: "https://github.com/aws/aws-cdk",
        description: "AWS Cloud Development Kit is a software development framework for defining cloud infrastructure as code and provisioning it through AWS CloudFormation.",
        type: "Open Source",
      },
      {
        name: "Terraform CDK",
        url: "https://github.com/hashicorp/terraform-cdk",
        description: "Framework for defining cloud infrastructure using familiar programming languages, which then generates Terraform configuration files.",
        type: "Open Source",
      },
      {
        name: "CDKTF",
        url: "https://github.com/hashicorp/terraform-cdk",
        description: "Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure.",
        type: "Open Source",
      },
    ];

    setTools(data);
    setFilteredTools(data);

    // Get unique tool types
    const types = new Set<string>();
    data.forEach((tool) => {
      types.add(tool.type);
    });
    setToolTypes(["all", ...Array.from(types)].sort());

    setLoading(false);
  }, []);

  // Filter tools based on search and type
  useEffect(() => {
    let filtered = [...tools];

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply type filter
    if (activeType !== "all") {
      filtered = filtered.filter((tool) => tool.type === activeType);
    }

    setFilteredTools(filtered);
  }, [searchQuery, activeType, tools]);

  return (
    <div className="pt-20 relative">
      {/* Hero Section */}
      <section className="relative py-10 md:py-20 mb-6 md:mb-12 z-10 mx-2 bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700 rounded-3xl overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-3 md:mb-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm p-4 flex items-center justify-center">
                <CloudIcon className="w-full h-full text-white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 font-display text-white">
              Infrastructure as Code
            </h1>
            <p className="text-sm md:text-lg mb-4 md:mb-6 max-w-3xl mx-auto text-white/90">
              IaC tools allow managing and provisioning infrastructure through code instead of manual processes.
            </p>
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

          {/* Results count */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              {filteredTools.length} Tools Found
            </h2>
            {searchQuery && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Showing results for "{searchQuery}"
                {activeType !== "all" ? ` in ${activeType}` : ""}
              </p>
            )}
          </div>

          {/* No results message */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16 bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg mb-6">
              <div className="mb-4 flex justify-center">
                <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" />
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
            {filteredTools.map((tool, index) => (
              <div key={index}>
                <ToolCard
                  name={tool.name}
                  url={tool.url}
                  description={tool.description}
                  type={tool.type}
                  category="Infrastructure as Code"
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-10 md:mt-14 flex flex-wrap gap-4 justify-between items-center">
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
