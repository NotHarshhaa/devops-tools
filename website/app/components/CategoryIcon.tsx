import React from "react";
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  CogIcon,
  WrenchIcon,
  ServerStackIcon,
  CloudIcon,
  CommandLineIcon,
  CubeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import type { CategoryIconKey } from "@/lib/data";

const ICONS: Record<CategoryIconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  rocket: RocketLaunchIcon,
  document: DocumentTextIcon,
  cog: CogIcon,
  wrench: WrenchIcon,
  server: ServerStackIcon,
  cloud: CloudIcon,
  command: CommandLineIcon,
  cube: CubeIcon,
  chart: ChartBarIcon,
  shield: ShieldCheckIcon,
  lock: LockClosedIcon,
  bell: BellAlertIcon,
};

export default function CategoryIcon({
  icon,
  className = "w-full h-full",
}: {
  icon: CategoryIconKey;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} aria-hidden="true" />;
}
