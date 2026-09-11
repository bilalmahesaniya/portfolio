"use client";

import * as React from "react";
import { Project, getAllProjects } from "@/data/projects";
import { CategoryFilter, FilterOption } from "@/components/home/CategoryFilter";
import { ProjectCard } from "@/components/home/ProjectCard";
import { ProjectDetailModal } from "@/components/project/ProjectDetailModal";
import { Badge } from "@/components/ui/Badge";
import { FolderGit2 } from "lucide-react";

export function ProjectShowcase() {
  const allProjects = React.useMemo(() => getAllProjects(), []);
  const [filter, setFilter] = React.useState<FilterOption>("all");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const counts = React.useMemo(
    () => ({
      all: allProjects.length,
      "ui-ux": allProjects.filter((p) => p.category === "ui-ux").length,
      "graphic-design": allProjects.filter((p) => p.category === "graphic-design").length,
    }),
    [allProjects]
  );

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [allProjects, filter]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-container mx-auto px-6 md:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="mint" size="md">
              02 — PORTFOLIO SHOWCASE
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
              Featured Design Projects
            </h2>
            <p className="text-base text-text-secondary font-sans leading-relaxed">
              Explore 9 comprehensive projects spanning mobile neobanking, complex SaaS dashboards,
              design systems, and distinct corporate identities.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="self-start md:self-auto">
            <CategoryFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              counts={counts}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onQuickView={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          /* Defensive Empty State */
          <div className="p-12 text-center rounded-2xl bg-bg-surface border border-border-subtle space-y-3">
            <FolderGit2 className="w-8 h-8 text-text-secondary mx-auto opacity-50" />
            <p className="font-heading font-semibold text-text-primary text-lg">
              No projects found
            </p>
            <p className="text-sm text-text-secondary font-sans">
              There are no projects currently matching the selected filter.
            </p>
          </div>
        )}
      </div>

      {/* Quick Preview Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
