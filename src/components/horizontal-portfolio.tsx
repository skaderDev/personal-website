import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import ExperiencePage from "@/app/experience/page";
import ProjectsPage from "@/app/projects/page";
import LabPage from "@/app/lab/page";
import HomeHero from "@/components/home-hero";
import HorizontalTrack from "@/components/horizontal-track";

export default function HorizontalPortfolio() {
  return (
    <HorizontalTrack
      panels={[
        { path: "/", label: "Home", content: <HomeHero /> },
        { path: "/about", label: "About", content: <AboutPage /> },
        {
          path: "/experience",
          label: "Experience",
          content: <ExperiencePage />,
        },
        { path: "/projects", label: "Projects", content: <ProjectsPage /> },
        { path: "/lab", label: "Lab", content: <LabPage /> },
        { path: "/contact", label: "Contact", content: <ContactPage /> },
      ]}
    />
  );
}
