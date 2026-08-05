"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Structured Data JSON-LD FAQPage for Google & AI Engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#709FA8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Answers & Technical Insights"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Kumar Kartikey — services, technology stack, timelines, pricing, and AI-ready engineering standards."
        />

        <div className="mt-12 flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl glass-panel border border-[var(--bg-card-border)] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[#2B5866] dark:hover:text-[#709FA8] transition-colors focus:outline-none rounded-2xl"
                >
                  <span>{item.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-[#2B5866]/10 border border-slate-300 dark:border-[#709FA8]/30 text-slate-900 dark:text-accent-teal shadow-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height={16}
                      width={16}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-6 pb-6 pt-1 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--bg-card-border)]/50"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-[var(--bg-card-border)]">
          <p className="text-sm text-[var(--text-secondary)]">
            Have a custom query or specific project requirement?
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 font-heading font-bold text-[#2B5866] dark:text-[#709FA8] hover:text-[var(--text-primary)] text-base transition-colors"
          >
            Ask Kartikey Directly →
          </a>
        </div>
      </div>
    </section>
  );
};
