import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./shared/navbar";
import MouseGlow from "./shared/mouseglow";

export const metadata: Metadata = {
  title: "Safwan Kader",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* cursor glow layer */}
        <MouseGlow />

        {/* top nav */}
        <Navbar />

        {/* page content */}
        <main className="px-6 pb-16 pt-6">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
