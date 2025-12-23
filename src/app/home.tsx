import Link from "next/link";
import { FaGithub, FaLinkedin, FaFilePdf, FaFolderOpen } from "react-icons/fa";
import MouseGlow from "./shared/mouseglow";

export default function Home() {
  const socials = [
    {
      href: "https://github.com/skaderDev",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://linkedin.com/in/safwan-kader",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "/resume.pdf",
      label: "Resume",
      icon: <FaFilePdf />,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <FaFolderOpen />,
    },
  ];

  const name = "Safwan Kader";

  return (
    <div className="introduction flex flex-col items-center justify-center text-center h-screen mt-[-8rem]">
      <div> <MouseGlow className="mouse-glow" />

        <div className="text-xl text-white font-semibold">Hi! My name is</div>

        <div className="header font-bold">
          {name.split("").map((ch, i) =>
            ch === " " ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <span
                key={i}
                className="wave-char"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {ch}
              </span>
            )
          )}
        </div>

        <div className="text-xl text-white font-semibold">Software Engineer</div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex gap-8">
        {socials.map(({ href, label, icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className="
              text-3xl
              text-white
              transition
              transform
              hover:scale-110
              hover:text-[#00affa]
            "
          >
            {icon}
          </Link>
        ))}
      </div>

      <div className="social-wheel-bottom-right" />
    </div>
  );
}
