"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  className?: string;
};

export default function MouseGlow({ className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      // throttle with rAF so it stays smooth
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
