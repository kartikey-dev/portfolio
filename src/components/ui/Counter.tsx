"use client";

import React, { useRef, useState } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
  className = "",
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useGSAP(
    () => {
      if (!counterRef.current) return;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          setValue(obj.val);
        },
      });
    },
    { scope: counterRef, dependencies: [end, duration] }
  );

  return (
    <span ref={counterRef} className={`font-heading font-black ${className}`}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};
