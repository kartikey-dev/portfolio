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
      const progressBars = containerRef.current.querySelectorAll(".skill-bar-fill");

      gsap.fromTo(
        categories,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        progressBars,
        { width: "0%" },
        {
          width: (index, target) => target.getAttribute("data-width") || "85%",
          duration: 1.2,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const getPercentage = (level?: string) => {
    if (level === "Expert") return "95%";
    if (level === "Advanced") return "85%";
    return "75%";
  };

  return (
    <section id="skills" ref={containerRef} className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Tech Stack &amp; Skills"
          subtitle="Comprehensive tools, frameworks, and methodologies mastered across 7+ years of production frontend engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <Card key={cat.title} className="skill-category flex flex-col justify-between hover:border-[#709FA8]/40 transition-colors">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading mb-5 pb-3 border-b border-[var(--bg-card-border)] flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#709FA8] animate-pulse" />
                    {cat.title}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)] font-normal">
                    {cat.skills.length} Stack Tools
                  </span>
                </h3>

                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-[var(--text-primary)]">{skill.name}</span>
                        <span
                          className={`font-mono text-[10px] uppercase ${
                            skill.level === "Expert"
                              ? "text-[#709FA8] font-bold"
                              : skill.level === "Advanced"
                              ? "text-[#B1B8C0]"
                              : "text-[var(--text-muted)]"
                          }`}
                        >
                          {skill.level} ({getPercentage(skill.level)})
                        </span>
                      </div>

                      {/* Visual Graphic Skill Meter Bar */}
                      <div className="h-2 w-full rounded-full bg-[var(--bg-primary)] border border-[var(--bg-card-border)] overflow-hidden">
                        <div
                          className={`skill-bar-fill h-full rounded-full transition-all duration-500 ${
                            skill.level === "Expert"
                              ? "bg-gradient-to-r from-[#2B5866] via-[#488293] to-[#709FA8]"
                              : skill.level === "Advanced"
                              ? "bg-gradient-to-r from-[#488293] to-[#709FA8]"
                              : "bg-gradient-to-r from-[#2B5866] to-[#488293]"
                          }`}
                          data-width={getPercentage(skill.level)}
                          style={{ width: "0%" }}
                        />
                      </div>
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
