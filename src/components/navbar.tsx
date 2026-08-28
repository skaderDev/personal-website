"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineFolder } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function Navbar() {
  const pathname = usePathname();

  const navbar_options = [
    { title: "Home", link: "/", icon: <HiOutlineHome /> },
    { title: "About", link: "/about", icon: <HiOutlineUser /> },
    { title: "Experience", link: "/experience", icon: <HiOutlineBriefcase /> },
    { title: "Projects", link: "/projects", icon: <HiOutlineFolder /> },
    { title: "Contact", link: "/contact", icon: <HiOutlineChatBubbleLeftRight /> },
  ];

  const isActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname === link || pathname.startsWith(link + "/");
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
        <Link href="/" className="logo-pill" aria-label="Safwan Kader — home">
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
                className={`navbar-item ${isActive(option.link) ? "active" : ""}`}
                aria-current={isActive(option.link) ? "page" : undefined}
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
