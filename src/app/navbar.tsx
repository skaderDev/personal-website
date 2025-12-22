"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navbar_options = [
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Resume", link: "/experience" },
    { title: "Projects", link: "/projects" },
  ];

  return (
    <div className="flex justify-between items-center px-2">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Safwan Logo"
          width={60}
          height={24}
          style={{ margin: "1rem" }}
          priority
        />
      </Link>

      {/* Nav buttons */}
      <div className="navbar-buttons flex flex-row">
        {navbar_options.map((option) => {
          const isActive = pathname === option.link;

          return (
            <Link href={option.link} key={option.title}>
              <button
                className={`
                  
                  mt-4 mr-4 mb-6 pb-6
                  ${isActive ? "navbar-button-page-active" : "navbar-button"}
                `}
              >
                {option.title}
              </button>
            </Link>
          );
        })}
      </div>

      <div>Placeholder</div>
    </div>
  );
}
