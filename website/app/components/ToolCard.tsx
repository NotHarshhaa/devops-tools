import React from "react";

interface ToolCardProps {
  name: string;
  url: string;
  description: string;
  type: string;
  category?: string;
}

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ToolCard({
  name,
  url,
  description,
  type,
  category,
}: ToolCardProps) {
  return (
    <article className="tool-row">
      <div className="min-w-0">
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {category && <span className="chip">{category}</span>}
          <span className="chip chip--cool">{type}</span>
        </div>
      </div>
      <p className="min-w-0">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="tool-go">
        Visit site
        <span className="tool-host">{hostnameOf(url)}</span>
      </a>
    </article>
  );
}
