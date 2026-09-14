"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, Calendar, User, Wrench, Layers, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Handle Esc key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-bg-surface border border-border-subtle shadow-2xl p-6 md:p-8 space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-primary transition-all focus-visible:outline-accent-primary"
          aria-label="Close project modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category Badge & Meta */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Badge variant="mint" size="md">
            {project.categoryLabel || "UI/UX DESIGN"}
          </Badge>
          {project.featured && (
            <Badge variant="default" size="sm">
              <Sparkles className="w-3 h-3 text-accent-secondary mr-1" />
              Flagship Project
            </Badge>
          )}
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-1.5 pr-8">
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
            {project.title}
          </h2>
          <p className="text-base text-accent-primary font-heading font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Live Figma Prototype / Preview Container */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-accent-primary font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              Live Interactive Prototype
            </span>
            {project.figmaDirectUrl && (
              <a
                href={project.figmaDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors underline-offset-4 hover:underline"
              >
                <span>Open in Figma Fullscreen</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="relative aspect-[16/10] w-full min-h-[380px] rounded-xl overflow-hidden border border-border-subtle bg-black">
            {project.figmaPrototypeUrl ? (
              <iframe
                src={project.figmaPrototypeUrl}
                className="w-full h-full border-0"
                allowFullScreen
                title={`${project.title} Figma Prototype`}
              />
            ) : (
              <Image
                src={project.heroImageUrl || project.thumbnailUrl}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
              />
            )}
          </div>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-bg-surface-alt border border-border-subtle text-xs font-mono">
          <div className="space-y-1">
            <span className="text-text-secondary flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-accent-primary" /> Role
            </span>
            <p className="text-text-primary font-medium">{project.role}</p>
          </div>
          <div className="space-y-1">
            <span className="text-text-secondary flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-accent-secondary" /> Timeline
            </span>
            <p className="text-text-primary font-medium">{project.timeline}</p>
          </div>
          <div className="space-y-1 col-span-2 sm:col-span-1">
            <span className="text-text-secondary flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-accent-primary" /> Client / Scope
            </span>
            <p className="text-text-primary font-medium">{project.client}</p>
          </div>
        </div>

        {/* Project Overview */}
        <div className="space-y-2">
          <h3 className="text-sm font-mono uppercase tracking-wider text-text-secondary">
            Overview &amp; Brief
          </h3>
          <p className="text-sm sm:text-base text-text-primary/90 font-sans leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Metrics If Present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-text-secondary">
              Key Metrics &amp; Impact
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-bg-surface-alt border border-border-subtle">
                  <span className="text-lg sm:text-xl font-heading font-bold text-accent-secondary block">
                    {m.value}
                  </span>
                  <span className="text-xs font-mono text-text-primary font-medium block">
                    {m.label}
                  </span>
                  {m.description && (
                    <span className="text-[11px] text-text-secondary block mt-0.5 font-sans">
                      {m.description}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools Used */}
        <div className="space-y-2">
          <h3 className="text-sm font-mono uppercase tracking-wider text-text-secondary flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" /> Tools &amp; Methods
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-bg-surface-alt text-text-primary border border-border-subtle"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Engineering Notes Callout if present */}
        {project.engineeringNotes && (
          <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20 space-y-1">
            <span className="text-xs font-mono text-accent-primary font-semibold block">
              {"// Engineering Mindset Note"}
            </span>
            <p className="text-xs text-text-primary font-sans leading-relaxed">
              {project.engineeringNotes}
            </p>
          </div>
        )}

        {/* Actions Footer */}
        <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Back to Grid
          </Button>

          <div className="flex items-center gap-3">
            {project.figmaDirectUrl && (
              <a
                href={project.figmaDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border border-accent-primary/40 text-accent-primary hover:bg-accent-primary/10 transition-colors"
              >
                <span>Launch Figma</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link href={`/project/${project.slug}`} onClick={onClose}>
              <Button variant="primary" size="md" className="gap-2">
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
