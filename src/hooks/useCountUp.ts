import { useEffect, useState } from "react";

export const useCountUp = (target: number, isVisible: boolean, duration = 1500, prefix = "", suffix = "") => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return `${prefix}${value}${suffix}`;
};
