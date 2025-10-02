"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaTools,
  FaExternalLinkAlt,
  FaHeart,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="pt-20 relative">
      {/* Hero Section */}
      <section className="relative py-10 md:py-24 mb-6 md:mb-12 z-10 mx-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-accent dark:via-purple-600 dark:to-tertiary rounded-3xl overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-6xl font-bold mb-2 md:mb-6 font-display text-white">
              About DevOps Arsenal
            </h1>
            <p className="text-base md:text-xl mb-4 md:mb-8 max-w-3xl mx-auto text-white">
              The comprehensive collection of DevOps tools to supercharge your
              development workflow
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-4 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-8 rounded-xl mb-6 md:mb-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 text-gray-800 dark:text-white font-display">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                DevOps Arsenal was created to address a common challenge in the
                modern development landscape: finding the right tools for the
                job. With hundreds of DevOps tools available, navigating this
                ecosystem can be overwhelming.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                We've curated a comprehensive collection of over 200 essential
                DevOps tools across various categories to help developers,
                operations teams, and organizations build robust, efficient, and
                scalable development pipelines. Our goal is to save you time in
                researching tools and enable you to focus on what matters most -
                building great software.
              </p>
            </div>

            {/* What We Cover */}
            <div className="bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-8 rounded-xl mb-6 md:mb-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 text-gray-800 dark:text-white font-display">
                What We Cover
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/80 dark:bg-secondary/40 p-3 md:p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="flex items-center text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800 dark:text-white">
                    <FaCode className="mr-2 text-accent" />
                    Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Environment tools, source code management, build tools, and
                    everything needed for efficient development workflows.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-secondary/40 p-3 md:p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="flex items-center text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800 dark:text-white">
                    <FaTools className="mr-2 text-accent" />
                    Operations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    CI/CD, deployment, orchestration, monitoring, and
                    infrastructure management tools to keep your systems running
                    smoothly.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-secondary/40 p-3 md:p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="flex items-center text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800 dark:text-white">
                    <svg
                      className="w-4 h-4 mr-2 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Security & Compliance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Container security, policy management, secrets management,
                    and tools to ensure your applications stay secure.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-secondary/40 p-3 md:p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="flex items-center text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800 dark:text-white">
                    <svg
                      className="w-4 h-4 mr-2 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    Analytics & Observability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Logging, monitoring, visualization, and analytics tools to
                    provide insights into your systems and applications.
                  </p>
                </div>
              </div>
            </div>

            {/* About the Author */}
            <div className="bg-white/90 dark:bg-cardBg/90 backdrop-blur-sm p-4 md:p-8 rounded-xl mb-6 md:mb-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 text-gray-800 dark:text-white font-display">
                About the Author
              </h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-accent shadow-lg bg-purple-100">
                  {/* Regular img tag instead of Next.js Image component */}
                  <img
                    src="https://github.com/NotHarshhaa.png"
                    alt="Harshha Reddy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a local placeholder avatar if GitHub image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "/avatar-placeholder.svg";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 dark:text-white text-center md:text-left">
                    Harshha Reddy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                    I'm a passionate DevOps engineer and developer with
                    experience in building modern development pipelines and
                    infrastructure. I created DevOps Arsenal to share my
                    knowledge of the DevOps ecosystem and help others navigate
                    the complex landscape of development tools.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    With a background in software development and infrastructure
                    management, I've worked with teams of all sizes to implement
                    efficient, scalable, and reliable DevOps practices.
                  </p>

                  <div className="flex gap-3 justify-center md:justify-start">
                    <a
                      href="https://github.com/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-secondary/50 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 text-gray-700 dark:text-gray-300"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://twitter.com/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-secondary/50 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 text-gray-700 dark:text-gray-300"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-secondary/50 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 text-gray-700 dark:text-gray-300"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribute */}
            <div className="bg-gradient-to-r from-purple-200/80 to-pink-200/80 dark:from-accent/20 dark:to-tertiary/20 p-4 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 relative backdrop-blur-sm shadow-lg">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 text-gray-800 dark:text-white font-display">
                Contribute to DevOps Arsenal
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                DevOps Arsenal is an open-source project, and we welcome
                contributions from the community. If you know of a great DevOps
                tool that's not listed, or if you'd like to improve the
                descriptions or categorizations, please consider contributing to
                our GitHub repository.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://github.com/NotHarshhaa/devops-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 dark:bg-accent text-white rounded-xl hover:bg-purple-700 dark:hover:bg-accent-dark transition-all duration-300 hover:shadow-lg flex items-center text-sm md:text-base"
                >
                  <FaGithub className="mr-2" /> Contribute on GitHub
                </a>
              </div>
            </div>

            {/* Back to Tools Button */}
            <div className="mt-6 md:mt-8 text-center">
              <Link
                href="/"
                className="px-4 py-2 md:px-6 md:py-3 bg-white dark:bg-secondary/50 border border-purple-200 dark:border-accent/30 text-purple-600 dark:text-accent rounded-xl hover:bg-purple-50 dark:hover:bg-secondary transition-all duration-300 inline-flex items-center group text-sm md:text-base"
              >
                <FaTools className="mr-2" />
                <span>Browse DevOps Tools</span>
                <FaExternalLinkAlt className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Footer Message */}
            <div className="mt-8 md:mt-12 text-center text-gray-500 dark:text-gray-400 flex items-center justify-center text-xs md:text-sm">
              <span>Built with</span> <FaHeart className="text-red-500 mx-1" />{" "}
              <span>using Next.js and Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
