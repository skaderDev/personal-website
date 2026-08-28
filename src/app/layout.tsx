import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import MouseGlow from "@/components/mouseglow";
import NycGallery from "@/components/nyc-gallery";
import RouteTransition from "@/components/route-transition";

const productionHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(productionHost),
  title: {
    default: "Safwan Kader — Software Engineer",
    template: "%s — Safwan Kader",
  },
  description:
    "New York-based software engineer working on platform systems, notifications, and email deliverability at Compass.",
  applicationName: "Safwan Kader",
  authors: [{ name: "Safwan Kader" }],
  keywords: [
    "Safwan Kader",
    "software engineer",
    "full-stack developer",
    "cloud engineering",
    "platform engineering",
    "email deliverability",
    "AWS",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    title: "Safwan Kader — Software Engineer",
    description:
      "New York-based software engineer working on platform systems, notifications, and email deliverability at Compass.",
    siteName: "Safwan Kader",
  },
  twitter: {
    card: "summary",
    title: "Safwan Kader — Software Engineer",
    description:
      "New York-based software engineer working on platform systems, notifications, and email deliverability at Compass.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NycGallery />
        <MouseGlow className="mouse-glow" />
        <Navbar />
        <main
          id="main-content"
          className="site-main px-4 pb-16 pt-4 sm:px-6 sm:pt-6"
        >
          <div className="mx-auto w-full max-w-5xl">
            <RouteTransition>{children}</RouteTransition>
          </div>
        </main>
      </body>
    </html>
  );
}
