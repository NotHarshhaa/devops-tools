export interface Tool {
  name: string;
  url: string;
  description: string;
  type: string;
}

export type CategoryIconKey =
  | "rocket"
  | "document"
  | "cog"
  | "wrench"
  | "server"
  | "cloud"
  | "command"
  | "cube"
  | "chart"
  | "shield"
  | "lock"
  | "bell";

export interface ToolCategory {
  id: string;
  title: string;
  /** Shorter label used in badges and compact navigation */
  shortTitle: string;
  description: string;
  /** Tailwind gradient classes for the category card accent stripe */
  color: string;
  icon: CategoryIconKey;
  tools: Tool[];
}

export const CATEGORIES: ToolCategory[] = [
  {
    id: "development",
    icon: "rocket",
    title: "Development Environment Tools",
    shortTitle: "Development Environment",
    description:
      "Development environment tools streamline the setup of consistent software configurations, ensuring fast recovery and higher developer productivity.",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
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
        url: "https://www.docker.com/products/docker-desktop/",
        description: "Simplifies containerized application development.",
        type: "Free & Paid",
      },
      {
        name: "Vagrant",
        url: "https://www.vagrantup.com/",
        description:
          "Tool for building and managing reproducible virtual machine environments.",
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
        url: "https://learn.microsoft.com/en-us/windows/wsl/",
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
    icon: "document",
    title: "Source Code Management (SCM)",
    shortTitle: "Source Code Management",
    description:
      "Version control tools keep track of every change, making collaboration and automation seamless in DevOps.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
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
        url: "https://azure.microsoft.com/en-us/products/devops/repos/",
        description:
          "Git repositories with built-in CI/CD in Azure DevOps.",
        type: "Free & Paid",
      },
      {
        name: "AWS CodeCommit",
        url: "https://aws.amazon.com/codecommit/",
        description:
          "Fully managed source control service (closed to new customers since 2024, still supported for existing ones).",
        type: "Paid",
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
    icon: "cog",
    title: "Build Tools",
    shortTitle: "Build Tools",
    description:
      "Build tools automate software compilation and generate deployable artifacts efficiently.",
    color: "bg-gradient-to-br from-green-500 to-teal-600",
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
        type: "Open Source",
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
        url: "https://github.com/dotnet/msbuild",
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
    icon: "command",
    title: "Continuous Integration & Delivery",
    shortTitle: "CI/CD",
    description:
      "CI/CD tools automate the testing and deployment pipeline, enabling frequent and reliable software delivery.",
    color: "bg-gradient-to-br from-red-500 to-pink-600",
    tools: [
      {
        name: "Jenkins",
        url: "https://www.jenkins.io/",
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
        description: "Cloud-based CI/CD platform with first-class Docker support.",
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
        url: "https://www.travis-ci.com/",
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
        url: "https://azure.microsoft.com/en-us/products/devops/",
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
        url: "https://www.drone.io/",
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
    icon: "cube",
    title: "Containerization",
    shortTitle: "Containerization",
    description:
      "Containerization tools package applications and their dependencies for consistent deployments.",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
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
        name: "nerdctl",
        url: "https://github.com/containerd/nerdctl",
        description:
          "Docker-compatible CLI for containerd, supporting compose and lazy-pulling.",
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
        name: "BuildKit",
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
    icon: "server",
    title: "Container Orchestration",
    shortTitle: "Container Orchestration",
    description:
      "Orchestration tools automate deployment, scaling, and management of containerized applications.",
    color: "bg-gradient-to-br from-blue-600 to-indigo-700",
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
        url: "https://azure.microsoft.com/en-us/products/kubernetes-service/",
        description:
          "Managed Kubernetes container orchestration service on Microsoft Azure.",
        type: "Paid",
      },
      {
        name: "Red Hat OpenShift",
        url: "https://www.openshift.com/",
        description:
          "Enterprise Kubernetes platform for hybrid cloud deployments.",
        type: "Free & Paid",
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
    icon: "cloud",
    title: "Infrastructure as Code",
    shortTitle: "Infrastructure as Code",
    description:
      "IaC tools allow managing and provisioning infrastructure through code instead of manual processes.",
    color: "bg-gradient-to-br from-emerald-500 to-green-600",
    tools: [
      {
        name: "Terraform",
        url: "https://www.terraform.io/",
        description:
          "Widely-adopted infrastructure as code tool for building, changing, and versioning infrastructure safely (BUSL licensed since 2023).",
        type: "Free & Paid",
      },
      {
        name: "OpenTofu",
        url: "https://opentofu.org/",
        description:
          "Open-source, community-driven fork of Terraform with a fully compatible workflow.",
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
        url: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
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
        url: "https://www.puppet.com/",
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
        name: "AWS CDK",
        url: "https://github.com/aws/aws-cdk",
        description:
          "AWS Cloud Development Kit is a software development framework for defining cloud infrastructure as code and provisioning it through AWS CloudFormation.",
        type: "Open Source",
      },
      {
        name: "CDKTF (CDK for Terraform)",
        url: "https://github.com/hashicorp/terraform-cdk",
        description:
          "Cloud Development Kit for Terraform allows you to use familiar programming languages to define and provision infrastructure.",
        type: "Open Source",
      },
    ],
  },
  {
    id: "monitoring",
    icon: "chart",
    title: "Monitoring & Observability",
    shortTitle: "Monitoring & Observability",
    description:
      "Monitoring tools provide visibility into application and infrastructure performance, health, and resource usage.",
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
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
        url: "https://www.elastic.co/observability/apm",
        description:
          "Application performance monitoring using the Elastic Stack.",
        type: "Free & Paid",
      },
      {
        name: "SigNoz",
        url: "https://signoz.io/",
        description:
          "Open-source alternative to Datadog and New Relic built on OpenTelemetry.",
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
    icon: "shield",
    title: "Security & Compliance",
    shortTitle: "Security & Compliance",
    description:
      "Security tools help detect vulnerabilities, maintain compliance, and protect applications and infrastructure from threats.",
    color: "bg-gradient-to-br from-rose-500 to-red-600",
    tools: [
      {
        name: "SonarQube",
        url: "https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/",
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
        name: "Prisma Cloud",
        url: "https://www.paloaltonetworks.com/prisma/cloud",
        description:
          "Security platform (formerly Twistlock) for protecting containers, cloud, and serverless environments.",
        type: "Paid",
      },
      {
        name: "Checkmarx",
        url: "https://checkmarx.com/",
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
        name: "Grype",
        url: "https://github.com/anchore/grype",
        description:
          "Fast vulnerability scanner for container images and filesystems, from the makers of Syft SBOM.",
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
      {
        name: "OPA (Open Policy Agent)",
        url: "https://www.openpolicyagent.org/",
        description:
          "Open-source, general-purpose policy engine for unified, context-aware policy enforcement across the stack.",
        type: "Open Source",
      },
    ],
  },
  {
    id: "secrets",
    icon: "lock",
    title: "Secrets Management",
    shortTitle: "Secrets Management",
    description:
      "Secret management tools securely store, manage, and control access to tokens, passwords, certificates, and encryption keys.",
    color: "bg-gradient-to-br from-slate-500 to-gray-700",
    tools: [
      {
        name: "HashiCorp Vault",
        url: "https://www.vaultproject.io/",
        description:
          "Secure, store, and tightly control access to tokens, passwords, certificates, and encryption keys.",
        type: "Open Source",
      },
      {
        name: "Infisical",
        url: "https://infisical.com/",
        description:
          "Open-source secret management platform for teams, with a friendly UI and native CI/CD integrations.",
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
        url: "https://azure.microsoft.com/en-us/products/key-vault/",
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
        url: "https://www.doppler.com/",
        description:
          "SecretOps platform for managing secrets and app config across development to production.",
        type: "Free & Paid",
      },
      {
        name: "CyberArk",
        url: "https://www.cyberark.com/",
        description:
          "Enterprise privileged access management and secrets vaulting.",
        type: "Paid",
      },
      {
        name: "1Password",
        url: "https://1password.com/",
        description:
          "Automated secrets management for your infrastructure with 1Password Connect and Service Accounts.",
        type: "Paid",
      },
      {
        name: "Keeper",
        url: "https://www.keepersecurity.com/",
        description:
          "Zero-knowledge password vault and secrets management for teams.",
        type: "Paid",
      },
      {
        name: "Keywhiz",
        url: "https://github.com/square/keywhiz",
        description:
          "System for distributing and managing secrets from Square, designed for infrastructure automation.",
        type: "Open Source",
      },
      {
        name: "SOPS",
        url: "https://github.com/getsops/sops",
        description:
          "Simple and flexible tool for managing encrypted secrets in files and Git repositories.",
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
    icon: "bell",
    title: "Alerting & Incident Management",
    shortTitle: "Alerting & Incidents",
    description:
      "Alerting tools detect incidents and automatically notify the right people through various channels.",
    color: "bg-gradient-to-br from-yellow-500 to-amber-600",
    tools: [
      {
        name: "PagerDuty",
        url: "https://www.pagerduty.com/",
        description:
          "Digital operations management platform that keeps your services always on.",
        type: "Paid",
      },
      {
        name: "Opsgenie",
        url: "https://www.atlassian.com/software/opsgenie",
        description:
          "Modern incident management solution for operating always-on services.",
        type: "Free & Paid",
      },
      {
        name: "Squadcast",
        url: "https://www.squadcast.com/",
        description:
          "Reliability workflow platform combining alerting, on-call, and incident response.",
        type: "Free & Paid",
      },
      {
        name: "iLert",
        url: "https://www.ilert.com/",
        description:
          "Uptime and alerting platform with on-call schedules and 200+ integrations.",
        type: "Free & Paid",
      },
      {
        name: "FireHydrant",
        url: "https://firehydrant.com/",
        description:
          "Incident management platform with runbooks, status pages, and retrospectives.",
        type: "Paid",
      },
      {
        name: "Alertmanager",
        url: "https://prometheus.io/docs/alerting/latest/alertmanager/",
        description:
          "Handles alerts sent by client applications such as the Prometheus server.",
        type: "Open Source",
      },
      {
        name: "Grafana Alerting",
        url: "https://grafana.com/docs/grafana/latest/alerting/",
        description:
          "Alerting feature built into Grafana for defining alert rules and notification channels.",
        type: "Open Source",
      },
      {
        name: "xMatters",
        url: "https://www.xmatters.com/",
        description:
          "Service reliability platform for managing incident response.",
        type: "Free & Paid",
      },
      {
        name: "Incident.io",
        url: "https://incident.io/",
        description:
          "Incident management software that helps teams respond to production problems.",
        type: "Free & Paid",
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
    ],
  },
  {
    id: "devtools",
    icon: "wrench",
    title: "Developer Productivity",
    shortTitle: "Developer Productivity",
    description:
      "DevOps utilities provide essential functionality to streamline development, testing, and operations workflows.",
    color: "bg-gradient-to-br from-fuchsia-500 to-purple-700",
    tools: [
      {
        name: "ngrok",
        url: "https://ngrok.com/",
        description:
          "Secure tunnels to localhost for demoing web applications or APIs.",
        type: "Free & Paid",
      },
      {
        name: "Postman",
        url: "https://www.postman.com/",
        description:
          "API platform for building and using APIs with collaboration features.",
        type: "Free & Paid",
      },
      {
        name: "Portainer",
        url: "https://www.portainer.io/",
        description: "Lightweight management UI for Docker environments.",
        type: "Open Source",
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
        name: "CodeSandbox",
        url: "https://codesandbox.io/",
        description: "Online code editor and cloud development environment.",
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
        name: "Atuin",
        url: "https://atuin.sh/",
        description:
          "Synced, searchable shell history with powerful context-aware replacement for ctrl-r.",
        type: "Open Source",
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

export const TOTAL_TOOLS = CATEGORIES.reduce(
  (sum, category) => sum + category.tools.length,
  0,
);

export function getCategory(id: string): ToolCategory | undefined {
  return CATEGORIES.find((category) => category.id === id);
}

export function getCategoryNeighbours(id: string) {
  const index = CATEGORIES.findIndex((category) => category.id === id);
  return {
    prev: index > 0 ? CATEGORIES[index - 1] : undefined,
    next: index >= 0 && index < CATEGORIES.length - 1 ? CATEGORIES[index + 1] : undefined,
  };
}

export const TOOL_TYPES = [
  "all",
  ...Array.from(new Set(CATEGORIES.flatMap((c) => c.tools.map((t) => t.type)))).sort(),
];
