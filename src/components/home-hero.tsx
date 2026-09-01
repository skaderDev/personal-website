import Link from "next/link";
import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa";
import Currently from "@/components/currently";

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
      href: "/#projects",
      label: "Projects",
      icon: <FaFolderOpen />,
    },
  ];

  const nameWords = ["Safwan", "Kader"];

  return (
    <section id="home" className="home-hero" aria-label="Introduction">
      <div className="home-hero-content">
        <div className="hero-copy">
          <p className="section-kicker">Software engineer · New York City</p>
          <h1 className="header hero-name font-bold" aria-label="Safwan Kader">
            {nameWords.map((word, wordIndex) => (
              <span className="name-word" aria-hidden="true" key={word}>
                {word.split("").map((letter, letterIndex) => {
                  const animationIndex =
                    nameWords.slice(0, wordIndex).join("").length +
                    letterIndex;
                  const isInitial = letterIndex === 0;

                  return (
                    <span
                      className={`name-letter ${isInitial ? "name-initial" : ""}`}
                      key={`${word}-${letterIndex}`}
                      style={{ animationDelay: `${180 + animationIndex * 42}ms` }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          <p className="hero-role">Software Engineer at Compass</p>
          <p className="hero-summary">
            I build reliable systems and thoughtful digital products from New
            York City.
          </p>
          <div className="hero-links">
            {socials.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="hero-link"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        <Currently />
        <p className="hero-signoff">Built in NYC · Between code and a tennis court</p>
      </div>
    </section>
  );
}
