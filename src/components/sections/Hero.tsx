"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PERSONAL_INFO } from "@/lib/constants";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".hero-animate");

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    },
    { scope: containerRef }
  );

  const stats = [
    { label: "Years Exp.", value: "6.5+" },
    { label: "Users Served", value: "50K+" },
    { label: "Lighthouse Score", value: "95+" },
    { label: "Production Apps", value: "15+" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Mesh Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-[120px] opacity-70" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-sky-500/15 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          {/* Status Badge */}
          <div className="hero-animate inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span>Open to PAN India &amp; Remote (US/EU)</span>
          </div>

          {/* Main Greeting & Name */}
          <div className="hero-animate">
            <span className="text-lg font-medium text-cyan-500 sm:text-xl">
              Hello, I&apos;m
            </span>
            <h1 className="mt-1 font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
              Kumar <span className="gradient-text">Kartikey</span>
            </h1>
          </div>

          {/* Subtitle / Role Tagline */}
          <p className="hero-animate text-xl font-medium text-[var(--text-secondary)] sm:text-2xl md:text-3xl max-w-3xl leading-snug">
            Senior Frontend Engineer architecting <span className="text-[var(--text-primary)] font-semibold">AI-powered SaaS</span>, scalable web apps &amp; high-performance design systems.
          </p>

          <p className="hero-animate text-base text-[var(--text-muted)] sm:text-lg max-w-2xl">
            Specialized in Next.js 16, React, TypeScript, React Native &amp; GSAP — with a proven track record of boosting LCP performance by 40% and delivering software serving 50,000+ users.
          </p>

          {/* Action CTAs */}
          <div className="hero-animate flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton>
              <Button href="#projects" variant="primary" size="lg">
                Explore Work
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button href="#contact" variant="secondary" size="lg">
                Get In Touch
              </Button>
            </MagneticButton>

            <Button
              href="https://drive.google.com/file/d/12ibCSR9kTBoX57rgNpt4LZCFpj6INueR/view?usp=sharing"
              external
              variant="ghost"
              size="lg"
            >
              Resume PDF ↗
            </Button>
          </div>

          {/* Hero Metrics / Stats Grid */}
          <div className="hero-animate mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 w-full pt-8 border-t border-[var(--bg-card-border)]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel rounded-xl p-4 border border-[var(--bg-card-border)] hover:border-cyan-500/30 transition-colors"
              >
                <div className="font-heading text-3xl font-bold gradient-text sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
