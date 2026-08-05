import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  gradientBorder?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hoverEffect = true, gradientBorder = false, ...props }, ref) => {
    const baseClasses =
      "glass-panel rounded-2xl p-6 transition-all duration-300 relative overflow-hidden";
    const hoverClasses = hoverEffect
      ? "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-cyan-500/10 hover:border-[#2B5866]/40 dark:hover:border-cyan-500/30"
      : "";
    const borderClasses = gradientBorder ? "gradient-border" : "";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${hoverClasses} ${borderClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
