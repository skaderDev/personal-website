"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HiOutlineBeaker,
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftRight,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const navbar_options = [
    { title: "Home", link: "/#home", section: "home", icon: <HiOutlineHome /> },
    { title: "About", link: "/#about", section: "about", icon: <HiOutlineUser /> },
    { title: "Experience", link: "/#experience", section: "experience", icon: <HiOutlineBriefcase /> },
    { title: "Projects", link: "/#projects", section: "projects", icon: <HiOutlineFolder /> },
    { title: "Lab", link: "/#lab", section: "lab", icon: <HiOutlineBeaker /> },
    { title: "Contact", link: "/#contact", section: "contact", icon: <HiOutlineChatBubbleLeftRight /> },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = navbar_options
      .map(({ section }) => document.getElementById(section))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -62%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // The navigation model is static, so pathname is the only reactive input.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = (section: string) => {
    if (pathname !== "/") return pathname === `/${section}`;
    return activeSection === section;
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = nextTheme;
    localStorage.setItem("color-theme", nextTheme);
  };

  return (
    <header className="navbar-shell">
      <div className="navbar-row">
        <Link href="/#home" className="logo-pill" aria-label="Safwan Kader — home">
          <Image
            className="logo mx-2"
            src="/logo-white.svg"
            alt="Safwan Logo"
            width={60}
            height={24}
            priority
          />
        </Link>

        <div className="navbar-center">
          <nav className="navbar-dock" aria-label="Primary navigation">
            {navbar_options.map((option) => (
              <Link
                key={option.title}
                href={option.link}
                className={`navbar-item ${isActive(option.section) ? "active" : ""}`}
                aria-current={isActive(option.section) ? "location" : undefined}
                title={option.title}
              >
                <span className="nav-icon" aria-hidden="true">
                  {option.icon}
                </span>
                <span className="nav-label">{option.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light and dark mode"
          title="Toggle light and dark mode"
        >
          <HiOutlineSun className="theme-icon theme-icon-sun" aria-hidden="true" />
          <HiOutlineMoon className="theme-icon theme-icon-moon" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
