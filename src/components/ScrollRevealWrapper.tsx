import { useScrollReveal } from "@/hooks/useScrollReveal";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const ScrollRevealWrapper = ({ children, className = "", staggerDelay = 0 }: Props) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease-out ${staggerDelay}s, transform 0.7s ease-out ${staggerDelay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
