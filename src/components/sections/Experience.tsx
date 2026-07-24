"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { EXPERIENCES } from "@/lib/constants";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".timeline-card");

      gsap.fromTo(
        cards,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
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
    <section id="experience" ref={containerRef} className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Work Experience"
          subtitle="6.5+ years of delivering high-impact frontend architecture across healthcare, insurance, construction, and e-commerce SaaS products."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 md:ml-12 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="timeline-card relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg-primary)] border-2 border-cyan-500 group-hover:scale-125 group-hover:bg-cyan-500 transition-all">
                <span className="h-2 w-2 rounded-full bg-cyan-500 group-hover:bg-white transition-colors" />
              </div>

              <Card hoverEffect className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--bg-card-border)] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading">
                      {exp.role}
                    </h3>
                    <span className="text-base font-medium text-cyan-500">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col items-start sm:items-end">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-purple-400 glass-panel rounded-full border border-purple-500/20">
                      {exp.period}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] mt-1">{exp.location}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="flex flex-col gap-2.5 my-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--bg-card-border)]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] bg-cyan-500/10 rounded-md border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
