"use client";

import * as React from "react";
import { SKILLS_DATA } from "@/data/credentials";
import { Badge } from "@/components/ui/Badge";
import { Wrench, Sparkles, Code, Palette, Check } from "lucide-react";

export function SkillsSection() {
  const categoryIcons = [Palette, Sparkles, Wrench, Code];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <Badge variant="mint" size="md">
            03 — CAPABILITIES &amp; TOOLS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Skills &amp; Technical Proficiency
          </h2>
          <p className="text-base text-text-secondary font-sans leading-relaxed">
            Categorized overview of design workflows, creative software proficiencies, and frontend
            engineering fundamentals.
          </p>
        </div>

        {/* Skills Grid: 4 Categorized Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-accent-primary/50 transition-all flex flex-col space-y-5"
              >
                {/* Category Header */}
                <div className="space-y-2 pb-3 border-b border-border-subtle">
                  <div className="w-9 h-9 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-text-primary text-lg">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Tag Cloud / List */}
                <div className="flex-1 flex flex-col space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-center justify-between text-xs font-mono group hover:border-accent-primary/40 transition-colors"
                    >
                      <span className="text-text-primary font-medium flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-accent-secondary" />
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-text-secondary px-1.5 py-0.5 rounded bg-bg-primary">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
