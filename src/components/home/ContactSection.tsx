"use client";

import * as React from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  FileDown,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  projectType: "UI/UX Design" | "Interactive Prototyping & Design Systems" | "Full-Time Opportunity" | "Consultation / Other";
  budget: string;
  message: string;
  _gotcha: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  projectType: "UI/UX Design",
  budget: "",
  message: "",
  _gotcha: "",
};

export function ContactSection() {
  const [formData, setFormData] = React.useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Message must be at least 15 characters long.";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        setFormData(INITIAL_FORM);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again or email directly.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again or email contact@bilalmahesaniya.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <Badge variant="mint" size="md">
            05 — CONNECT &amp; COLLABORATE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Let&apos;s Build Something Remarkable
          </h2>
          <p className="text-base text-text-secondary font-sans leading-relaxed">
            Interested in discussing an internship, junior design position, or freelance project?
            Send an inquiry or reach out directly.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-6">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Contact Information
              </h3>
              <p className="text-sm text-text-secondary font-sans leading-relaxed">
                Whether you have a specific opening or want to evaluate design craft, my inbox is
                always open. Responses are delivered within 24 hours.
              </p>

              <div className="space-y-4 text-sm font-sans pt-2">
                <a
                  href="mailto:contact@bilalmahesaniya.com"
                  className="flex items-center gap-3 text-text-primary hover:text-accent-primary transition-colors p-3 rounded-xl bg-bg-surface-alt border border-border-subtle"
                >
                  <div className="w-9 h-9 rounded-lg bg-bg-surface flex items-center justify-center text-accent-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-secondary block">Direct Email</span>
                    <span className="font-medium text-text-primary text-sm">
                      contact@bilalmahesaniya.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-text-primary p-3 rounded-xl bg-bg-surface-alt border border-border-subtle">
                  <div className="w-9 h-9 rounded-lg bg-bg-surface flex items-center justify-center text-accent-secondary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-secondary block">Location</span>
                    <span className="font-medium text-text-primary text-sm">
                      Gujarat, India • Remote Worldwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Link Quick Access */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-text-secondary block uppercase">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-bg-surface-alt border border-border-subtle text-text-primary hover:border-accent-primary transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-accent-primary" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-bg-surface-alt border border-border-subtle text-text-primary hover:border-accent-primary transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-accent-secondary" />
                    <span>Behance</span>
                  </a>
                </div>
              </div>

              {/* Resume CTA */}
              <div className="pt-2">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="secondary" size="md" className="w-full gap-2">
                    <FileDown className="w-4 h-4 text-accent-secondary" />
                    <span>View &amp; Download Bilal&apos;s Resume</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-bg-surface border border-border-subtle space-y-6">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-accent-secondary/10 border border-accent-secondary/30 text-center space-y-4 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-accent-secondary mx-auto" />
                  <div className="space-y-1">
                    <h4 className="text-lg font-heading font-bold text-text-primary">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-text-secondary font-sans max-w-sm mx-auto">
                      Thank you for reaching out. Bilal has received your submission and will get
                      back to you shortly.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-error/10 border border-error/30 text-error flex items-center gap-2 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot anti-spam field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_gotcha">Do not fill this field</label>
                    <input
                      type="text"
                      id="_gotcha"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={(e) =>
                        setFormData({ ...formData, _gotcha: e.target.value })
                      }
                    />
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono text-text-secondary block"
                      >
                        Your Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Sarah Connor"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full h-11 px-3.5 rounded-xl bg-bg-surface-alt border ${
                          errors.name ? "border-error" : "border-border-subtle"
                        } text-text-primary text-sm font-sans placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors`}
                      />
                      {errors.name && (
                        <span className="text-[11px] font-mono text-error block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono text-text-secondary block"
                      >
                        Your Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full h-11 px-3.5 rounded-xl bg-bg-surface-alt border ${
                          errors.email ? "border-error" : "border-border-subtle"
                        } text-text-primary text-sm font-sans placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors`}
                      />
                      {errors.email && (
                        <span className="text-[11px] font-mono text-error block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inquiry Type & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="projectType"
                        className="text-xs font-mono text-text-secondary block"
                      >
                        Inquiry Nature
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value as any,
                          })
                        }
                        className="w-full h-11 px-3 rounded-xl bg-bg-surface-alt border border-border-subtle text-text-primary text-sm font-sans focus:outline-none focus:border-accent-primary transition-colors"
                      >
                        <option value="UI/UX Design">UI/UX Design Role / Project</option>
                        <option value="Interactive Prototyping & Design Systems">Interactive Prototyping &amp; Design Systems</option>
                        <option value="Full-Time Opportunity">Full-Time Junior Position</option>
                        <option value="Consultation / Other">Consultation / Internship</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="budget"
                        className="text-xs font-mono text-text-secondary block"
                      >
                        Expected Timeline / Role (Optional)
                      </label>
                      <input
                        type="text"
                        id="budget"
                        placeholder="e.g. Q3 Internship / 3 Weeks"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-bg-surface-alt border border-border-subtle text-text-primary text-sm font-sans placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono text-text-secondary block"
                    >
                      Message / Project Scope <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Hi Bilal, we loved your PulseOps and Nova Pay case studies and would like to interview you for a junior UI/UX position..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full p-3.5 rounded-xl bg-bg-surface-alt border ${
                        errors.message ? "border-error" : "border-border-subtle"
                      } text-text-primary text-sm font-sans placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors resize-none`}
                    />
                    {errors.message && (
                      <span className="text-[11px] font-mono text-error block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
