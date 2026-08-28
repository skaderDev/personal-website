"use client";

import { usePathname } from "next/navigation";

type Panel = {
  path: string;
  label: string;
  content: React.ReactNode;
};

const normalizePath = (path: string) =>
  path === "/" ? path : path.replace(/\/+$/, "");

export default function HorizontalTrack({ panels }: { panels: Panel[] }) {
  const pathname = normalizePath(usePathname());
  const activeIndex = Math.max(
    0,
    panels.findIndex((panel) => panel.path === pathname),
  );

  return (
    <div className="horizontal-viewport">
      <div
        className="horizontal-track"
        style={{ transform: `translate3d(-${activeIndex * 100}vw, 0, 0)` }}
      >
        {panels.map((panel, index) => {
          const isActive = index === activeIndex;

          return (
            <section
              className="horizontal-panel"
              key={panel.path}
              aria-label={panel.label}
              aria-hidden={!isActive}
              inert={!isActive}
            >
              <div className="horizontal-panel-inner">{panel.content}</div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
