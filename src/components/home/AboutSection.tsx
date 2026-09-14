"use client";

import * as React from "react";
import { GraduationCap, Award, BookOpen, Laptop, CheckCircle2, ArrowRight } from "lucide-react";
import { CREDENTIALS_DATA } from "@/data/credentials";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  const timelineSteps = [
    {
      year: "Completed",
      title: "12th Standard — Science Stream",
      institution: "GSEB Board",
      icon: BookOpen,
      badge: "Foundation",
      badgeVariant: "subtle" as const,
      description:
        "Built analytical reasoning, advanced mathematical problem solving, and structured scientific inquiry.",
    },
    {
      year: "2024",
      title: "Certified UI/UX Designer",
      institution: "Xipra Tech",
      icon: Award,
      badge: "Industry Certified",
      badgeVariant: "mint" as const,
      description:
        "Intensive curriculum covering design systems, Figma tokens, double-diamond UX research, user testing, and WCAG AA accessibility standards.",
    },
    {
      year: "2024",
      title: "Design Systems & Prototyping Specialist",
      institution: "Xipra Tech",
      icon: Award,
      badge: "Advanced Specialization",
      badgeVariant: "accent" as const,
      description:
        "Advanced specialization in interactive prototyping, design token architecture, motion micro-interactions, and component variants.",
    },
    {
      year: "2023 – 2024",
      title: "UI/UX Designer (1 Year Commercial Experience)",
      institution: "Xipra Tech",
      icon: Award,
      badge: "Professional Experience",
      badgeVariant: "mint" as const,
      description:
        "1 year of commercial UI/UX experience delivering production web and mobile apps, scalable design systems, tokens, and 15 interactive prototypes.",
    },
    {
      year: "Ongoing",
      title: "Computer Science",
      institution: "Gujarat Technological University",
      icon: Laptop,
      badge: "In Progress",
      badgeVariant: "accent" as const,
      description:
        "Computer science foundations (algorithms, web architecture, databases, OOP) to bridge design systems with production frontend code.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <Badge variant="mint" size="md">
            01 — BACKGROUND &amp; CREDENTIALS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Education &amp; Design Journey
          </h2>
          <p className="text-base text-text-secondary font-sans leading-relaxed">
            A deliberate educational path combining technical engineering principles with rigorous
            visual and user-experience training from Xipra Tech.
          </p>
        </div>

        {/* 2-Column Layout: Bio Card + Chronological Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-6">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                The Engineering-First Mindset
              </h3>
              <p className="text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
                I am a designer who speaks developer. Rather than designing isolated screens, I view
                interfaces as interconnected component systems, state machines, and accessible user flows.
              </p>
              <p className="text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
                With <span className="text-text-primary font-medium">1 year of professional UI/UX experience at Xipra Tech</span> and
                a rigorous foundation in <span className="text-text-primary font-medium">Computer Science</span>, I specialize in crafting design solutions
                that are technically viable, pixel-perfect, and conversion-focused.
              </p>

              {/* Quick Highlight Points */}
              <div className="space-y-3 pt-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0" />
                  <span>Double-Diamond UX Research &amp; User Personas</span>
                </div>
                <div className="flex items-center gap-2 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0" />
                  <span>Figma Component Systems &amp; Design Tokens</span>
                </div>
                <div className="flex items-center gap-2 text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0" />
                  <span>Adobe Creative Suite &amp; Packaging Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative border-l-2 border-border-subtle pl-6 sm:pl-8 space-y-10 ml-3">
              {timelineSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-bg-surface border-2 border-accent-primary flex items-center justify-center group-hover:border-accent-secondary transition-colors">
                      <span className="w-2 h-2 rounded-full bg-accent-primary group-hover:bg-accent-secondary transition-colors" />
                    </div>

                    {/* Timeline Card */}
                    <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-accent-primary/50 transition-all space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 font-mono text-xs text-text-secondary">
                          <span className="text-accent-primary font-semibold">{step.year}</span>
                          <span>•</span>
                          <span>{step.institution}</span>
                        </div>
                        <Badge variant={step.badgeVariant} size="sm">
                          {step.badge}
                        </Badge>
                      </div>

                      <h4 className="text-lg font-heading font-bold text-text-primary">
                        {step.title}
                      </h4>

                      <p className="text-sm text-text-secondary font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
