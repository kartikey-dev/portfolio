"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Counter } from "@/components/ui/Counter";
import { PERSONAL_INFO } from "@/lib/constants";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".hero-animate");

      // Staggered text & button entrance
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      // Floating graphic elements animation
      const floaters = containerRef.current.querySelectorAll(".hero-float");
      gsap.to(floaters, {
        y: "-=12",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    },
    { scope: containerRef }
  );

  // Mouse tilt effect for interactive right banner card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroCardRef.current) return;
    const { left, top, width, height } = heroCardRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) / (width / 2);
    const y = (e.clientY - (top + height / 2)) / (height / 2);

    gsap.to(heroCardRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    if (!heroCardRef.current) return;
    gsap.to(heroCardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const stats = [
    { label: "Years Experience", end: 7, suffix: "+" },
    { label: "Users Served", end: 50, suffix: "K+" },
    { label: "Lighthouse Target", end: 100, suffix: "/100" },
    { label: "Production Apps", end: 15, suffix: "+" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-[92vh] flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Lights & Grid Pattern */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-500/15 to-purple-600/25 blur-[140px] opacity-80" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[130px]" />
      
      {/* Subtle Background Circuit / Grid SVG overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Expert UI Badge */}
            <div className="hero-animate inline-flex items-center gap-2.5 rounded-full glass-panel px-4 py-1.5 border border-cyan-500/40 text-xs font-bold uppercase tracking-widest text-cyan-400 shadow-lg shadow-cyan-500/10">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Senior Frontend Architect &amp; UI Expert</span>
            </div>

            {/* Main Name Heading */}
            <div className="hero-animate">
              <span className="text-lg font-semibold text-cyan-500 sm:text-xl tracking-wide">
                Crafting Exceptional Digital Products
              </span>
              <h1 className="mt-1 font-heading text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-[var(--text-primary)] leading-[1.05]">
                Kumar <span className="gradient-text">Kartikey</span>
              </h1>
            </div>

            {/* Subtitle / Role Statement */}
            <p className="hero-animate text-xl font-medium text-[var(--text-secondary)] sm:text-2xl leading-relaxed max-w-2xl">
              <strong className="text-[var(--text-primary)] font-bold">7+ Years</strong> of designing &amp; architecting high-performance UI/UX, AI-powered SaaS platforms &amp; modern web applications.
            </p>

            <p className="hero-animate text-sm text-[var(--text-muted)] sm:text-base max-w-xl leading-relaxed">
              Specialized in Next.js 16, TypeScript, Tailwind CSS v4 &amp; GSAP animations — creating blazing-fast web experiences scoring 100 on Google PageSpeed Insights.
            </p>

            {/* Interactive CTAs */}
            <div className="hero-animate flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton>
                <Button href="#projects" variant="primary" size="lg">
                  Explore Showcase 🚀
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button href="#contact" variant="secondary" size="lg">
                  Let&apos;s Connect
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
          </div>

          {/* Right Column — Interactive 3D Graphic Card Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Animated Floating Graphic Badge top right */}
            <div className="hero-float absolute -top-6 -right-2 z-20 glass-panel rounded-2xl p-4 border border-cyan-500/40 shadow-xl shadow-cyan-500/20 backdrop-blur-xl flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-lg">
                ⚡
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">LCP Optimized</div>
                <div className="text-[10px] text-cyan-400 font-mono">100/100 Lighthouse</div>
              </div>
            </div>

            {/* Animated Floating Badge bottom left */}
            <div className="hero-float absolute -bottom-6 -left-4 z-20 glass-panel rounded-2xl p-4 border border-purple-500/40 shadow-xl shadow-purple-500/20 backdrop-blur-xl flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-bold text-lg">
                🎨
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">UI/UX Architecture</div>
                <div className="text-[10px] text-purple-400 font-mono">7+ Yrs Expertise</div>
              </div>
            </div>

            {/* Interactive 3D Card with Tilt */}
            <div
              ref={heroCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md glass-panel rounded-3xl p-8 border border-[var(--bg-card-border)] shadow-2xl shadow-cyan-500/10 transition-transform duration-200 cursor-pointer overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card Top Header / Code Window Style */}
              <div className="flex items-center justify-between pb-6 border-b border-[var(--bg-card-border)]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-cyan-400">kartikey.tsx</span>
              </div>

              {/* Code Snippet Visual Representation */}
              <div className="py-6 font-mono text-xs leading-relaxed space-y-2 text-[var(--text-secondary)]">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">name:</span>{" "}
                  <span className="text-emerald-400">&quot;Kumar Kartikey&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">role:</span>{" "}
                  <span className="text-amber-400">&quot;UI Architect&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">experience:</span>{" "}
                  <span className="text-cyan-400">&quot;7+ Years&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">stack:</span> [
                  <span className="text-purple-400">&quot;Next.js 16&quot;</span>,{" "}
                  <span className="text-purple-400">&quot;GSAP&quot;</span>,{" "}
                  <span className="text-purple-400">&quot;Tailwind v4&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">passion:</span>{" "}
                  <span className="text-emerald-400">&quot;Crafting 100/100 UI&quot;</span>,
                </div>
                <div>&#125;;</div>
              </div>

              {/* Skill Visual Chips inside card */}
              <div className="pt-4 border-t border-[var(--bg-card-border)] flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                  Next.js App Router
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30">
                  GSAP Animations
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Tailwind CSS v4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Counter Metrics Banner */}
        <div className="hero-animate mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 w-full pt-10 border-t border-[var(--bg-card-border)]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel rounded-2xl p-6 border border-[var(--bg-card-border)] hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="font-heading text-4xl sm:text-5xl font-black text-[var(--text-primary)] group-hover:scale-105 transition-transform">
                <Counter end={stat.end} suffix={stat.suffix} className="gradient-text" />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
