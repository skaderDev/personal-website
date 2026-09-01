
import HomeHero from "@/components/home-hero";
import AboutPage from "@/app/about/page";
import ExperiencePage from "@/app/experience/page";
import ProjectsPage from "@/app/projects/page";
import LabPage from "@/app/lab/page";
import ContactPage from "@/app/contact/page";

export default function Home() {
  return (
    <div className="single-page-portfolio">
      <HomeHero />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <LabPage />
      <ContactPage />
    </div>
  );
}
