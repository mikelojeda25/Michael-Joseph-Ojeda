import { m, LazyMotion, domAnimation } from "framer-motion"; // 'm' imbes na 'motion'
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import Github from "lucide-react/dist/esm/icons/github";
import { ImageWithFallback } from "@/app/components/imageWithFallback/ImageWithFallback";
import image1 from "@/images/marci-website.png";
import image2 from "@/images/wedding-site.png";
import image3 from "@/images/vibe-aroma.png";
import image4 from "@/images/joseph-brew.png";
import image5 from "@/images/lndp.png";
import image6 from "@/images/savvy-mama.png";

const projects = [
  {
    title: "Pahrump Realtor",
    description:
      "A responsive site focused on speed and simplicity. I used basic CSS animations to give the minimalist design a more polished and engaging feel.",
    image: image1,
    link: "https://marcimetzgerrealtor.netlify.app",
    gitHub: "https://github.com/mikelojeda25/Marci-Realtor-Website",
  },
  {
    title: "Wedding Website",
    description:
      "A dedicated RSVP platform built with React and Supabase. I designed this to streamline guest attendance tracking and provide a seamless, interactive experience for event attendees.",
    image: image2,
    link: "https://rsvp-weddingsite.netlify.app",
    gitHub: "https://github.com/mikelojeda25/RSVP-Wedding",
  },
  {
    title: "Vibe Aroma",
    description:
      "A minimalist e-commerce concept for a perfume brand. Crafted entirely with Vanilla HTML, CSS, and JS to demonstrate my ability to build clean, responsive designs from scratch.",
    image: image3,
    link: "https://vibe-aroma.netlify.app",
    gitHub: "https://github.com/mikelojeda25/Vibe-Aroma",
  },
  {
    title: "Joseph's Brew",
    description:
      "A modern business website developed with React. This project focuses on high-quality visual presentation and user-friendly navigation for a specialty beverage brand.",
    image: image4,
    link: "https://josephsbrew.netlify.app",
    gitHub: "https://github.com/mikelojeda25/Josephs-Brew",
  },
  {
    title: "LNDP - Portal",
    description:
      "A React website featuring filter and sort capabilities. I built this to showcase how to handle complex data sets while maintaining a fast and intuitive user interface.",
    image: image5,
    link: "https://lndp.netlify.app",
    gitHub: "https://github.com/mikelojeda25/LNDP",
  },
  {
    title: "Savvy Mama",
    description:
      "A fully operational baby boutique built on Shopify. I managed the store setup and design to ensure a smooth shopping journey and a reliable checkout process for parents.",
    image: image6,
    link: "https://savvymamasg.com/?srsltid=AfmBOoqQ1MMsnEb5EMX-q3Q8sR8AjbBafKBZFki01tHRngbq_0Slextl",
    gitHub: "",
  },
];

export function Projects() {
  return (
    <LazyMotion features={domAnimation}>
      {" "}
      {/* 15KB lang imbes na 100KB+ */}
      <section
        id="projects"
        className="min-h-screen py-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Mag-load lang pag malapit na
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-bold text-white">
              Sample <span className="text-[#D4AF37]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <m.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 rounded-[2rem] overflow-hidden border border-white/10"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <m.a
                      href={project.link}
                      target="_blank"
                      className="p-4 bg-[#D4AF37] rounded-2xl"
                    >
                      <ExternalLink size={24} className="text-black" />
                    </m.a>
                    {project.gitHub && (
                      <m.a
                        href={project.gitHub}
                        target="_blank"
                        className="p-4 bg-white/60 rounded-2xl"
                      >
                        <Github size={24} className="text-white" />
                      </m.a>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/50">{project.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
