"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Initial theme detection
    const isDark = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--bg-card-border)] py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo using Brushed Metallic Nameplate Badge */}
          <Link
            href="#"
            aria-label="Kumar Kartikey Nameplate Logo"
            className="group flex shrink-0 items-center justify-center font-heading text-xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            <div className="relative shrink-0 flex items-center group-hover:scale-105 transition-all">
              <Image
                src="/images/kk-nameplate.jpg"
                alt="Kumar Kartikey Metallic Nameplate Logo"
                width={160}
                height={48}
                className="h-9 sm:h-11 w-auto object-contain rounded-lg border border-[var(--bg-card-border)] shadow-sm"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full glass-panel px-4 py-1.5 border border-[var(--bg-card-border)] shadow-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[#2B5866] dark:hover:text-[#709FA8] rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Hire Me CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-panel border border-[var(--bg-card-border)] text-[var(--text-primary)] hover:border-[#2B5866]/50 dark:hover:border-[#709FA8]/50 hover:text-[#2B5866] dark:hover:text-[#709FA8] transition-all"
            >
              {theme === "dark" ? (
                // Sun Icon
                <svg
                  className="h-5 w-5 text-[#709FA8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon Icon
                <svg
                  className="h-5 w-5 text-[#2B5866]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <a
              href="https://wa.me/919050102547?text=Hi%20Kartikey,%20I'm%20interested%20in%20discussing%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-panel border border-[var(--bg-card-border)] text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all"
              title="Chat on WhatsApp"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            <Button href="#contact" variant="primary" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full glass-panel border border-[var(--bg-card-border)] text-[var(--text-primary)]"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl glass-panel border border-[var(--bg-card-border)] text-[var(--text-primary)]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-panel rounded-2xl p-6 border border-[var(--bg-card-border)] flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-[var(--text-primary)] hover:text-[#2B5866] dark:hover:text-[#709FA8] transition-colors py-2 border-b border-[var(--bg-card-border)]/50 last:border-none"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" size="md" className="mt-2 w-full">
              Let&apos;s Talk
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
