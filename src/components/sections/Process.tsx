"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PROCESS_STEPS } from "@/lib/constants";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2B5866]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#709FA8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Methodology & Execution"
          title="How We Deliver Results"
          subtitle="A transparent, battle-tested 4-step engineering process designed to turn complex UI requirements into high-performing software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {PROCESS_STEPS.map((step) => (
            <Card
              key={step.stepNumber}
              className="p-8 flex flex-col justify-between hover:border-[#709FA8]/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-black text-[#2B5866] dark:text-[#709FA8] font-mono tracking-tighter">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#2B5866] dark:text-[#709FA8] font-bold px-3 py-1 rounded-full bg-[#2B5866]/10 dark:bg-[#709FA8]/10 border border-[#2B5866]/20 dark:border-[#709FA8]/20">
                    Phase {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#2B5866] dark:text-[#709FA8] mb-4">
                  {step.subtitle}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--bg-card-border)]">
                <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                  Key Deliverables:
                </div>
                <ul className="space-y-1.5">
                  {step.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-center gap-2 text-xs text-[var(--text-muted)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2B5866] dark:bg-[#709FA8]" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Process CTA Banner */}
        <div className="mt-12 p-8 rounded-2xl glass-panel border border-[var(--bg-card-border)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-heading text-[var(--text-primary)]">
              Ready to start your project with a proven process?
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Let&apos;s map out your project scope, technical timeline, and architecture setup.
            </p>
          </div>
          <Button href="#contact" variant="primary" size="md" className="shrink-0">
            Start Your Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};
