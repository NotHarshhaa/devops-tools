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
  const [categoriesExpanded, setCategoriesExpanded] = useState<boolean>(false);

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
            type: "Free & Paid",
          },
          {
            name: "Vagrant",
            url: "https://www.vagrantup.com/",
            description:
              "Tool for building and managing virtual machine environments.",
            type: "Open Source",
          },
          {
            name: "Visual Studio Code",
            url: "https://code.visualstudio.com/",
            description:
              "Lightweight but powerful source code editor with built-in DevOps support.",
            type: "Open Source",
          },
          {
            name: "JetBrains IDEs",
            url: "https://www.jetbrains.com/",
            description:
              "Professional developer tools with advanced DevOps integrations.",
            type: "Paid",
          },
          {
            name: "WSL",
            url: "https://docs.microsoft.com/en-us/windows/wsl/",
            description:
              "Windows Subsystem for Linux - run Linux environments on Windows.",
            type: "Free",
          },
          {
            name: "Multipass",
            url: "https://multipass.run/",
            description: "Lightweight VM manager for Linux, Windows and macOS.",
            type: "Open Source",
          },
          {
            name: "Gitpod",
            url: "https://www.gitpod.io/",
            description: "Cloud development environments for teams.",
            type: "Free & Paid",
          },
          {
            name: "CodeSandbox",
            url: "https://codesandbox.io/",
            description: "Online code editor and development environment.",
            type: "Free & Paid",
          },
          {
            name: "Replit",
            url: "https://replit.com/",
            description:
              "Collaborative browser-based IDE for instant development.",
            type: "Free & Paid",
          },
          {
            name: "GitHub Codespaces",
            url: "https://github.com/features/codespaces",
            description:
              "Cloud development environment integrated with GitHub.",
            type: "Free & Paid",
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
          {
            name: "Bitbucket",
            url: "https://bitbucket.org/",
            description:
              "Git solution for professional teams with Jira integration.",
            type: "Free & Paid",
          },
          {
            name: "Git",
            url: "https://git-scm.com/",
            description:
              "Distributed version control system for tracking changes.",
            type: "Open Source",
          },
          {
            name: "Azure DevOps Repos",
            url: "https://azure.microsoft.com/en-us/services/devops/repos/",
            description:
              "Git repositories with built-in CI/CD in Azure DevOps.",
            type: "Free & Paid",
          },
          {
            name: "AWS CodeCommit",
            url: "https://aws.amazon.com/codecommit/",
            description:
              "Secure, highly scalable, managed source control service.",
            type: "Free & Paid",
          },
          {
            name: "Gitea",
            url: "https://gitea.io/",
            description: "Lightweight, self-hosted Git service written in Go.",
            type: "Open Source",
          },
          {
            name: "Gogs",
            url: "https://gogs.io/",
            description: "Painless self-hosted Git service written in Go.",
            type: "Open Source",
          },
          {
            name: "Mercurial",
            url: "https://www.mercurial-scm.org/",
            description: "Distributed SCM tool similar to Git.",
            type: "Open Source",
          },
          {
            name: "Gerrit",
            url: "https://www.gerritcodereview.com/",
            description:
              "Web-based code review and project management for Git projects.",
            type: "Open Source",
          },
          {
            name: "Sourcegraph",
            url: "https://sourcegraph.com/",
            description: "Universal code search and intelligence platform.",
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
          {
            name: "npm",
            url: "https://www.npmjs.com/",
            description: "Package manager for JavaScript and Node.js.",
            type: "Open Source",
          },
          {
            name: "Yarn",
            url: "https://yarnpkg.com/",
            description:
              "Fast, reliable, and secure dependency management for JavaScript.",
            type: "Open Source",
          },
          {
            name: "Webpack",
            url: "https://webpack.js.org/",
            description:
              "Static module bundler for modern JavaScript applications.",
            type: "Open Source",
          },
          {
            name: "Bazel",
            url: "https://bazel.build/",
            description:
              "Google's open-source build tool that supports multiple languages.",
            type: "Open Source",
          },
          {
            name: "Make",
            url: "https://www.gnu.org/software/make/",
            description:
              "Traditional build automation tool for generating executables.",
            type: "Open Source",
          },
          {
            name: "Ant",
            url: "https://ant.apache.org/",
            description: "Java-based build tool from Apache.",
            type: "Open Source",
          },
          {
            name: "MSBuild",
            url: "https://github.com/Microsoft/msbuild",
            description:
              "Microsoft's build platform for Visual Studio and .NET.",
            type: "Open Source",
          },
          {
            name: "Jenkins",
            url: "https://www.jenkins.io/",
            description:
              "Open source automation server that can be used for building projects.",
            type: "Open Source",
          },
          {
            name: "CMake",
            url: "https://cmake.org/",
            description:
              "Cross-platform build system generator for C, C++, and Fortran.",
            type: "Open Source",
          },
        ],
      },
      {
        id: "cicd",
        icon: (
          <CommandLineIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "CI/CD Pipelines",
        description:
          "CI/CD tools automate the testing and deployment pipeline, enabling frequent and reliable software delivery.",
        tools: [
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
            description: "Cloud-based CI/CD platform with Docker support.",
            type: "Free & Paid",
          },
          {
            name: "GitLab CI/CD",
            url: "https://docs.gitlab.com/ee/ci/",
            description:
              "Part of GitLab that handles builds, tests, and deployments.",
            type: "Free & Paid",
          },
          {
            name: "Travis CI",
            url: "https://travis-ci.org/",
            description: "CI service for open-source and private projects.",
            type: "Free & Paid",
          },
          {
            name: "TeamCity",
            url: "https://www.jetbrains.com/teamcity/",
            description: "JetBrains' powerful and user-friendly CI/CD server.",
            type: "Free & Paid",
          },
          {
            name: "Azure DevOps",
            url: "https://azure.microsoft.com/en-us/services/devops/",
            description:
              "Microsoft's suite of DevOps tools including CI/CD pipelines.",
            type: "Free & Paid",
          },
          {
            name: "AWS CodePipeline",
            url: "https://aws.amazon.com/codepipeline/",
            description:
              "Continuous delivery service for fast and reliable application updates.",
            type: "Paid",
          },
          {
            name: "Bamboo",
            url: "https://www.atlassian.com/software/bamboo",
            description:
              "Atlassian's CI/CD server that integrates with Jira and Bitbucket.",
            type: "Paid",
          },
          {
            name: "GoCD",
            url: "https://www.gocd.org/",
            description:
              "Open-source CI/CD server with advanced workflow modeling.",
            type: "Open Source",
          },
          {
            name: "Drone",
            url: "https://drone.io/",
            description: "Container-native CI/CD platform built on Docker.",
            type: "Open Source",
          },
          {
            name: "Concourse",
            url: "https://concourse-ci.org/",
            description:
              "Pipeline-based CI/CD system emphasizing reproducible builds.",
            type: "Open Source",
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
          "Containerization tools package applications and their dependencies for consistent deployments.",
        tools: [
          {
            name: "Docker",
            url: "https://www.docker.com/",
            description:
              "Platform for developing, shipping, and running applications in containers.",
            type: "Free & Paid",
          },
          {
            name: "Podman",
            url: "https://podman.io/",
            description:
              "Daemonless container engine for developing, managing OCI containers.",
            type: "Open Source",
          },
          {
            name: "Buildah",
            url: "https://buildah.io/",
            description: "Tool for building OCI container images.",
            type: "Open Source",
          },
          {
            name: "containerd",
            url: "https://containerd.io/",
            description:
              "Industry-standard container runtime for managing container lifecycle.",
            type: "Open Source",
          },
          {
            name: "rkt",
            url: "https://github.com/rkt/rkt",
            description:
              "Security-focused container runtime developed by CoreOS.",
            type: "Open Source",
          },
          {
            name: "Kaniko",
            url: "https://github.com/GoogleContainerTools/kaniko",
            description:
              "Tool for building container images from a Dockerfile inside a container or K8s cluster.",
            type: "Open Source",
          },
          {
            name: "CRI-O",
            url: "https://cri-o.io/",
            description: "Lightweight container runtime for Kubernetes.",
            type: "Open Source",
          },
          {
            name: "Skopeo",
            url: "https://github.com/containers/skopeo",
            description:
              "Command line utility for working with remote image registries.",
            type: "Open Source",
          },
          {
            name: "LXC",
            url: "https://linuxcontainers.org/",
            description:
              "Linux Containers that offer an environment as close as possible to a standard Linux installation.",
            type: "Open Source",
          },
          {
            name: "Buildkit",
            url: "https://github.com/moby/buildkit",
            description:
              "Toolkit for converting source code to build artifacts in an efficient, expressive and repeatable manner.",
            type: "Open Source",
          },
          {
            name: "Docker Compose",
            url: "https://docs.docker.com/compose/",
            description:
              "Tool for defining and running multi-container Docker applications.",
            type: "Open Source",
          },
          {
            name: "Packer",
            url: "https://www.packer.io/",
            description:
              "Tool for creating identical machine images for multiple platforms from a single configuration.",
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
          {
            name: "Kubernetes",
            url: "https://kubernetes.io/",
            description:
              "Open-source system for automating deployment, scaling, and management of containerized applications.",
            type: "Open Source",
          },
          {
            name: "Docker Swarm",
            url: "https://docs.docker.com/engine/swarm/",
            description: "Native clustering for Docker.",
            type: "Open Source",
          },
          {
            name: "Amazon EKS",
            url: "https://aws.amazon.com/eks/",
            description:
              "Managed Kubernetes service on AWS without installation overhead.",
            type: "Paid",
          },
          {
            name: "Google Kubernetes Engine (GKE)",
            url: "https://cloud.google.com/kubernetes-engine/",
            description:
              "Managed, production-ready Kubernetes service on Google Cloud.",
            type: "Paid",
          },
          {
            name: "Azure Kubernetes Service (AKS)",
            url: "https://azure.microsoft.com/en-us/services/kubernetes-service/",
            description:
              "Managed Kubernetes container orchestration service on Microsoft Azure.",
            type: "Paid",
          },
          {
            name: "Red Hat OpenShift",
            url: "https://www.openshift.com/",
            description:
              "Enterprise Kubernetes platform for hybrid cloud deployments.",
            type: "Paid",
          },
          {
            name: "Nomad",
            url: "https://www.nomadproject.io/",
            description:
              "Workload orchestrator for both containerized and non-containerized applications.",
            type: "Open Source",
          },
          {
            name: "Rancher",
            url: "https://rancher.com/",
            description:
              "Complete container management platform for Kubernetes.",
            type: "Open Source",
          },
          {
            name: "Mesos",
            url: "https://mesos.apache.org/",
            description:
              "Distributed systems kernel for resource management and scheduling.",
            type: "Open Source",
          },
          {
            name: "Portainer",
            url: "https://www.portainer.io/",
            description:
              "UI-based container management platform for Docker, Kubernetes, and more.",
            type: "Open Source",
          },
          {
            name: "k3s",
            url: "https://k3s.io/",
            description:
              "Lightweight Kubernetes distribution designed for IoT and Edge computing.",
            type: "Open Source",
          },
          {
            name: "kind (Kubernetes IN Docker)",
            url: "https://kind.sigs.k8s.io/",
            description:
              "Tool for running local Kubernetes clusters using Docker container nodes.",
            type: "Open Source",
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
          {
            name: "Terraform",
            url: "https://www.terraform.io/",
            description:
              "Open-source infrastructure as code software tool for building, changing, and versioning infrastructure safely and efficiently.",
            type: "Open Source",
          },
          {
            name: "AWS CloudFormation",
            url: "https://aws.amazon.com/cloudformation/",
            description:
              "Service that helps you model and set up Amazon Web Services resources with templates.",
            type: "Free & Paid",
          },
          {
            name: "Ansible",
            url: "https://www.ansible.com/",
            description:
              "Automation tool for configuration management, application deployment, and task automation.",
            type: "Open Source",
          },
          {
            name: "Azure Resource Manager",
            url: "https://azure.microsoft.com/en-us/features/resource-manager/",
            description:
              "Deployment and management service for Azure that provides a management layer to create, update, and delete resources.",
            type: "Free & Paid",
          },
          {
            name: "Google Cloud Deployment Manager",
            url: "https://cloud.google.com/deployment-manager",
            description:
              "Infrastructure deployment service that automates the creation and management of Google Cloud resources.",
            type: "Free & Paid",
          },
          {
            name: "Puppet",
            url: "https://puppet.com/",
            description:
              "Configuration management tool for defining infrastructure as code.",
            type: "Free & Paid",
          },
          {
            name: "Chef",
            url: "https://www.chef.io/",
            description:
              "Powerful automation platform that transforms infrastructure into code.",
            type: "Free & Paid",
          },
          {
            name: "Pulumi",
            url: "https://www.pulumi.com/",
            description:
              "Modern infrastructure as code tool that uses programming languages instead of domain-specific languages.",
            type: "Free & Paid",
          },
          {
            name: "Crossplane",
            url: "https://crossplane.io/",
            description:
              "Open source multicloud control plane that allows resources to be provisioned and managed using Kubernetes custom resources.",
            type: "Open Source",
          },
          {
            name: "CDK",
            url: "https://github.com/aws/aws-cdk",
            description:
              "AWS Cloud Development Kit is a software development framework for defining cloud infrastructure as code and provisioning it through AWS CloudFormation.",
            type: "Open Source",
          },
          {
            name: "Terraform CDK",
            url: "https://github.com/hashicorp/terraform-cdk",
            description:
              "Framework for defining cloud infrastructure using familiar programming languages, which then generates Terraform configuration files.",
            type: "Open Source",
          },
          {
            name: "CDKTF",
            url: "https://github.com/hashicorp/terraform-cdk",
            description:
              "Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure.",
            type: "Open Source",
          },
        ],
      },
      {
        id: "monitoring",
        icon: (
          <ChartBarIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Monitoring Tools",
        description:
          "Monitoring tools provide visibility into application and infrastructure performance, health, and resource usage.",
        tools: [
          {
            name: "Prometheus",
            url: "https://prometheus.io/",
            description:
              "Open-source monitoring and alerting toolkit designed for reliability and scalability.",
            type: "Open Source",
          },
          {
            name: "Grafana",
            url: "https://grafana.com/",
            description:
              "Open-source platform for monitoring and observability with beautiful dashboards.",
            type: "Open Source",
          },
          {
            name: "Datadog",
            url: "https://www.datadoghq.com/",
            description:
              "Cloud monitoring service for applications, servers, databases, and services.",
            type: "Free & Paid",
          },
          {
            name: "New Relic",
            url: "https://newrelic.com/",
            description:
              "Observability platform that helps you build better software.",
            type: "Free & Paid",
          },
          {
            name: "Dynatrace",
            url: "https://www.dynatrace.com/",
            description:
              "AI-powered, automated, full-stack observability platform.",
            type: "Free & Paid",
          },
          {
            name: "AppDynamics",
            url: "https://www.appdynamics.com/",
            description:
              "Application performance monitoring for modern application environments.",
            type: "Paid",
          },
          {
            name: "Zabbix",
            url: "https://www.zabbix.com/",
            description:
              "Enterprise-class open-source distributed monitoring solution.",
            type: "Open Source",
          },
          {
            name: "Nagios",
            url: "https://www.nagios.org/",
            description: "IT infrastructure monitoring and alerting system.",
            type: "Open Source",
          },
          {
            name: "Elastic APM",
            url: "https://www.elastic.co/observability/application-performance-monitoring",
            description:
              "Application performance monitoring using the Elastic Stack.",
            type: "Free & Paid",
          },
          {
            name: "SigNoz",
            url: "https://signoz.io/",
            description:
              "Open-source alternative to DataDog, New Relic with OpenTelemetry.",
            type: "Open Source",
          },
          {
            name: "Sentry",
            url: "https://sentry.io/",
            description:
              "Error tracking that helps developers monitor and fix crashes in real-time.",
            type: "Free & Paid",
          },
          {
            name: "Jaeger",
            url: "https://www.jaegertracing.io/",
            description: "Open-source, end-to-end distributed tracing.",
            type: "Open Source",
          },
          {
            name: "Elastic Stack",
            url: "https://www.elastic.co/elastic-stack/",
            description:
              "A collection of open-source products for search, analysis, and visualization of data.",
            type: "Open Source",
          },
          {
            name: "Sensu",
            url: "https://sensu.io/",
            description:
              "Multi-cloud monitoring at scale for containers and dynamic infrastructure.",
            type: "Open Source",
          },
          {
            name: "Splunk",
            url: "https://www.splunk.com/",
            description:
              "Platform for searching, monitoring, and analyzing machine-generated big data.",
            type: "Free & Paid",
          },
          {
            name: "Honeycomb",
            url: "https://www.honeycomb.io/",
            description:
              "Observability tool designed for modern software teams.",
            type: "Free & Paid",
          },
        ],
      },
      {
        id: "security",
        icon: (
          <ShieldCheckIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Security Tools",
        description:
          "Security tools help detect vulnerabilities, maintain compliance, and protect applications and infrastructure from threats.",
        tools: [
          {
            name: "SonarQube",
            url: "https://www.sonarqube.org/",
            description:
              "Continuous inspection of code quality and security for 20+ languages.",
            type: "Open Source",
          },
          {
            name: "OWASP Dependency-Check",
            url: "https://owasp.org/www-project-dependency-check/",
            description:
              "Identifies project dependencies with known vulnerabilities.",
            type: "Open Source",
          },
          {
            name: "Snyk",
            url: "https://snyk.io/",
            description:
              "Developer security platform that finds and fixes vulnerabilities in open source dependencies and containers.",
            type: "Free & Paid",
          },
          {
            name: "Aqua Security",
            url: "https://www.aquasec.com/",
            description:
              "Full lifecycle security solution for containers and cloud native applications.",
            type: "Paid",
          },
          {
            name: "Twistlock",
            url: "https://www.paloaltonetworks.com/prisma/cloud",
            description:
              "Security platform for protecting containers, cloud, and serverless environments.",
            type: "Paid",
          },
          {
            name: "Checkmarx",
            url: "https://www.checkmarx.com/",
            description:
              "Application security testing solutions with powerful static code analysis.",
            type: "Paid",
          },
          {
            name: "Veracode",
            url: "https://www.veracode.com/",
            description: "Platform for securing software through DevSecOps.",
            type: "Paid",
          },
          {
            name: "Trivy",
            url: "https://github.com/aquasecurity/trivy",
            description:
              "Simple and comprehensive vulnerability scanner for containers and other artifacts.",
            type: "Open Source",
          },
          {
            name: "Anchore Engine",
            url: "https://anchore.com/",
            description:
              "Deep analysis of container images for vulnerability scanning and policy compliance.",
            type: "Open Source",
          },
          {
            name: "Clair",
            url: "https://github.com/quay/clair",
            description:
              "Static analysis tool for vulnerabilities in container images.",
            type: "Open Source",
          },
          {
            name: "OWASP ZAP",
            url: "https://www.zaproxy.org/",
            description: "World's most popular free web security testing tool.",
            type: "Open Source",
          },
          {
            name: "Falco",
            url: "https://falco.org/",
            description:
              "Cloud-native runtime security tool for detecting threats at the container, system, and application level.",
            type: "Open Source",
          },
          {
            name: "Sysdig",
            url: "https://sysdig.com/",
            description:
              "Unified platform for container and Kubernetes security and monitoring.",
            type: "Free & Paid",
          },
        ],
      },
      {
        id: "secrets",
        icon: (
          <LockClosedIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Secret Management",
        description:
          "Secret management tools securely store, manage, and control access to tokens, passwords, certificates, and encryption keys.",
        tools: [
          {
            name: "HashiCorp Vault",
            url: "https://www.vaultproject.io/",
            description:
              "Secure, store, and tightly control access to tokens, passwords, certificates, and encryption keys.",
            type: "Open Source",
          },
          {
            name: "AWS Secrets Manager",
            url: "https://aws.amazon.com/secrets-manager/",
            description:
              "Rotate, manage, and retrieve secrets throughout their lifecycle.",
            type: "Paid",
          },
          {
            name: "Azure Key Vault",
            url: "https://azure.microsoft.com/en-us/services/key-vault/",
            description:
              "Safeguard cryptographic keys and secrets used by cloud applications and services.",
            type: "Paid",
          },
          {
            name: "Google Secret Manager",
            url: "https://cloud.google.com/secret-manager",
            description:
              "Store API keys, passwords, certificates, and other sensitive data.",
            type: "Paid",
          },
          {
            name: "Bitnami Sealed Secrets",
            url: "https://github.com/bitnami-labs/sealed-secrets",
            description:
              "A Kubernetes controller and tool for one-way encrypted Secrets.",
            type: "Open Source",
          },
          {
            name: "Doppler",
            url: "https://doppler.com/",
            description:
              "SecretOps platform for managing secrets and app config across development to production.",
            type: "Free & Paid",
          },
          {
            name: "1Password Secrets Automation",
            url: "https://1password.com/secrets/",
            description:
              "Automated secrets management for your infrastructure.",
            type: "Paid",
          },
          {
            name: "SOPS",
            url: "https://github.com/mozilla/sops",
            description: "Simple and flexible tool for managing secrets.",
            type: "Open Source",
          },
          {
            name: "GitGuardian",
            url: "https://www.gitguardian.com/",
            description:
              "Scan for API keys, passwords, certificates, and sensitive data in code.",
            type: "Free & Paid",
          },
          {
            name: "Kubernetes Secrets",
            url: "https://kubernetes.io/docs/concepts/configuration/secret/",
            description: "Native secret management object in Kubernetes.",
            type: "Open Source",
          },
        ],
      },
      {
        id: "alerting",
        icon: (
          <BellAlertIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "Alerting & Notification",
        description:
          "Alerting tools detect incidents and automatically notify the right people through various channels.",
        tools: [
          {
            name: "PagerDuty",
            url: "https://www.pagerduty.com/",
            description:
              "Digital operations management platform that keeps your services always on.",
            type: "Paid",
          },
          {
            name: "OpsGenie",
            url: "https://www.atlassian.com/software/opsgenie",
            description:
              "Modern incident management solution for operating always-on services.",
            type: "Free & Paid",
          },
          {
            name: "VictorOps",
            url: "https://victorops.com/",
            description: "Incident management platform for DevOps teams.",
            type: "Paid",
          },
          {
            name: "AlertManager",
            url: "https://prometheus.io/docs/alerting/latest/alertmanager/",
            description:
              "Handles alerts sent by client applications such as the Prometheus server.",
            type: "Open Source",
          },
          {
            name: "Slack",
            url: "https://slack.com/",
            description:
              "Collaboration hub with robust integrations for DevOps alerting.",
            type: "Free & Paid",
          },
          {
            name: "Microsoft Teams",
            url: "https://www.microsoft.com/en-us/microsoft-teams/",
            description:
              "Chat and collaboration platform with incident management capabilities.",
            type: "Free & Paid",
          },
          {
            name: "Telegram",
            url: "https://telegram.org/",
            description:
              "Cloud-based mobile and desktop messaging app with bots for alerting.",
            type: "Free",
          },
          {
            name: "Discord",
            url: "https://discord.com/",
            description:
              "Voice, video and text communication service with webhook support.",
            type: "Free",
          },
          {
            name: "Pushover",
            url: "https://pushover.net/",
            description:
              "Real-time notification service for pushing alerts to mobile devices.",
            type: "Paid",
          },
          {
            name: "xMatters",
            url: "https://www.xmatters.com/",
            description:
              "Service reliability platform for managing incident response.",
            type: "Free & Paid",
          },
          {
            name: "Grafana Alerting",
            url: "https://grafana.com/docs/grafana/latest/alerting/",
            description:
              "Alerting feature built into Grafana for defining alert rules and notification channels.",
            type: "Open Source",
          },
          {
            name: "Incident.io",
            url: "https://incident.io/",
            description:
              "Incident management software that helps teams respond to production problems.",
            type: "Free & Paid",
          },
        ],
      },
      {
        id: "devtools",
        icon: (
          <WrenchIcon className="w-full h-full text-purple-600 dark:text-accent" />
        ),
        title: "DevOps Utilities",
        description:
          "DevOps utilities provide essential functionality to streamline development, testing, and operations workflows.",
        tools: [
          {
            name: "ngrok",
            url: "https://ngrok.com/",
            description:
              "Secure tunnels to localhost for demoing web applications or APIs.",
            type: "Free & Paid",
          },
          {
            name: "Portainer",
            url: "https://www.portainer.io/",
            description: "Lightweight management UI for Docker environments.",
            type: "Open Source",
          },
          {
            name: "Postman",
            url: "https://www.postman.com/",
            description:
              "API platform for building and using APIs with collaboration features.",
            type: "Free & Paid",
          },
          {
            name: "JFrog Artifactory",
            url: "https://jfrog.com/artifactory/",
            description:
              "Universal artifact repository manager with advanced integration.",
            type: "Free & Paid",
          },
          {
            name: "Nexus Repository",
            url: "https://www.sonatype.com/products/nexus-repository",
            description: "Repository manager that supports various formats.",
            type: "Free & Paid",
          },
          {
            name: "mkcert",
            url: "https://github.com/FiloSottile/mkcert",
            description:
              "Simple zero-config tool to make locally trusted development certificates.",
            type: "Open Source",
          },
          {
            name: "Visual Studio Code",
            url: "https://code.visualstudio.com/",
            description:
              "Free, open source code editor with powerful developer tooling.",
            type: "Open Source",
          },
          {
            name: "JetBrains IDEs",
            url: "https://www.jetbrains.com/",
            description:
              "Professional developer tools with integrated development environments for various languages.",
            type: "Paid",
          },
          {
            name: "GitHub Copilot",
            url: "https://github.com/features/copilot",
            description:
              "AI pair programmer that helps you write code faster with less work.",
            type: "Paid",
          },
          {
            name: "GitPod",
            url: "https://www.gitpod.io/",
            description: "Cloud development environment platform for teams.",
            type: "Free & Paid",
          },
          {
            name: "Fig",
            url: "https://fig.io/",
            description:
              "Command-line tool that adds IDE-style autocomplete to your terminal.",
            type: "Free & Paid",
          },
          {
            name: "GitKraken",
            url: "https://www.gitkraken.com/",
            description:
              "Git GUI client for Windows, Mac & Linux with intuitive Git visualization.",
            type: "Free & Paid",
          },
          {
            name: "Warp",
            url: "https://www.warp.dev/",
            description:
              "Modern terminal with AI command search and collaborative features.",
            type: "Free & Paid",
          },
          {
            name: "CodeClimate",
            url: "https://codeclimate.com/",
            description: "Automated code review to improve your code quality.",
            type: "Free & Paid",
          },
          {
            name: "DBeaver",
            url: "https://dbeaver.io/",
            description: "Free universal database tool and SQL client.",
            type: "Open Source",
          },
          {
            name: "Docker Desktop",
            url: "https://www.docker.com/products/docker-desktop/",
            description:
              "Easy-to-install application for building and sharing containerized applications.",
            type: "Free & Paid",
          },
          {
            name: "GitHub Desktop",
            url: "https://desktop.github.com/",
            description:
              "Simple collaboration from your desktop with Git and GitHub.",
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
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center">
                        <WrenchIcon className="w-5 h-5 mr-2 text-purple-600 dark:text-accent" />{" "}
                        Categories
                      </h3>
                      <button
                        className="md:hidden bg-gray-100 dark:bg-secondary/30 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-secondary/50 transition-colors"
                        onClick={() =>
                          setCategoriesExpanded(!categoriesExpanded)
                        }
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
                            setCategoriesExpanded(false);
                          }}
                        >
                          <span className="mr-2 flex-shrink-0 w-5 h-5">
                            {category.icon}
                          </span>
                          {category.title}
                          <span className="ml-auto text-xs bg-white/60 dark:bg-secondary/40 rounded-full px-2 py-1 border border-gray-200 dark:border-gray-700">
                            {category.tools.length} tools
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
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
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
