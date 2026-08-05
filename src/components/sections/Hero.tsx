"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Counter } from "@/components/ui/Counter";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";
import { PERSONAL_INFO } from "@/lib/constants";

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
            <div className="hero-animate inline-flex items-center gap-2.5 rounded-full bg-slate-900 text-white border border-slate-900 dark:bg-[#2B5866]/50 dark:border-[#709FA8]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest dark:text-[#709FA8] shadow-md shadow-black/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 dark:bg-[#709FA8] animate-ping" />
              <span>Senior Frontend Engineer &amp; UI Expert</span>
            </div>

            {/* Main Name Heading */}
            <div className="hero-animate">
              <span className="text-lg font-bold text-slate-800 dark:text-[#709FA8] sm:text-xl tracking-wide">
                Crafting Exceptional Digital Products
              </span>
              <h1 className="mt-1 font-heading text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[var(--text-primary)] leading-[1.05]">
                Kumar <span className="gradient-text">Kartikey</span>
              </h1>
            </div>

            {/* Subtitle / Role Statement */}
            <p className="hero-animate text-lg sm:text-2xl font-medium text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              <strong className="text-[var(--text-primary)] font-bold">7+ Years</strong>&nbsp; of
              engineering high-performance UI/UX, AI-powered SaaS platforms, React Native mobile
              apps &amp; custom web solutions.
            </p>

            <p className="hero-animate text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
              Available for full-time Senior Frontend Engineer roles, freelance project development,
              and digital agency technical subcontracting.
            </p>

            {/* Interactive High-Converting CTAs */}
            <div className="hero-animate flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto">
                <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Book Free Consultation 🚀
                </Button>
              </MagneticButton>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Direct WhatsApp 💬
              </a>

              <Button
                href={PERSONAL_INFO.resumeUrl}
                external
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Resume PDF 📄
              </Button>
            </div>
          </div>

          {/* Right Column — Code Window Interactive 3D Card */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            {/* Floating Graphic Badge top right */}
            <div className="hero-float hidden sm:flex absolute -top-6 -right-2 z-20 glass-panel rounded-2xl p-3 sm:p-4 border border-[#2B5866]/30 dark:border-[#709FA8]/40 shadow-xl shadow-[#2B5866]/10 backdrop-blur-xl items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2B5866] to-[#709FA8] text-white font-bold text-lg">
                ⚡
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">LCP Optimized</div>
                <div className="text-[10px] text-[#2B5866] dark:text-[#709FA8] font-mono font-semibold">
                  90+/100 Lighthouse
                </div>
              </div>
            </div>

            {/* Floating Badge bottom left */}
            <div className="hero-float hidden sm:flex absolute -bottom-6 -left-4 z-20 glass-panel rounded-2xl p-3 sm:p-4 border border-[#488293]/30 dark:border-[#488293]/40 shadow-xl shadow-[#488293]/10 backdrop-blur-xl items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#488293] to-[#709FA8] text-white font-bold text-lg">
                🎨
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  UI/UX Architecture
                </div>
                <div className="text-[10px] text-[#2B5866] dark:text-[#709FA8] font-mono font-semibold">
                  7+ Yrs Expertise
                </div>
              </div>
            </div>

            {/* Interactive 3D Code Snippet Card (Dark IDE Window) */}
            <div
              ref={heroCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1C2023] via-[#14181B] to-[#1C2023] border border-white/10 shadow-2xl shadow-black/30 transition-transform duration-200 cursor-pointer overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card Top Header / Code Window Style */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-[#709FA8]">kartikey.tsx</span>
              </div>

              {/* Code Snippet Visual Representation */}
              <div className="py-4 sm:py-6 font-mono text-xs leading-relaxed space-y-2 text-slate-300">
                <div>
                  <span className="text-[#709FA8]">const</span>{" "}
                  <span className="text-[#38bdf8]">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-white font-bold">&quot;Kumar Kartikey&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-[#709FA8]">
                    &quot;Senior Frontend Engineer &amp; UI Expert&quot;
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span>{" "}
                  <span className="text-amber-300">&quot;7+ Years&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-[#709FA8]">&quot;Next.js 16&quot;</span>,{" "}
                  <span className="text-[#38bdf8]">&quot;GSAP&quot;</span>,{" "}
                  <span className="text-[#709FA8]">&quot;Tailwind v4&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">passion:</span>{" "}
                  <span className="text-emerald-400 font-bold">
                    &quot;Crafting 90+/100 UI &amp; AI UX&quot;
                  </span>
                  ,
                </div>
                <div>&#125;;</div>
              </div>

              {/* Skill Visual Chips inside card */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#2B5866]/40 text-[#709FA8] border border-[#709FA8]/30">
                  Next.js App Router
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#488293]/40 text-slate-200 border border-[#488293]/40">
                  GSAP Animations
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
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
