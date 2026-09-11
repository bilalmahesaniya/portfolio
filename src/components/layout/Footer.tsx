"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Dribbble,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className="bg-bg-surface border-t border-border-subtle pt-16 pb-12">
      <div className="max-w-container mx-auto px-6 md:px-12 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Bio column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-center justify-center font-heading font-bold text-accent-primary text-sm">
                BM
              </div>
              <span className="font-heading font-bold text-text-primary text-base">
                Bilal Mahesaniya
              </span>
            </div>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed font-sans">
              UI/UX and Graphic Designer with a Computer Engineering foundation.
              Crafting system-driven interfaces, brand identities, and accessible digital experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-bg-surface-alt text-text-secondary border border-border-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
              Open for Junior Roles &amp; Freelance Opportunities
            </div>
          </div>

          {/* Quick Navigation column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a
                  href="#about"
                  className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-1"
                >
                  About &amp; Timeline
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-1"
                >
                  Skills &amp; Toolkit
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-1"
                >
                  Featured Projects (12)
                </a>
              </li>
              <li>
                <a
                  href="#credentials"
                  className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-1"
                >
                  Certifications &amp; Diploma
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-1"
                >
                  Contact Form
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials column */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-wider">
              Connect &amp; Profiles
            </h3>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href="mailto:contact@bilalmahesaniya.com"
                className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-accent-primary" />
                <span>contact@bilalmahesaniya.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-accent-primary" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-accent-secondary" />
                <span>Behance</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-2"
              >
                <Dribbble className="w-4 h-4 text-accent-primary" />
                <span>Dribbble</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-accent-primary" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <p>
            © {new Date().getFullYear()} Bilal Mahesaniya. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Crafted with Next.js &amp; Tailwind</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-surface-alt border border-border-subtle hover:border-accent-primary hover:text-text-primary transition-all text-xs font-mono focus-visible:outline-accent-primary"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
