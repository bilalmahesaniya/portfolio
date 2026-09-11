"use client";

import * as React from "react";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { CredentialsSection } from "@/components/home/CredentialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ResumeModal } from "@/components/ui/ResumeModal";

export default function PortfolioHomePage() {
  const [resumeModalOpen, setResumeModalOpen] = React.useState(false);

  return (
    <main className="relative selection:bg-accent-primary selection:text-white">
      {/* 01: Hero Section */}
      <Hero onOpenResume={() => setResumeModalOpen(true)} />

      {/* 02: About & Education Timeline */}
      <AboutSection />

      {/* 03: Skills & Capabilities Matrix */}
      <SkillsSection />

      {/* 04: Filterable 12-Project Showcase */}
      <ProjectShowcase />

      {/* 05: Formal Credentials & Degrees */}
      <CredentialsSection />

      {/* 06: Contact & Inquiry Form */}
      <ContactSection />

      {/* Resume Quick-View Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
