"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const categories = containerRef.current.querySelectorAll(".skill-category");

      gsap.fromTo(
        categories,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
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
    <section id="skills" ref={containerRef} className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Tech Stack &amp; Skills"
          subtitle="Comprehensive tools, frameworks, and methodologies mastered across 6.5+ years of production frontend engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <Card key={cat.title} className="skill-category flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading mb-4 pb-2 border-b border-[var(--bg-card-border)] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  {cat.title}
                </h3>

                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                            skill.level === "Expert"
                              ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                              : skill.level === "Advanced"
                              ? "bg-purple-500/15 text-purple-400 border border-purple-500/30"
                              : "bg-[var(--bg-card-border)] text-[var(--text-secondary)]"
                          }`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
