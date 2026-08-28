import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PageShell from "@/components/page-shell";
import ContentCard from "@/components/content-card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Safwan Kader on LinkedIn or GitHub.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="Want to talk about software, cloud systems, or an interesting project?"
    >
      <ContentCard className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white">Let&apos;s connect</h2>
        <p className="mx-auto mt-3 max-w-lg leading-relaxed text-white/70">
          I&apos;m based in New York City. LinkedIn is the best place to send me a
          message, or you can browse what I&apos;m building on GitHub.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="https://linkedin.com/in/safwan-kader"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link-primary"
          >
            <FaLinkedin aria-hidden="true" />
            Message me on LinkedIn
          </Link>
          <Link
            href="https://github.com/skaderDev"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub aria-hidden="true" />
            View my GitHub
          </Link>
        </div>
      </ContentCard>
    </PageShell>
  );
}
