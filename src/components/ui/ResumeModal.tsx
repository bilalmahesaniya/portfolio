"use client";

import * as React from "react";
import { X, FileDown, ExternalLink, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-bg-surface border border-border-subtle shadow-2xl p-6 md:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-border-subtle pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="mint" size="sm">
                PORTABLE RESUME
              </Badge>
              <span className="text-xs font-mono text-text-secondary">Updated 2026</span>
            </div>
            <h2
              id="resume-modal-title"
              className="font-heading font-bold text-xl text-text-primary"
            >
              Bilal Mahesaniya — Professional Resume
            </h2>
            <p className="text-xs font-mono text-accent-primary">
              UI/UX Designer • Design Systems &amp; Prototyping • Diploma in Computer Engineering
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                <span>Open Interactive Resume</span>
              </Button>
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-accent-primary"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Structured Resume Content View */}
        <div className="space-y-8 font-sans">
          {/* Executive Summary */}
          <div className="p-5 rounded-xl bg-bg-surface-alt border border-border-subtle space-y-2">
            <h3 className="font-heading font-bold text-text-primary text-base">
              Executive Profile
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Design professional bridging computer engineering principles with human-first UI/UX.
              Certified in UI/UX Design by Xipra Tech. Experienced in end-to-end product design,
              design tokens in Figma, interactive prototyping, responsive web/mobile interfaces, and WCAG 2.1 AA accessibility.
            </p>
          </div>

          {/* Core Education & Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-5 rounded-xl bg-bg-surface-alt border border-border-subtle space-y-3">
              <div className="flex items-center gap-2 text-accent-primary font-semibold text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>Formal Education</span>
              </div>
              <div className="space-y-2 font-sans">
                <div>
                  <p className="font-medium text-text-primary">Diploma in Computer Engineering</p>
                  <p className="text-xs text-text-secondary">Gujarat Technological University • Ongoing</p>
                </div>
                <div className="pt-1">
                  <p className="font-medium text-text-primary">12th Science Stream</p>
                  <p className="text-xs text-text-secondary">Gujarat Board (GSEB) • Completed</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-bg-surface-alt border border-border-subtle space-y-3">
              <div className="flex items-center gap-2 text-accent-secondary font-semibold text-sm">
                <Award className="w-4 h-4" />
                <span>Industry Certifications</span>
              </div>
              <div className="space-y-2 font-sans">
                <div>
                  <p className="font-medium text-text-primary">Certified UI/UX Designer</p>
                  <p className="text-xs text-text-secondary">Xipra Tech • Credential XT-UIUX-2024</p>
                </div>
                <div className="pt-1">
                  <p className="font-medium text-text-primary">Design Systems &amp; Prototyping Specialist</p>
                  <p className="text-xs text-text-secondary">Xipra Tech • Credential XT-UIUX-ADV</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Interactive Resume Viewer */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
              <span>Interactive ATS Resume Preview (Scrollable)</span>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Open standalone resume</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="w-full h-96 rounded-xl overflow-hidden border border-border-subtle bg-bg-surface-alt">
              <iframe
                src="/resume.html"
                className="w-full h-full border-none"
                title="Bilal Mahesaniya Resume Preview"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-border-subtle flex items-center justify-between flex-wrap gap-3">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Preview
          </Button>

          <div className="flex items-center gap-3">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md" className="gap-2">
                <FileDown className="w-4 h-4" />
                <span>View &amp; Export ATS PDF</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
