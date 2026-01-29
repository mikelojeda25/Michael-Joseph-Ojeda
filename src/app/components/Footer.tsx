import { motion } from "motion/react";
import { Github, Linkedin, ArrowUp, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      id: "github",
      Icon: Github,
      href: "https://github.com/mikelojeda25",
      label: "GitHub",
    },
    {
      id: "linkedin",
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/michael-joseph-ojeda/",
      label: "LinkedIn",
    },
    {
      id: "mail",
      Icon: Mail,
      href: "mailto:mikelojeda25@gmail.com",
      label: "Email",
    },
    {
      id: "viber",
      Icon: MessageCircle,
      href: "viber://add?number=639266320370",
      label: "Viber",
    },
  ];

  return (
    <footer className="relative bg-[#022c22] pt-24 pb-12 overflow-hidden">
      {/* 1. CONTINUOUS MOVING DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
        />
      </div>

      {/* 2. INFINITE ROTATING & FLOATING ORNAMENT */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-[-50px] left-[-50px] pointer-events-none opacity-10"
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          className="text-[#D4AF37]"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeDasharray="2 4"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* BRANDING */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-bold tracking-tighter text-white">
              JOSEPH<span className="text-[#D4AF37]"> DEV</span>
            </h2>
            <p className="text-[#D4AF37]/60 text-[10px] mt-2 tracking-[0.4em] uppercase font-bold">
              Developer & Artist
            </p>
          </motion.div>

          {/* 3. CLICKABLE SOCIAL ICONS */}
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.id}
                href={social.href}
                target={
                  social.id === "github" || social.id === "linkedin"
                    ? "_blank"
                    : "_self"
                }
                rel="noopener noreferrer"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                whileHover={{
                  scale: 1.2,
                  color: "#D4AF37",
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/40 transition-all shadow-lg flex items-center justify-center"
                title={social.label}
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* 4. BACK TO TOP BUTTON */}
          <motion.button
            onClick={scrollToTop}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0px 0px 0px rgba(212,175,55,0)",
                "0px 0px 20px rgba(212,175,55,0.2)",
                "0px 0px 0px rgba(212,175,55,0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="group flex items-center gap-3 px-8 py-3 bg-white/5 border border-white rounded-full cursor-pointer"
          >
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
              Top
            </span>
            <div className="p-2 bg-[#D4AF37]/10 rounded-full group-hover:bg-[#D4AF37] transition-colors">
              <ArrowUp
                size={16}
                className="text-[#D4AF37] group-hover:text-black transition-colors"
              />
            </div>
          </motion.button>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] text-center md:text-left">
            © 2026 Crafted with Passion by Michael Joseph M. Ojeda. All rights
            reserved
          </div>
        </div>
      </div>

      {/* 5. MOVING BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"
      />
    </footer>
  );
}
