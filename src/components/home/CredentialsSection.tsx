"use client";

import * as React from "react";
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Calendar, Building } from "lucide-react";
import { CREDENTIALS_DATA } from "@/data/credentials";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 md:py-28 relative">
      <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <Badge variant="mint" size="md">
            04 — CREDENTIALS &amp; CERTIFICATIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Formal Credentials &amp; Degrees
          </h2>
          <p className="text-base text-text-secondary font-sans leading-relaxed">
            Verified qualifications proving hands-on training from Xipra Tech alongside foundational
            computing principles from Gujarat Technological University.
          </p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CREDENTIALS_DATA.map((cred) => (
            <div
              key={cred.id}
              className="p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border-subtle hover:border-accent-primary/50 transition-all flex flex-col space-y-6"
            >
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-text-secondary">
                    <Building className="w-3.5 h-3.5 text-accent-primary" />
                    <span>{cred.institution}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                    {cred.title}
                  </h3>
                </div>

                <Badge
                  variant={cred.credentialType === "certification" ? "mint" : "accent"}
                  size="sm"
                >
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  {cred.issueDate}
                </Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary font-sans leading-relaxed">
                {cred.description}
              </p>

              {/* Skills Acquired Chips */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs text-text-secondary block uppercase tracking-wider">
                  Key Competencies Validated:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cred.skillsAcquired.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-bg-surface-alt text-text-primary border border-border-subtle flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-accent-secondary" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Meta */}
              <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-secondary">
                {cred.credentialId ? (
                  <span>ID: {cred.credentialId}</span>
                ) : (
                  <span>Curriculum Verified</span>
                )}
                <span className="text-accent-secondary flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Authenticated Record
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
