"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--bg-card-border)] bg-[var(--bg-secondary)]/50 backdrop-blur-lg py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 3D KK Monogram Portrait Logo Showcase in Footer */}
        <div className="mb-10 flex flex-col items-center justify-center">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-3xl border-2 border-[#709FA8]/50 shadow-2xl shadow-[#2B5866]/40 bg-[#1C2023]/80 p-1 group transition-all duration-300 hover:scale-105 hover:border-[#709FA8]">
            <Image
              src="/images/kk-monogram-logo.png"
              alt="Kumar Kartikey 3D Monogram Logo"
              width={128}
              height={128}
              className="h-full w-full object-cover rounded-2xl"
              priority
            />
          </div>
          <span className="mt-3 text-[11px] font-mono uppercase tracking-widest text-[#709FA8] font-bold">
            Kumar Kartikey • UI Architect &amp; Frontend Lead
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-[var(--bg-card-border)]/60">
          {/* Copyright & Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-heading text-base font-bold tracking-tight text-[var(--text-primary)]">
              <span className="text-[#709FA8]">Kumar Kartikey</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#2B5866]/30 text-[#709FA8] border border-[#709FA8]/30">
                Frontend Lead
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] text-center md:text-left">
              &copy; {currentYear} Kumar Kartikey. All rights reserved. Built with Next.js 16, TypeScript, Tailwind CSS v4 &amp; GSAP.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-panel border border-[var(--bg-card-border)] text-[var(--text-secondary)] hover:text-[#709FA8] hover:border-[#709FA8]/50 transition-all"
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
              className="flex h-10 w-10 items-center justify-center rounded-full glass-panel border border-[var(--bg-card-border)] text-[var(--text-secondary)] hover:text-[#709FA8] hover:border-[#709FA8]/50 transition-all"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-panel border border-[var(--bg-card-border)] text-[var(--text-secondary)] hover:text-[#709FA8] hover:border-[#709FA8]/50 transition-all"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[#709FA8] glass-panel px-4 py-2 rounded-full border border-[var(--bg-card-border)] hover:border-[#709FA8]/50 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
