"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsapConfig";

export function useSmoothScroll() {
  useEffect(() => {
    // Refresh GSAP ScrollTrigger after component mounts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}
