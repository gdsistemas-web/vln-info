"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    let frame = 0;
    const total = 45;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame >= total) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [inView, reduced, value]);

  return <span ref={ref}>{suffix === "+" ? `+${count}` : `${count}${suffix}`}</span>;
}
