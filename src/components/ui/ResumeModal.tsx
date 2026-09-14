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
        <div className="flex items-start justify-between border-b border-border-subtle pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="mint" size="sm">
                LIVE RESUME PREVIEW
              </Badge>
              <span className="text-xs font-mono text-accent-secondary">1 Year Experience • Xipra Tech</span>
              <span className="text-xs font-mono text-text-secondary">•</span>
              <span className="text-xs font-mono text-text-secondary">Computer Science</span>
            </div>
            <h2
              id="resume-modal-title"
              className="font-heading font-bold text-xl sm:text-2xl text-text-primary"
            >
              Bilal Mahesaniya — UI/UX Designer
            </h2>
            <p className="text-xs font-mono text-text-secondary flex items-center gap-2 flex-wrap">
              <span>bilalmahesaniya7@gmail.com</span>
              <span>•</span>
              <span>+91 81602 80803</span>
              <span>•</span>
              <span className="text-accent-primary">Gujarat, India (Remote Worldwide)</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2 text-xs">
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open in New Tab</span>
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

        {/* Live Resume Preview Container */}
        <div className="space-y-4">
          <div className="w-full h-[65vh] sm:h-[70vh] rounded-xl overflow-hidden border border-border-subtle bg-bg-surface-alt shadow-inner">
            <iframe
              src="/resume.html"
              className="w-full h-full border-none"
              title="Bilal Mahesaniya Resume Live Preview"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-border-subtle flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs font-mono text-text-secondary">
            ATS-Friendly • Optimized for Recruiter Screening
          </div>

          <div className="flex items-center gap-2.5">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close Preview
            </Button>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm" className="gap-2">
                <FileDown className="w-3.5 h-3.5" />
                <span>Save as ATS PDF (Optional)</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
