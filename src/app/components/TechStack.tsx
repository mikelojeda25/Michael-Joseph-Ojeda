import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiVisualstudio, // Ginamit nating alternative
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; // VS Code icon mula sa ibang set para safe

const techStack = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
];

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full px-4">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Tech</span>{" "}
            <span className="text-[#D4AF37]">Stack</span>
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                borderColor: "rgba(212, 175, 55, 0.5)",
              }}
              className="group w-full bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-500 cursor-pointer"
            >
              <div className="text-5xl group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all">
                {tech.icon}
              </div>
              <span className="text-white/70 text-xs md:text-sm font-semibold tracking-wider group-hover:text-white transition-colors uppercase">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
