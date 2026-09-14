"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileDown,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Palette,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const targetPos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 md:py-24 overflow-hidden"
    >
      {/* Ambient background glows matching UI/UX Brief */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[450px] h-[450px] bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="mint" size="md">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              AVAILABLE FOR JUNIOR ROLES &amp; FREELANCE
            </Badge>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-bold tracking-tight text-text-primary">
              Bilal Mahesaniya
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-accent-primary">
              UI/UX Designer
            </p>
          </div>

          {/* Value Pitch */}
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed font-sans">
            Bridging technical computer engineering rigor with human-centered interface design.
            Certified in UI/UX Design by <span className="text-text-primary font-medium">Xipra Tech</span>,
            crafting design systems, accessible web/mobile apps, and gesture-driven interactive prototypes.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2 group shadow-glow-accent"
            >
              <span>Explore 15 Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {onOpenResume ? (
              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenResume}
                className="gap-2"
              >
                <FileDown className="w-4 h-4 text-accent-secondary" />
                <span>Interactive Resume</span>
              </Button>
            ) : (
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline-none"
              >
                <Button variant="secondary" size="lg" className="gap-2">
                  <FileDown className="w-4 h-4 text-accent-secondary" />
                  <span>Interactive Resume</span>
                </Button>
              </a>
            )}

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="gap-2"
            >
              <span>Get in Touch</span>
            </Button>

            <Link href="/kage" className="focus-visible:outline-none">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-accent-secondary/40 text-accent-secondary hover:bg-accent-secondary/10 hover:border-accent-secondary shadow-glow-subtle"
              >
                <Sparkles className="w-4 h-4 text-accent-secondary" />
                <span>3D Experience</span>
              </Button>
            </Link>
          </div>

          {/* Metrics & Credibility Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-subtle font-mono">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-text-primary block">
                15
              </span>
              <span className="text-xs text-text-secondary uppercase">
                Curated Projects
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-accent-secondary block">
                02
              </span>
              <span className="text-xs text-text-secondary uppercase">
                Xipra Tech Certs
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-accent-primary block">
                Diploma
              </span>
              <span className="text-xs text-text-secondary uppercase">
                Computer Eng.
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-text-primary block">
                100%
              </span>
              <span className="text-xs text-text-secondary uppercase">
                Design System
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Tech Interactive Preview Terminal */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Outer Card with Hairline Border and Glow */}
            <div className="rounded-2xl bg-bg-surface border border-border-subtle p-5 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-accent-primary/40 transition-all duration-300">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                </div>
                <span className="font-mono text-xs text-text-secondary">
                  bilal.design/system.ts
                </span>
                <Badge variant="accent" size="sm">
                  v2.4 Live
                </Badge>
              </div>

              {/* Design & Engineering Dual Stack Preview */}
              <div className="space-y-4 font-mono text-xs">
                {/* Discipline Tag Rows */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-bg-surface-alt border border-border-subtle space-y-1.5">
                    <div className="flex items-center gap-1.5 text-accent-primary font-medium">
                      <Palette className="w-3.5 h-3.5" />
                      <span>UI/UX Craft</span>
                    </div>
                    <p className="text-[11px] text-text-secondary font-sans leading-tight">
                      Figma systems, responsive tokens, interaction design &amp; double-diamond UX
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-bg-surface-alt border border-border-subtle space-y-1.5">
                    <div className="flex items-center gap-1.5 text-accent-secondary font-medium">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Engineering</span>
                    </div>
                    <p className="text-[11px] text-text-secondary font-sans leading-tight">
                      Computer Engineering foundation, component tokens, semantic HTML/CSS
                    </p>
                  </div>
                </div>

                {/* Live Design Tokens Palette */}
                <div className="p-3 rounded-xl bg-bg-primary/70 border border-border-subtle space-y-2">
                  <span className="text-text-secondary text-[11px] block">
                    {"// Active Design Tokens"}
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                    <div className="p-1.5 rounded bg-bg-surface border border-border-subtle">
                      <div className="w-full h-3 rounded bg-accent-primary mb-1" />
                      <span className="text-text-secondary">#4F7CFF</span>
                    </div>
                    <div className="p-1.5 rounded bg-bg-surface border border-border-subtle">
                      <div className="w-full h-3 rounded bg-accent-secondary mb-1" />
                      <span className="text-text-secondary">#14F1B2</span>
                    </div>
                    <div className="p-1.5 rounded bg-bg-surface border border-border-subtle">
                      <div className="w-full h-3 rounded bg-bg-surface-alt mb-1" />
                      <span className="text-text-secondary">#1B1E27</span>
                    </div>
                    <div className="p-1.5 rounded bg-bg-surface border border-border-subtle">
                      <div className="w-full h-3 rounded bg-text-primary mb-1" />
                      <span className="text-text-secondary">#E7E9EE</span>
                    </div>
                  </div>
                </div>

                {/* Certifications Badge Snapshot */}
                <div className="p-3 rounded-xl bg-bg-surface-alt/70 border border-border-subtle space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-text-primary font-medium font-sans">
                      Xipra Tech Certified
                    </span>
                    <span className="text-accent-secondary text-[10px]">Verified</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-bg-primary text-[10px] text-text-secondary">
                      UI/UX Design
                    </span>
                    <span className="px-2 py-0.5 rounded bg-bg-primary text-[10px] text-text-secondary">
                      Design Systems
                    </span>
                    <span className="px-2 py-0.5 rounded bg-bg-primary text-[10px] text-text-secondary">
                      GTU Diploma
                    </span>
                  </div>
                </div>

                {/* Bottom Quick Callout */}
                <div className="flex items-center justify-between text-[11px] text-text-secondary pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-secondary" />
                    WCAG 2.1 AA Contrast Passed
                  </span>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                    className="text-accent-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Work</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
