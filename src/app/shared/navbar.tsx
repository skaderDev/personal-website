"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaDownload } from "react-icons/fa";

import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineFolder } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

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

  return (
    <header className="navbar-shell">
      <div className="navbar-row">
        {/* Left: Logo */}
        <Link href="/" className="shrink-0 logo-pill">
          <Image
            className="logo mx-2"
            src="/logo-white.svg"
            alt="Safwan Logo"
            width={60}
            height={24}
            priority
          />
        </Link>

        {/* Center: Dock */}
        <div className="navbar-center">
          <nav className="navbar-dock" aria-label="Primary navigation">
            {navbar_options.map((option) => (
              <Link
                key={option.title}
                href={option.link}
                className={`navbar-item ${isActive(option.link) ? "active" : ""}`}
              >
                <span className="nav-icon">{option.icon}</span>
                <span>{option.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Download */}
        <div className="navbar-right">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
          >
            <button className="icon-button nav-download" type="button">
              <FaDownload className="download-icon" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
