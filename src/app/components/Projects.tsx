import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "@/app/components/imageWithFallback/ImageWithFallback";

const projects = [
  {
    title: "Pahrump Realtor",
    description:
      "A responsive site focused on speed and simplicity. I used basic CSS animations to give the minimalist design a more polished and engaging feel.",
    image:
      "https://api.microlink.io?url=https://marcimetzgerrealtor.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://marcimetzgerrealtor.netlify.app",
    gitHub: "https://github.com/mikelojeda25/Marci-Realtor-Website",
  },
  {
    title: "Wedding Website",
    description:
      "A dedicated RSVP platform built with React and Supabase. I designed this to streamline guest attendance tracking and provide a seamless, interactive experience for event attendees.",
    image: "https://image.thum.io/get/https://rsvp-weddingsite.netlify.app/",
    link: "https://rsvp-weddingsite.netlify.app",
    gitHub: "https://github.com/mikelojeda25/RSVP-Wedding",
  },
  {
    title: "Vibe Aroma",
    description:
      "A minimalist e-commerce concept for a perfume brand. Crafted entirely with Vanilla HTML, CSS, and JS to demonstrate my ability to build clean, responsive designs from scratch.",
    image: "https://image.thum.io/get/https://vibe-aroma.netlify.app/",
    link: "https://vibe-aroma.netlify.app",
    gitHub: "https://github.com/mikelojeda25/Vibe-Aroma",
  },
  {
    title: "Joseph's Brew",
    description:
      "A modern business website developed with React. This project focuses on high-quality visual presentation and user-friendly navigation for a specialty beverage brand.",
    image: "https://image.thum.io/get/https://josephsbrew.netlify.app/",
    link: "https://josephsbrew.netlify.app",
    gitHub: "https://github.com/mikelojeda25/Josephs-Brew",
  },
  {
    title: "LNDP - Portal",
    description:
      "A React website featuring filter and sort capabilities. I built this to showcase how to handle complex data sets while maintaining a fast and intuitive user interface.",
    image: "https://image.thum.io/get/https://lndp.netlify.app/",
    link: "https://lndp.netlify.app",
    gitHub: "https://github.com/mikelojeda25/LNDP",
  },
  {
    title: "Savvy Mama",
    description:
      "A fully operational baby boutique built on Shopify. I managed the store setup and design to ensure a smooth shopping journey and a reliable checkout process for parents.",
    image:
      "https://image.thum.io/get/https://savvymamasg.com/?srsltid=AfmBOop9CxSturzOrJMLqMbtQrFYrnBRD4OFFbQ06FuJGXW3JfWVtxoS",
    link: "https://savvymamasg.com/?srsltid=AfmBOoqQ1MMsnEb5EMX-q3Q8sR8AjbBafKBZFki01tHRngbq_0Slextl",
    gitHub: "",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full px-4">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="text-white">Sample</span>{" "}
            <span className="text-[#D4AF37]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#D4AF37]/30"
            >
              {/* Image Container - Fixed height, no lifting */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Fixed Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

                {/* Icons - Floating but not moving the bottom boundary */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    target="_blank"
                    className="p-4 bg-[#D4AF37] text-black rounded-2xl shadow-xl transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.gitHub}
                    target="_blank"
                    className="p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-xl"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Info Area - Stable layout */}
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
