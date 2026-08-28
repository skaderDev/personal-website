import Link from "next/link";
import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa";

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
      href: "/projects",
      label: "Projects",
      icon: <FaFolderOpen />,
    },
  ];

  const name = "Safwan Kader";

  return (
    <section className="flex min-h-[calc(100svh-8rem)] flex-col items-center justify-center py-16 text-center">
      <div>
        <p className="text-lg font-semibold text-white/80 sm:text-xl">Hi, my name is</p>

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

        <p className="text-lg font-semibold text-white sm:text-xl">
          Software Engineer at Compass
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          I work on platform systems for notifications and email deliverability,
          and build thoughtful full-stack products from New York City.
        </p>
      </div>

      <div className="mt-8 flex gap-6">
        {socials.map(({ href, label, icon }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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

    </section>
  );
}
