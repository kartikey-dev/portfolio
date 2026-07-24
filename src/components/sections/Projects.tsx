"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".project-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="projects" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Showcase"
          title="Featured Projects"
          subtitle="Production-grade AI platforms, healthcare SaaS applications, and modern web applications built test-first."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              gradientBorder
              className="project-card flex flex-col justify-between group hover:border-[#709FA8]/50 transition-all"
            >
              <div>
                {/* Visual Window Mockup Header */}
                <div className="mb-6 rounded-xl bg-gradient-to-br from-[#1C2023] via-[#14181B] to-[#1C2023] p-4 border border-white/10 shadow-inner group-hover:border-[#709FA8]/30 transition-colors">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-[#709FA8]">
                      {project.category} Showcase
                    </span>
                  </div>

                  {/* Graphical Mockup Accent Illustration */}
                  <div className="pt-4 pb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#2B5866]/30 text-[#709FA8] flex items-center justify-center font-bold text-lg border border-[#709FA8]/30">
                        {project.id.includes("pokedex")
                          ? "⚡"
                          : project.category === "Healthcare"
                            ? "🩺"
                            : project.category === "AI"
                              ? "🛡️"
                              : "🏗️"}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{project.title}</div>
                        <div className="text-[10px] text-[#B1B8C0] font-mono">
                          {project.liveUrl ? "Live Production Build" : "100/100 Core Web Vitals"}
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#709FA8] bg-[#2B5866]/30 rounded-full border border-[#709FA8]/30">
                      {project.tags.includes("TDD") ? "TDD Built" : "AI Powered"}
                    </span>
                  </div>
                </div>

                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#709FA8]">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                      <span>★</span> Featured Project
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-black text-[var(--text-primary)] font-heading mb-1 group-hover:text-[#709FA8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-[#709FA8] mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.longDescription || project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6 flex flex-col gap-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Key Features &amp; Architecture
                  </h4>
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                    >
                      <span className="text-[#709FA8] font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Badges & Action Buttons */}
              <div className="pt-4 border-t border-[var(--bg-card-border)] flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold text-[var(--text-secondary)] glass-panel rounded-lg border border-[var(--bg-card-border)] group-hover:border-[#709FA8]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo & Code Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} external variant="primary" size="sm">
                        Live Demo ↗
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} external variant="secondary" size="sm">
                        Source Code ↗
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
