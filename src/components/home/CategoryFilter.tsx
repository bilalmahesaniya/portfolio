"use client";

import * as React from "react";
import { ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export type FilterOption = "all" | ProjectCategory;

interface CategoryFilterProps {
  currentFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  counts: {
    all: number;
    "mobile-ui": number;
    "web-platform": number;
    "interactive-ui": number;
  };
}

export function CategoryFilter({
  currentFilter,
  onFilterChange,
  counts,
}: CategoryFilterProps) {
  const tabs: { id: FilterOption; label: string; count: number }[] = [
    { id: "all", label: "All Works", count: counts.all },
    { id: "mobile-ui", label: "Mobile UI/UX", count: counts["mobile-ui"] },
    { id: "web-platform", label: "Web & OTT", count: counts["web-platform"] },
    { id: "interactive-ui", label: "Interactive Cards", count: counts["interactive-ui"] },
  ];

  return (
    <div
      className="inline-flex flex-wrap p-1.5 rounded-2xl bg-bg-surface-alt/70 border border-border-subtle gap-1.5 backdrop-blur-md"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {tabs.map((tab) => {
        const isActive = currentFilter === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(tab.id)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 select-none",
              isActive
                ? "bg-accent-primary text-white shadow-glow-accent"
                : "text-text-secondary hover:text-text-primary hover:bg-bg-surface"
            )}
          >
            <span>{tab.label}</span>
            <span
              className={cn(
                "px-1.5 py-0.2 rounded-md text-[10px] font-mono",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-bg-surface text-text-secondary"
              )}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
