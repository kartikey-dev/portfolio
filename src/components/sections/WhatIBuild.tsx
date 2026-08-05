"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WHAT_I_BUILD_SERVICES } from "@/lib/constants";

export const WhatIBuild: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2B5866]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#709FA8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Solutions & Capabilities"
          title="What I Build"
          subtitle="High-impact web, mobile, AI, and enterprise software solutions engineered for startups, scaleups, and global enterprise clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {WHAT_I_BUILD_SERVICES.map((service, index) => (
            <Card
              key={service.id}
              className="group p-6 flex flex-col justify-between hover:border-[#709FA8]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-sm dark:bg-[#2B5866]/30 dark:text-[#709FA8] dark:border-[#709FA8]/30 font-mono text-xs font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-700 dark:text-[#709FA8] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#709FA8]/10 border border-slate-300 dark:border-[#709FA8]/20">
                    Production Ready
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading mb-2.5 group-hover:text-[#2B5866] dark:group-hover:text-[#709FA8] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--bg-card-border)] flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[var(--text-muted)] bg-[var(--bg-primary)] px-2 py-0.5 rounded border border-[var(--bg-card-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-[#2B5866] dark:text-[#709FA8] hover:text-[var(--text-primary)] transition-colors gap-1 pt-1"
                >
                  <span>Inquire for {service.title}</span>
                  <span>→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
