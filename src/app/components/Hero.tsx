import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { ImageWithFallback } from "@/app/components/imageWithFallback/ImageWithFallback";
import Mascot from "../../images/Mascot.webp";

const roles = [
  "Web Developer",
  "Digital Painter",
  "Writer",
  "Graphic Designer",
  "Web Designer",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // New state para sa 1.5s delay

  useEffect(() => {
    // Role rotation interval
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Image delay timer (1.5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full px-4">
        <div className="max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0B2F2A]/20 rounded-full blur-3xl"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 sm:gap-12 items-center">
          {/* Left Side - Profile Image with 1.5s Delay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[125%] h-[125%] border border-[#D4AF37]/20 rounded-full animate-[spin_40s_linear_infinite] opacity-40"></div>
              <div className="absolute w-[105%] h-[105%] border-2 border-dashed border-[#D4AF37]/15 rounded-full animate-[spin_25s_linear_infinite_reverse] opacity-40"></div>
              <div className="absolute w-[90%] h-[90%] bg-[#D4AF37]/5 blur-[100px] rounded-full"></div>
              <div className="relative z-10 w-[280px] h-[280px] md:w-[550px] md:h-[550px]">
                {/* Eto yung image container na may 1.5s transition delay */}
                <div
                  className={`absolute w-full h-full scale-110 md:scale-100 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
                >
                  <img
                    src={Mascot}
                    alt="Michael Joseph M. Ojeda"
                    className="w-full h-full object-cover animate-[float_4s_ease-in-out_infinite]"
                    loading="eager"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D4AF37] rounded-full blur-xl opacity-40 animate-pulse"></div>

                <span className="hidden md:block z-[-100]">
                  <div className="absolute top-1 left-40 w-8 h-8 bg-[#D4AF37] rounded-full opacity-60"></div>
                  <div className="absolute top-30 -right-1 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-35 left-25 w-3 h-3 bg-[#D4AF37] rounded-full  opacity-20"></div>
                  <div className="absolute top-[260px] left-10 w-4 h-4 bg-[#D4AF37] rounded-full animate-ping opacity-60 [animation-duration:4s] [animation-delay:-2s]"></div>
                  <div className="absolute top-[360px] left-[540px] w-4 h-4 bg-[#D4AF37] rounded-full animate-ping opacity-60 [animation-duration:4s] [animation-delay:-2s]"></div>

                  <div className="absolute top-1/2 -left-12 w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce opacity-10"></div>
                  <div className="absolute top-40 left-[-300px] w-4 h-4 bg-[#D4AF37] rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute bottom-[-200px] right-30 w-2 h-2 bg-[#D4AF37] rounded-full animate-ping [animation-duration:3s]  [animation-delay:0.5s] opacity-60"></div>

                  <div className="absolute top-[-100px] right-[-130px] w-2 h-2 bg-[#D4AF37] rounded-full  animate-ping [animation-duration:3s]  [animation-delay:1s] opacity-60"></div>
                  <div className="absolute top-15 right-[-25%] w-20 h-20 border-2 border-[#D4AF37]/40 animate-s speed-spin [animation-delay:-18s] [animation-duration:18s] animation-pulse opacity-20"></div>
                  <div className="absolute bottom-[15%]  w-12 h-12 border-2 border-[#D4AF37]/40 rotate-45 animate-s speed-spin [animation-delay:-2s]"></div>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Name and Titles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl mb-1"
            >
              <span className="text-white">Joseph</span>
              <span className="text-[#D4AF37]"> Dev</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[17px] md:text-[22px] lg:text-[26px] mb-4"
            >
              <span className="text-white/50">MICHAEL JOSEPH M. OJEDA</span>
            </motion.h2>

            <div className="relative h-8 mb-6">
              <div className="absolute left-0 w-1 h-full bg-[#D4AF37]"></div>
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-white/90 pl-4"
              >
                {roles[currentRole]}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed"
            >
              I transform ideas into code. Focused on delivering
              <span className="text-yellow-500 font-semibold"> creative </span>
              and reliable solutions while continuously expanding my skill set.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-3 bg-[#D4AF37] text-[#0B2F2A] rounded-lg hover:bg-[#D4AF37]/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
              >
                View Projects
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Decorative Background Shapes */}
          <span className="hidden md:block z-[-100]">
            <div className="absolute top-[-50px] left-10 w-8 h-8 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:7s] opacity-20"></div>
            <div className="absolute bottom-[-80px] left-[-300px] w-20 h-20 bg-[#D4AF37] rounded-full animate-pulse [animation-duration:3s] opacity-40"></div>
            <div className="absolute top-[120px] -right-1 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse [animation-duration:2s] [animation-delay:-1s] opacity-40"></div>
            <div className="absolute top-[30%] left-[3%] w-3 h-3 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:5s] [animation-delay:-2s] opacity-60"></div>
            <div className="absolute top-[160px] left-[-7%] w-10 h-10 bg-[#D4AF37] rounded-full animate-pulse [animation-duration:5s] opacity-30"></div>
            <div className="absolute top-[280px] right-2 w-20 h-20 bg-[#D4AF37]/20 rounded-full animate-ping [animation-duration:4s] opacity-20"></div>
            <div className="absolute top-[400px] right-[-20%] w-4 h-4 bg-[#D4AF37] rounded-full animate-bounce opacity-40"></div>
            <div className="absolute bottom-[180px] left-[-10%] w-20 h-20 bg-[#D4AF37]/20 rounded-full animate-ping [animation-duration:4s] opacity-20"></div>
            <div className="absolute top-[280px] right-[-70px] w-20 h-20 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:10s] opacity-50"></div>
            <div className="absolute bottom-[-25px] left-[300px] w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:6s] [animation-delay:-4s] opacity-60"></div>
            <div className="absolute bottom-[-80px] -right-[-30%] w-4 h-4 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:6s] [animation-delay:-4s] opacity-60"></div>
            <div className="absolute left-20 bottom-0 w-4 h-4 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_10s_linear_infinite] opacity-70"></div>
            <div className="absolute right-30 bottom-10 w-12 h-12 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:9s] [animation-delay:-5s] opacity-40"></div>
            <div className="absolute top-[-52px] left-[35%] w-6 h-6 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_12s_linear_infinite] opacity-50"></div>
            <div className="absolute top-[-12%] right-[20%] w-10 h-10 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_10s_linear_infinite] opacity-100"></div>
            <div className="absolute top-[5%] right-[5%] w-4 h-4 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_8s_linear_infinite] [animation-duration:4s]"></div>
            <div className="absolute right-[10%] top-[45%] w-6 h-6 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_15s_linear_infinite] [animation-delay:-7s] opacity-40"></div>
            <div className="absolute bottom-[5%] left-[40%] w-12 h-12 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_20s_linear_infinite] opacity-30"></div>
            <div className="absolute top-[-46%] right-[-35%] w-80 h-80 bg-[#D4AF37] rounded-full [animation-duration:40s] opacity-50"></div>
            <div className="absolute left-[-28%] top-[-30%] w-50 h-50 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_15s_linear_infinite] [animation-delay:-7s] opacity-40"></div>
            <div className="absolute right-[-15%] bottom-[-12%] w-50 h-50 border-2 border-[#D4AF37]/40 rotate-45 animate-[spin_15s_linear_infinite] [animation-delay:-7s] opacity-40"></div>

            <div className="absolute -bottom-4 -right-[-400px] w-22 h-22 bg-[#D4AF37] rounded-full blur-xl opacity-20 animate-ping [animation-duration:6s]"></div>
            <div className="absolute top-10 right-90 w-12 h-12 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:8s] opacity-30"></div>
            <div className="absolute bottom-10 right-140 w-4 h-4 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:2s] opacity-30"></div>
            <div className="absolute top-[-50%] right-[-37%] w-100 h-100 border-8 border-dotted border-[#D4AF37]/50 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>

            <div className="absolute bottom-[-40%] left-[-37%] w-100 h-100 border-8 border-dotted border-[#D4AF37]/50 rounded-full animate-[spin_20s_linear_infinite] opacity-10"></div>
            <div className="absolute bottom-[-45%] left-[-40%] w-120 h-120 border-10 border-dotted border-[#D4AF37]/50 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>
          </span>
        </div>
      </div>
    </section>
  );
}
