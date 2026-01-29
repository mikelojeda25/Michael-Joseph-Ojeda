import { motion } from "motion/react";
import { Code2, Paintbrush, FileText, Palette } from "lucide-react";
import { ImageWithFallback } from "@/app/components/imageWithFallback/ImageWithFallback";

const aboutSections = [
  {
    title: "Web Developer",
    icon: Code2,
    description:
      "I enjoy the process of building and learning how modern web applications work. My focus is on writing clean code and understanding how to solve problems effectively. I'm constantly practicing my skills in different technologies to create better and more functional projects.",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjkxOTQ3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageRight: true,
  },
  {
    title: "Digital Painter",
    icon: Paintbrush,
    description:
      "Digital painting is my creative outlet where I explore visual storytelling and design. This hobby helps me develop a better eye for detail and aesthetics, which I find very useful when I'm working on the front-end side of web development.",
    image:
      "https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmclMjBhcnR8ZW58MXx8fHwxNzY5MTM0NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageRight: false,
  },
  {
    title: "Writer",
    icon: FileText,
    description:
      "I’m a web developer who actually enjoys the documentation side of things. Coming from a background in creative writing and poetry, I try to bring a sense of clarity and flow to everything I build. For me, a project isn't finished until the code is clean and the 'story' behind it (the documentation) is easy for anyone to grasp.",
    image:
      "https://images.unsplash.com/photo-1765867967050-30db3e7a3be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjB3cml0aW5nJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzY5MjQxODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageRight: true,
  },
  {
    title: "Web Designer",
    icon: Palette,
    description:
      "I have a deep interest in creating clean and user-friendly interfaces. For me, design is about making things easy to use and pleasant to look at. I'm always looking for ways to improve my design sense and apply it to the websites I build.",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MTQ5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageRight: false,
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="absolute bottom-0 left-0 w-full px-4">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-white">About</span>{" "}
            <span className="text-[#D4AF37]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="space-y-32">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                section.imageRight ? "" : "md:grid-flow-dense"
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: section.imageRight ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${section.imageRight ? "md:col-start-2" : ""} relative group`}
              >
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-300">
                  <ImageWithFallback
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  {/* Matching Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/80 to-transparent"></div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: section.imageRight ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${section.imageRight ? "md:col-start-1 md:row-start-1" : ""}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                    <section.icon className="text-[#D4AF37]" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                <p className="text-lg text-white/70 leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
