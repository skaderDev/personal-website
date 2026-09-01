"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type !== "reload") return;

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const cleanUrl = window.location.pathname === "/" ? "/#home" : window.location.pathname;

    window.history.replaceState(null, "", cleanUrl);
    resetScroll();
    const frame = requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-section-reveal], [data-reveal]",
      ),
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    elements.forEach((element) => {
      element.classList.remove("is-visible");
      element.classList.remove("scroll-reveal");
      element.classList.add("reveal-pending");
      element.style.removeProperty("--reveal-opacity");
      element.style.removeProperty("--reveal-y");
      element.style.removeProperty("--reveal-blur");
      element.style.removeProperty("--reveal-scale");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px 20%", threshold: 0.02 },
    );

    const frame = requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
