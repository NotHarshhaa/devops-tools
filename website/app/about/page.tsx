"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { CATEGORIES, TOTAL_TOOLS } from "@/lib/data";

/** The coverage groups the author keeps, each mapped to the stages it names
    in the index, with the tool counts read live from the data. */
const COVERAGE: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; name: string; stages: string[] }[] = [
  {
    icon: CodeBracketIcon,
    name: "Development",
    stages: ["development", "scm", "build"],
  },
  {
    icon: WrenchScrewdriverIcon,
    name: "Operations",
    stages: ["cicd", "containerization", "orchestration", "iac"],
  },
  {
    icon: ShieldCheckIcon,
    name: "Security & Compliance",
    stages: ["security", "secrets"],
  },
  {
    icon: ChartBarIcon,
    name: "Analytics & Observability",
    stages: ["monitoring", "alerting"],
  },
  {
    icon: PuzzlePieceIcon,
    name: "Across the pipeline",
    stages: ["devtools"],
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero (Banner): the commitment */}
      <section className="pt-section-nav" aria-labelledby="about-title">
        <div className="container">
          <h1 id="about-title">The research, done&nbsp;once.</h1>
          <p className="lead mt-4 max-w-2xl text-ink-2">
            Who keeps DevOps Arsenal, and why it exists.
          </p>
        </div>
      </section>

      {/* Mission beside the records it describes */}
      <section className="mt-section" aria-labelledby="mission-title">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 id="mission-title">Why it exists</h2>
            <div className="prose mt-8 max-w-prose text-lg">
              <p>
                DevOps Arsenal was created to address a common challenge in the
                modern development landscape: finding the right tools for the
                job. With hundreds of DevOps tools available, navigating this
                ecosystem can be overwhelming.
              </p>
              <p>
                The index holds {TOTAL_TOOLS} essential DevOps tools in{" "}
                {CATEGORIES.length} categories, one line each, so developers,
                operations teams, and organizations can build development
                pipelines without the research. The goal is to save you that
                time and let you focus on what matters most: building great
                software.
              </p>
            </div>
          </div>

          {/* What the index covers, as the stages it actually names */}
          <div className="min-w-0 lg:pt-2" aria-labelledby="coverage-title">
            <h2 id="coverage-title" className="sr-only">
              What the index covers
            </h2>
            <div className="panels">
              {COVERAGE.map(({ icon: Icon, name, stages }) => {
                const group = CATEGORIES.filter((c) => stages.includes(c.id));
                const count = group.reduce((sum, c) => sum + c.tools.length, 0);
                return (
                  <div key={name} className="flex items-start gap-3 px-5 py-4">
                    <Icon className="h-5 w-5 shrink-0 text-muted mt-0.5" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-md font-medium text-ink">{name}</h3>
                      <p className="mt-1 text-muted text-sm">
                        {group.map((c) => c.shortTitle).join(", ")}
                      </p>
                    </div>
                    <span className="measured shrink-0">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The author */}
      <section className="mt-section" aria-labelledby="author-title">
        <div className="container">
          <h2 id="author-title">Who keeps it</h2>
          <div className="panels mt-10">
            <div className="grid gap-8 p-6 md:grid-cols-[auto_minmax(0,1fr)_minmax(0,16rem)] md:gap-10 md:p-10">
              <img
                src="https://github.com/NotHarshhaa.png"
                alt="Harshha Reddy"
                width={96}
                height={96}
                loading="lazy"
                className="h-24 w-24 rounded-card border border-rule object-cover"
                onError={(e) => {
                  // Fallback to a local placeholder avatar if GitHub image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "/avatar-placeholder.svg";
                }}
              />
              <div className="min-w-0">
                <h3 className="text-ink">Harshha Reddy</h3>
                <div className="prose mt-3 max-w-prose">
                  <p>
                    I&apos;m a DevOps engineer and developer with experience in
                    building modern development pipelines and infrastructure. I
                    created DevOps Arsenal to share my knowledge of the DevOps
                    ecosystem and help others navigate the landscape of
                    development tools, whether you&apos;re just starting out or
                    are a seasoned professional.
                  </p>
                  <p>
                    With a background in software development and infrastructure
                    management, I&apos;ve worked with teams of all sizes to implement
                    dependable, scalable DevOps practices.
                  </p>
                </div>
              </div>
              <div className="min-w-0 md:border-l md:border-rule md:pl-8">
                <h4 className="text-sm font-medium text-ink-2">Find the author at</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="https://github.com/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink-2 hover:text-accent-text"
                    >
                      <FaGithub className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                      GitHub
                      <span className="tool-host">NotHarshhaa</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink-2 hover:text-accent-text"
                    >
                      <FaTwitter className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                      Twitter
                      <span className="tool-host">NotHarshhaa</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink-2 hover:text-accent-text"
                    >
                      <FaLinkedin className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                      LinkedIn
                      <span className="tool-host">NotHarshhaa</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Close: contribute */}
      <section className="band mt-section" aria-labelledby="contribute-title">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-x-16 gap-y-6">
            <div className="min-w-0 max-w-prose">
              <h2 id="contribute-title">Keep a line current</h2>
              <p className="mt-4 text-ink-2">
                Know a tool that belongs here, or a description that needs work? The repo takes pull requests.
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
              <Link href="/" className="btn">
                Browse the index
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
