"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Counter } from "@/components/ui/Counter";
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
        y: "-=10",
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
    { label: "Years Experience", end: 7, prefix: "", suffix: "+" },
    { label: "Users Served", end: 50, prefix: "", suffix: "K+" },
    { label: "Lighthouse Target", end: 90, prefix: "", suffix: "+/100" },
    { label: "Production Apps", end: 100, prefix: "", suffix: "+" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-[92vh] flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Lights & Grid Pattern */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-[#2B5866]/30 via-[#488293]/20 to-[#709FA8]/30 blur-[140px] opacity-80" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-[#2B5866]/20 blur-[130px]" />

      {/* Background Circuit / Grid SVG overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column — Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Expert UI Badge */}
            <div className="hero-animate inline-flex items-center gap-2.5 rounded-full bg-[#2B5866]/40 px-4 py-1.5 border border-[#709FA8]/60 text-xs font-bold uppercase tracking-widest text-[#709FA8] shadow-lg shadow-[#2B5866]/20 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#709FA8] animate-ping" />
              <span>Senior Frontend Engineer &amp; UI Expert</span>
            </div>

            {/* Main Name Heading */}
            <div className="hero-animate">
              <span className="text-lg font-semibold text-[#709FA8] sm:text-xl tracking-wide">
                Crafting Exceptional Digital Products
              </span>
              <h1 className="mt-1 font-heading text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[var(--text-primary)] leading-[1.05]">
                Kumar <span className="gradient-text text-[#709FA8]">Kartikey</span>
              </h1>
            </div>

            {/* Subtitle / Role Statement */}
            <p className="hero-animate text-lg sm:text-2xl font-medium text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              <strong className="text-[var(--text-primary)] font-bold">7+ Years</strong>&nbsp; of
              engineering high-performance UI/UX, AI-powered SaaS platforms &amp; modern web
              applications.
            </p>

            <p className="hero-animate text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
              Specialized in Next.js 16, TypeScript, Tailwind CSS v4 &amp; GSAP animations —
              creating blazing-fast web experiences scoring 90+ on Google PageSpeed Insights.
            </p>

            {/* Interactive CTAs */}
            <div className="hero-animate flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto">
                <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto">
                  Explore Showcase 🚀
                </Button>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Let&apos;s Connect
                </Button>
              </MagneticButton>

              <Button
                href="https://drive.google.com/file/d/12ibCSR9kTBoX57rgNpt4LZCFpj6INueR/view?usp=sharing"
                external
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Resume PDF ↗
              </Button>
            </div>
          </div>

          {/* Right Column — Code Window Interactive 3D Card */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            {/* Floating Graphic Badge top right */}
            <div className="hero-float hidden sm:flex absolute -top-6 -right-2 z-20 glass-panel rounded-2xl p-3 sm:p-4 border border-[#709FA8]/40 shadow-xl shadow-[#2B5866]/20 backdrop-blur-xl items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2B5866] to-[#709FA8] text-white font-bold text-lg">
                ⚡
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">LCP Optimized</div>
                <div className="text-[10px] text-[#709FA8] font-mono">90+/100 Lighthouse</div>
              </div>
            </div>

            {/* Floating Badge bottom left */}
            <div className="hero-float hidden sm:flex absolute -bottom-6 -left-4 z-20 glass-panel rounded-2xl p-3 sm:p-4 border border-[#488293]/40 shadow-xl shadow-[#488293]/20 backdrop-blur-xl items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#488293] to-[#709FA8] text-white font-bold text-lg">
                🎨
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  UI/UX Architecture
                </div>
                <div className="text-[10px] text-[#709FA8] font-mono">7+ Yrs Expertise</div>
              </div>
            </div>

            {/* Interactive 3D Code Snippet Card */}
            <div
              ref={heroCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-[var(--bg-card-border)] shadow-2xl shadow-[#2B5866]/20 transition-transform duration-200 cursor-pointer overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card Top Header / Code Window Style */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[var(--bg-card-border)]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-[#709FA8]">kartikey.tsx</span>
              </div>

              {/* Code Snippet Visual Representation */}
              <div className="py-4 sm:py-6 font-mono text-xs leading-relaxed space-y-2 text-[var(--text-secondary)]">
                <div>
                  <span className="text-[#709FA8]">const</span>{" "}
                  <span className="text-[#488293]">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">name:</span>{" "}
                  <span className="text-white font-bold">&quot;Kumar Kartikey&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">role:</span>{" "}
                  <span className="text-[#709FA8]">
                    &quot;Senior Frontend Engineer &amp; UI Expert&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">experience:</span>{" "}
                  <span className="text-[#B1B8C0]">&quot;7+ Years&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">stack:</span> [
                  <span className="text-[#709FA8]">&quot;Next.js 16&quot;</span>,{" "}
                  <span className="text-[#488293]">&quot;GSAP&quot;</span>,{" "}
                  <span className="text-[#709FA8]">&quot;Tailwind v4&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text-muted)]">passion:</span>{" "}
                  <span className="text-white font-bold">
                    &quot;Crafting 90+/100 UI &amp; AI UX&quot;
                  </span>
                  ,
                </div>
                <div>&#125;;</div>
              </div>

              {/* Skill Visual Chips inside card */}
              <div className="pt-4 border-t border-[var(--bg-card-border)] flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#2B5866]/30 text-[#709FA8] border border-[#709FA8]/30">
                  Next.js App Router
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#488293]/30 text-[#B1B8C0] border border-[#488293]/30">
                  GSAP Animations
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#2B5866]/30 text-white border border-[#2B5866]/50">
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
              className="glass-panel rounded-2xl p-4 sm:p-6 border border-[var(--bg-card-border)] hover:border-[#709FA8]/40 hover:shadow-xl hover:shadow-[#2B5866]/10 transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-primary)] group-hover:scale-105 transition-transform">
                <Counter
                  end={stat.end}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix}
                  className="gradient-text text-[#709FA8]"
                />
              </div>
              <div className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
