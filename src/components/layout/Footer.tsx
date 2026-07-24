"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/lib/constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--bg-card-border)] bg-[var(--bg-primary)] pt-20 pb-12 overflow-hidden transition-colors">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[350px] w-[800px] rounded-full bg-gradient-to-t from-[#2B5866]/20 via-[#488293]/10 to-transparent blur-[140px] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* High-Impact Gradient CTA Callout Box */}
        <div className="relative mb-20 overflow-hidden rounded-3xl border border-[#709FA8]/40 bg-gradient-to-r from-[var(--bg-secondary)] via-[#2B5866]/20 to-[var(--bg-secondary)] p-8 sm:p-12 shadow-2xl shadow-[#2B5866]/10 backdrop-blur-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-[#709FA8]/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2B5866]/20 px-3 py-1 border border-[#709FA8]/40 text-xs font-semibold text-[#709FA8] mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Senior Frontend Engineering &amp; UI Consulting</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                Let&apos;s Build Something <span className="gradient-text">Exceptional</span>{" "}
                Together
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Whether you need a high-performance Next.js application, an AI-powered SaaS
                interface, or expert frontend engineering — let&apos;s connect and bring your vision
                to life.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Let&apos;s Talk 🚀
              </Button>
              <Button
                href="#projects"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Explore Projects 💼
              </Button>
            </div>
          </div>
        </div>

        {/* Modular 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[var(--bg-card-border)]/60">
          {/* Column 1: Executive Brand Info (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl font-black tracking-tight text-[var(--text-primary)]">
                Kumar <span className="gradient-text">Kartikey</span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#2B5866]/20 text-[#709FA8] border border-[#709FA8]/30">
                7+ Yrs Exp
              </span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
              Senior Frontend Engineer &amp; UI Expert specializing in Next.js 16, TypeScript,
              design systems, and AI-driven user experiences with 100/100 Lighthouse performance
              scores.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl glass-panel border border-[var(--bg-card-border)] text-[var(--text-secondary)] hover:text-[#709FA8] hover:border-[#709FA8]/50 hover:bg-[#2B5866]/30 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl glass-panel border border-[var(--bg-card-border)] text-[var(--text-secondary)] hover:text-[#709FA8] hover:border-[#709FA8]/50 hover:bg-[#2B5866]/30 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl glass-panel border border-[var(--bg-card-border)] text-[var(--text-secondary)] hover:text-[#709FA8] hover:border-[#709FA8]/50 hover:bg-[#2B5866]/30 transition-all"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#709FA8] font-bold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-secondary)] font-medium">
              <li>
                <a href="#hero" className="hover:text-[#709FA8] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#709FA8] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#709FA8] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#709FA8] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#709FA8] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#709FA8] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Specializations (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#709FA8] font-bold">
              Specializations
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)] font-medium">
              <li className="text-[var(--text-secondary)] font-semibold">Next.js 16 App Router</li>
              <li className="text-[var(--text-secondary)] font-semibold">TypeScript &amp; TDD</li>
              <li className="text-[var(--text-secondary)] font-semibold">GSAP Animations</li>
              <li className="text-[var(--text-secondary)] font-semibold">Tailwind CSS v4</li>
              <li className="text-[var(--text-secondary)] font-semibold">
                Core Web Vitals 100/100
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#709FA8] font-bold">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-3 text-xs text-[var(--text-secondary)]">
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                  Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#709FA8] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                  Phone
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-semibold text-[var(--text-primary)] hover:text-[#709FA8] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                  Location
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  📍 {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sleek Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
            <span>&copy; {currentYear} Kumar Kartikey. All rights reserved.</span>
            <span className="hidden sm:inline text-[var(--bg-card-border)]">•</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2B5866]/20 text-[#709FA8] border border-[#709FA8]/30 font-mono text-[10px] font-bold">
              ⚡ 100/100 Core Web Vitals Optimized
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[#709FA8] glass-panel px-4 py-2 rounded-full border border-[var(--bg-card-border)] hover:border-[#709FA8]/60 hover:bg-[#2B5866]/20 transition-all cursor-pointer shadow-md"
          >
            <span>Back to top</span>
            <svg
              className="h-4 w-4 transform group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
