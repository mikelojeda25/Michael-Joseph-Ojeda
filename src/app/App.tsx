import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { TechStack } from "@/app/components/TechStack";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { Artwork } from "@/app/components/Artwork";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B2F2A] via-[#0a1f1c] to-black overflow-x-hidden">
      <Navigation />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Artwork />
      <Contact />
      <Footer />
    </div>
  );
}
