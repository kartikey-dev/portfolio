"use client";

import React, { useState, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/lib/constants";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".contact-animate");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection.");
    }
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Let's Connect"
          title="Get In Touch"
          subtitle="Interested in working together or exploring frontend leadership opportunities? Reach out directly!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card className="contact-animate">
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-6">
                Contact Information
              </h3>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2B5866]/10 dark:bg-[#2B5866]/20 text-[#2B5866] dark:text-[#709FA8] border border-[#2B5866]/20 dark:border-[#709FA8]/30">
                    ✉️
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-base font-medium text-[var(--text-primary)] hover:text-[#2B5866] dark:hover:text-[#709FA8] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#488293]/10 dark:bg-[#488293]/20 text-[#2B5866] dark:text-[#709FA8] border border-[#488293]/20 dark:border-[#488293]/30">
                    📞
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="block text-base font-medium text-[var(--text-primary)] hover:text-[#2B5866] dark:hover:text-[#709FA8] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">
                    💬
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      WhatsApp
                    </span>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base font-medium text-[#25D366] hover:underline"
                    >
                      Chat Instantly on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2B5866]/20 text-[#709FA8] border border-[#709FA8]/30">
                    📍
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Location
                    </span>
                    <p className="text-base font-medium text-[var(--text-primary)]">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-6 pt-4 border-t border-[var(--bg-card-border)] flex items-center gap-2 text-xs font-semibold text-[#709FA8]">
                <span className="h-2 w-2 rounded-full bg-[#709FA8] animate-pulse" />
                <span>⚡ Typical response time: Under 4 hours</span>
              </div>
            </Card>

            <Card className="contact-animate">
              <h4 className="text-base font-bold text-[var(--text-primary)] font-heading mb-2">
                Social Profiles
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mb-4">
                Connect with me on professional networks for code repos, articles, and discussion.
              </p>
              <div className="flex gap-3">
                <Button href={PERSONAL_INFO.github} external variant="secondary" size="sm">
                  GitHub ↗
                </Button>
                <Button href={PERSONAL_INFO.linkedin} external variant="secondary" size="sm">
                  LinkedIn ↗
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form Column */}
          <Card className="contact-animate lg:col-span-7">
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-6">
              Send a Message
            </h3>

            {status === "success" ? (
              <div className="p-6 rounded-xl bg-[#2B5866]/20 border border-[#709FA8]/40 text-[#709FA8] text-center flex flex-col items-center gap-3">
                <span className="text-4xl">🎉</span>
                <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Thank you for reaching out. I will get back to your email (
                  {formData.email || PERSONAL_INFO.email}) as soon as possible.
                </p>
                <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status === "error" && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B5866] dark:text-[#709FA8] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border border-[var(--bg-card-border)] focus:border-[#2B5866] dark:focus:border-[#709FA8] focus:ring-2 focus:ring-[#2B5866]/20 dark:focus:ring-[#709FA8]/20 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B5866] dark:text-[#709FA8] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border border-[var(--bg-card-border)] focus:border-[#2B5866] dark:focus:border-[#709FA8] focus:ring-2 focus:ring-[#2B5866]/20 dark:focus:ring-[#709FA8]/20 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B5866] dark:text-[#709FA8] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border border-[var(--bg-card-border)] focus:border-[#2B5866] dark:focus:border-[#709FA8] focus:ring-2 focus:ring-[#2B5866]/20 dark:focus:ring-[#709FA8]/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B5866] dark:text-[#709FA8] mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] border border-[var(--bg-card-border)] focus:border-[#2B5866] dark:focus:border-[#709FA8] focus:ring-2 focus:ring-[#2B5866]/20 dark:focus:ring-[#709FA8]/20 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-2 w-full sm:w-auto self-start"
                >
                  {status === "submitting" ? "Sending..." : "Send Message 🚀"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
