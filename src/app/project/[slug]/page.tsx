import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  Wrench,
  Layers,
  Sparkles,
  ExternalLink,
  Cpu,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { SEED_PROJECTS, getProjectBySlug, getAllProjects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SEED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found — Bilal Mahesaniya",
    };
  }

  return {
    title: `${project.title} — Case Study | Bilal Mahesaniya`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — Case Study | Bilal Mahesaniya`,
      description: project.overview,
      images: [project.heroImageUrl || project.thumbnailUrl],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const isUiUx = project.category === "ui-ux";

  return (
    <article className="min-h-screen py-12 md:py-20 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-6 md:px-12 space-y-16 relative z-10">
        {/* Navigation Breadcrumbs & Back Action */}
        <div className="flex items-center justify-between border-b border-border-subtle pb-6 text-xs font-mono">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>

          <div className="flex items-center gap-2 text-text-secondary">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Projects</span>
            <span>/</span>
            <span className="text-text-primary">{project.id.toUpperCase()}</span>
          </div>
        </div>

        {/* Case Study Header & Title */}
        <header className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={isUiUx ? "mint" : "accent"} size="md">
              {isUiUx ? "UI/UX DESIGN CASE STUDY" : "GRAPHIC DESIGN CASE STUDY"}
            </Badge>
            {project.featured && (
              <Badge variant="default" size="sm">
                <Sparkles className="w-3 h-3 text-accent-secondary mr-1" />
                Featured Flagship
              </Badge>
            )}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-text-primary">
              {project.title}
            </h1>
            <p className="text-lg sm:text-2xl font-heading font-medium text-accent-primary">
              {project.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed">
            {project.overview}
          </p>

          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-bg-surface border border-border-subtle text-xs font-mono">
            <div className="space-y-1">
              <span className="text-text-secondary flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-accent-primary" /> Role
              </span>
              <p className="text-text-primary font-medium text-sm font-sans">{project.role}</p>
            </div>
            <div className="space-y-1">
              <span className="text-text-secondary flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-secondary" /> Timeline
              </span>
              <p className="text-text-primary font-medium text-sm font-sans">{project.timeline}</p>
            </div>
            <div className="space-y-1">
              <span className="text-text-secondary flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent-primary" /> Context
              </span>
              <p className="text-text-primary font-medium text-sm font-sans">{project.client}</p>
            </div>
            <div className="space-y-1">
              <span className="text-text-secondary flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-accent-secondary" /> Primary Tool
              </span>
              <p className="text-text-primary font-medium text-sm font-sans">{project.tools[0]}</p>
            </div>
          </div>
        </header>

        {/* Hero Banner Mockup */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-subtle bg-bg-surface shadow-2xl">
          <Image
            src={project.heroImageUrl || project.thumbnailUrl}
            alt={project.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Metrics Grid If Available */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-secondary" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-text-secondary">
                Key Metrics &amp; Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-bg-surface border border-border-subtle space-y-2 hover:border-accent-primary/40 transition-colors"
                >
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-accent-secondary block">
                    {metric.value}
                  </span>
                  <span className="text-sm font-mono text-text-primary font-semibold block">
                    {metric.label}
                  </span>
                  {metric.description && (
                    <p className="text-xs text-text-secondary font-sans leading-relaxed">
                      {metric.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Structured Sections (Problem, Solution, Process) */}
        {project.sections && project.sections.length > 0 && (
          <section className="space-y-12">
            {project.sections.map((sec) => (
              <div
                key={sec.id}
                className="p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-text-primary">
                    {sec.title}
                  </h3>
                  {sec.subtitle && (
                    <p className="text-base text-accent-primary font-heading font-medium">
                      {sec.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-text-secondary font-sans leading-relaxed text-base">
                  {sec.content}
                </p>

                {sec.callout && (
                  <div className="p-4 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-secondary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-accent-secondary uppercase">
                        Key Takeaway
                      </span>
                      <p className="text-sm text-text-primary font-sans">
                        {sec.callout.text}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Engineering Mindset & Systems Thinking Block */}
        <section className="p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-4">
          <div className="flex items-center gap-2 text-accent-primary font-mono text-xs">
            <Cpu className="w-4 h-4" />
            <span className="uppercase tracking-widest font-semibold">
              {"// Engineering Mindset & Technical Feasibility"}
            </span>
          </div>
          <h3 className="text-xl font-heading font-bold text-text-primary">
            Designed for Seamless Developer Handoff
          </h3>
          <p className="text-text-secondary font-sans leading-relaxed text-sm sm:text-base">
            {project.engineeringNotes ||
              `With a foundation in Computer Engineering, Bilal designs component hierarchies with strict token naming conventions (color roles, spacing tokens, responsive breakpoints) that map 1:1 to modern component libraries like Tailwind CSS and React.`}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-bg-surface-alt text-text-primary border border-border-subtle"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Prev / Next Project Footer Navigation */}
        <nav
          className="pt-12 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-6"
          aria-label="Case Study Navigation"
        >
          <Link
            href={`/project/${prevProject.slug}`}
            className="group p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-accent-primary/60 transition-all flex flex-col space-y-2"
          >
            <span className="text-xs font-mono text-text-secondary flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Previous Project
            </span>
            <span className="font-heading font-bold text-text-primary text-lg group-hover:text-accent-primary transition-colors">
              {prevProject.title}
            </span>
            <span className="text-xs font-mono text-text-secondary">
              {prevProject.category === "ui-ux" ? "UI/UX Design" : "Graphic Design"}
            </span>
          </Link>

          <Link
            href={`/project/${nextProject.slug}`}
            className="group p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-accent-primary/60 transition-all flex flex-col space-y-2 text-right items-end"
          >
            <span className="text-xs font-mono text-text-secondary flex items-center gap-1">
              Next Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-heading font-bold text-text-primary text-lg group-hover:text-accent-primary transition-colors">
              {nextProject.title}
            </span>
            <span className="text-xs font-mono text-text-secondary">
              {nextProject.category === "ui-ux" ? "UI/UX Design" : "Graphic Design"}
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
