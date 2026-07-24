"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  gradient?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  as: Component = "span",
  delay = 0,
  stagger = 0.04,
  gradient = false,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const wordElements = containerRef.current.querySelectorAll(".word-reveal");
      if (wordElements.length === 0) return;

      gsap.fromTo(
        wordElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          stagger,
          ease: "power2.out",
        }
      );
    },
    { scope: containerRef, dependencies: [text, delay] }
  );

  return (
    <Component
      ref={containerRef as React.Ref<never>}
      className={`inline-block ${gradient ? "gradient-text" : ""} ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="word-reveal inline-block whitespace-pre mr-[0.25em]">
          {word}
        </span>
      ))}
    </Component>
  );
};
