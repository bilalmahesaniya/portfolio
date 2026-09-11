"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Eye } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onQuickView: (project: Project) => void;
}

export function ProjectCard({ project, onQuickView }: ProjectCardProps) {
  const isUiUx = project.category === "ui-ux";

  return (
    <div className="group relative flex flex-col rounded-2xl bg-bg-surface border border-border-subtle hover:border-accent-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-black/40">
      {/* Cover Image Container */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-bg-surface-alt cursor-pointer"
        onClick={() => onQuickView(project)}
      >
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Hover Quick View Overlay Pill */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(project);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-bg-surface-alt/90 text-text-primary border border-border-subtle shadow-lg backdrop-blur-md hover:border-accent-primary transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-accent-secondary" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Category Pill Over Image */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant={isUiUx ? "mint" : "accent"} size="sm">
            {isUiUx ? "UI/UX" : "GRAPHIC"}
          </Badge>
        </div>

        {/* Featured Tag */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-bg-surface/80 text-text-primary border border-border-subtle backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-accent-secondary" />
              Flagship
            </span>
          </div>
        )}
      </div>

      {/* Card Details Body */}
      <div className="flex-1 flex flex-col p-5 sm:p-6 space-y-4">
        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-text-primary group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary line-clamp-2 font-sans leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-surface-alt text-text-secondary border border-border-subtle"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-text-secondary">
              +{project.tools.length - 3}
            </span>
          )}
        </div>

        {/* Footer Link / CTA */}
        <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
          <span className="text-text-secondary">{project.timeline}</span>
          <Link
            href={`/project/${project.slug}`}
            className="inline-flex items-center gap-1 text-accent-primary font-medium hover:underline group-hover:translate-x-0.5 transition-transform"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
