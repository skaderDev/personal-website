"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const transitionDuration = 600;

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const frameRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const pendingNavigation = useRef(false);
  const restoreTimer = useRef<number | null>(null);

  const removeSnapshots = () => {
    frameRef.current
      ?.querySelectorAll(".route-page-snapshot")
      .forEach((snapshot) => snapshot.remove());
  };

  useEffect(() => {
    const beginTransition = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      const link =
        target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;

      if (
        !link ||
        link.target === "_blank" ||
        link.hasAttribute("download")
      ) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);
      const normalizePath = (path: string) =>
        path === "/" ? path : path.replace(/\/+$/, "");

      if (
        destination.origin !== current.origin ||
        normalizePath(destination.pathname) === normalizePath(current.pathname)
      ) {
        return;
      }

      const frame = frameRef.current;
      const page = pageRef.current;
      if (!frame || !page) return;

      removeSnapshots();

      const snapshot = page.cloneNode(true) as HTMLDivElement;
      snapshot.removeAttribute("id");
      snapshot.setAttribute("aria-hidden", "true");
      snapshot.inert = true;
      snapshot.classList.remove("route-page-awaiting", "route-page-enter");
      snapshot.classList.add("route-page-snapshot", "route-page-exit");
      frame.appendChild(snapshot);

      page.classList.add("route-page-awaiting");
      pendingNavigation.current = true;

      if (restoreTimer.current !== null) {
        window.clearTimeout(restoreTimer.current);
      }

      restoreTimer.current = window.setTimeout(() => {
        if (!pendingNavigation.current) return;
        pageRef.current?.classList.remove("route-page-awaiting");
        removeSnapshots();
        pendingNavigation.current = false;
      }, 1800);
    };

    document.addEventListener("click", beginTransition, true);
    return () => document.removeEventListener("click", beginTransition, true);
  }, []);

  useEffect(() => {
    if (pathname === previousPath.current) return;

    previousPath.current = pathname;
    pendingNavigation.current = false;

    if (restoreTimer.current !== null) {
      window.clearTimeout(restoreTimer.current);
      restoreTimer.current = null;
    }

    const page = pageRef.current;
    if (!page) return;

    page.classList.remove("route-page-awaiting", "route-page-enter");
    void page.offsetWidth;
    page.classList.add("route-page-enter");

    const finishTransition = () => {
      page.classList.remove("route-page-enter");
      removeSnapshots();
    };

    page.addEventListener("animationend", finishTransition, { once: true });
    const cleanupTimer = window.setTimeout(
      finishTransition,
      transitionDuration + 100,
    );

    return () => {
      page.removeEventListener("animationend", finishTransition);
      window.clearTimeout(cleanupTimer);
    };
  }, [pathname]);

  useEffect(
    () => () => {
      if (restoreTimer.current !== null) {
        window.clearTimeout(restoreTimer.current);
      }
    },
    [],
  );

  return (
    <div className="route-transition-frame" ref={frameRef}>
      <div className="route-page" ref={pageRef}>
        {children}
      </div>
    </div>
  );
}
