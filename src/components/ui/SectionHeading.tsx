"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export interface SectionHeadingProps {
  title: string;
  badge?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  badge,
  subtitle,
  centered = false,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(containerRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`mb-12 flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-slate-900 text-white border border-slate-900 dark:bg-white dark:text-[#709FA8] dark:border-[#709FA8]/40 rounded-full mb-3 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 dark:bg-[#709FA8] animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#2B5866] via-[#488293] to-[#709FA8] ${centered ? "mx-auto" : ""
          }`}
      />
    </div>
  );
};
