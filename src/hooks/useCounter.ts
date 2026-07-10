import { useEffect, useState } from "react";

/**
 * Animates a number from 0 up to `end` using an ease-out quartic curve,
 * starting only once `active` becomes true (used with Framer Motion's
 * `useInView`, so the counter runs when the section scrolls into view).
 */
export function useCounter(end: number, active: boolean, duration = 2200): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - progress, 4)) * end));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [end, active, duration]);

  return value;
}
