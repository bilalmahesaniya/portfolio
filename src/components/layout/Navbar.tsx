"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, FileDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Credentials", href: "#credentials", id: "credentials" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Monitor scroll state for blur elevation and active section
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active indicator
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 80;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-surface/90 backdrop-blur-md border-b border-border-subtle shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Personal Brand */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 focus-visible:outline-accent-primary"
        >
          <div className="w-10 h-10 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-center justify-center font-heading font-bold text-accent-primary text-base group-hover:border-accent-primary/60 transition-colors">
            BM
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-text-primary text-sm tracking-wide group-hover:text-accent-primary transition-colors">
              Bilal Mahesaniya
            </span>
            <span className="font-mono text-[11px] text-text-secondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
              Junior UI/UX Designer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-bg-surface-alt/60 border border-border-subtle px-3 py-1.5 rounded-full backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200",
                  isActive
                    ? "text-white bg-accent-primary shadow-sm"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-surface-alt"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/kage"
            className="focus-visible:outline-none"
          >
            <Button variant="outline" size="sm" className="gap-1.5 border-accent-secondary/30 text-accent-secondary hover:bg-accent-secondary/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D World</span>
            </Button>
          </Link>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:outline-none"
          >
            <Button variant="secondary" size="sm" className="gap-2">
              <FileDown className="w-3.5 h-3.5 text-accent-secondary" />
              <span>Resume</span>
            </Button>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="focus-visible:outline-none"
          >
            <Button variant="primary" size="sm" className="gap-1.5">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-bg-surface-alt border border-border-subtle flex items-center justify-center text-text-primary hover:text-accent-primary transition-colors focus-visible:outline-accent-primary"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[69px] bg-bg-primary/95 backdrop-blur-xl border-t border-border-subtle z-40 flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-4 pt-2">
            <p className="font-mono text-xs text-text-secondary uppercase tracking-widest px-3">
              Navigation
            </p>
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-base font-heading font-medium transition-colors",
                      isActive
                        ? "bg-accent-primary/15 text-accent-primary border border-accent-primary/25"
                        : "text-text-primary hover:bg-bg-surface-alt"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-text-secondary">
                      {item.href}
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Mobile CTAs & Status */}
          <div className="space-y-4 pt-6 border-t border-border-subtle">
            <div className="flex items-center gap-2 px-2 text-xs font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              Available for junior roles &amp; freelance projects
            </div>

            <div className="space-y-2">
              <Link
                href="/kage"
                className="w-full block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" size="md" className="w-full gap-2 border-accent-secondary/30 text-accent-secondary hover:bg-accent-secondary/10">
                  <Sparkles className="w-4 h-4" />
                  <span>Interactive 3D World</span>
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="secondary" size="md" className="w-full gap-2">
                  <FileDown className="w-4 h-4 text-accent-secondary" />
                  <span>Resume</span>
                </Button>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full"
              >
                <Button variant="primary" size="md" className="w-full gap-1.5">
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
