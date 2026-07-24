"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PERSONAL_INFO, EDUCATIONS, CERTIFICATIONS, ACHIEVEMENTS } from "@/lib/constants";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".about-animate");

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title="About Me"
          subtitle="Passionate Senior Frontend Engineer focused on performance, design systems, and AI-driven user experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Card */}
          <Card className="about-animate lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading">
              Engineering Scalable UI &amp; AI Products
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--bg-card-border)]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Location</span>
                <p className="text-sm font-medium text-[var(--text-primary)]">{PERSONAL_INFO.location}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Availability</span>
                <p className="text-sm font-medium text-[var(--text-primary)]">{PERSONAL_INFO.availability}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Email</span>
                <p className="text-sm font-medium text-cyan-500">{PERSONAL_INFO.email}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Phone</span>
                <p className="text-sm font-medium text-[var(--text-primary)]">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            {/* Achievements list */}
            <div className="pt-4 border-t border-[var(--bg-card-border)] flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-500">Key Recognition</h4>
              <div className="grid grid-cols-1 gap-2">
                {ACHIEVEMENTS.map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                    <span className="text-cyan-500 text-base">🏆</span>
                    <div>
                      <strong className="text-[var(--text-primary)] font-medium">{item.title}</strong> — {item.description} ({item.issuer})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Education & Certifications Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Education */}
            <Card className="about-animate">
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-4 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <div className="flex flex-col gap-4">
                {EDUCATIONS.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-cyan-500/40 pl-4 py-1">
                    <h4 className="text-base font-semibold text-[var(--text-primary)]">{edu.degree}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{edu.institution} • {edu.location}</p>
                    <span className="text-xs text-[var(--text-muted)]">{edu.year}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications */}
            <Card className="about-animate">
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-4 flex items-center gap-2">
                <span>📜</span> Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="border-l-2 border-purple-500/40 pl-4 py-1">
                    <h4 className="text-base font-semibold text-[var(--text-primary)]">{cert.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">Issued by {cert.issuer} • {cert.date}</p>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-cyan-500 hover:underline mt-1"
                      >
                        Verify Certificate ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
