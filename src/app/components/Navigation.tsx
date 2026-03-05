/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyCV from "@/files/Resume_Ojeda_Michael-Joseph.pdf";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home", path: "/", isPage: false },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "About", id: "about" },
    { label: "Dev Projects", id: "projects" },
    { label: "Artwork", id: "artwork" },
    { label: "Music", id: "music", path: "/music", isPage: true },
    { label: "Contact", id: "contact", path: "/contact", isPage: true },
    { label: "Download CV", id: "cv", isSpecial: true },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B2F2A] shadow-lg shadow-[#D4AF37]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold">
              <span className="text-white">JOSEPH </span>
              <span className="text-[#D4AF37]">DEV</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => {
                if (item.isSpecial) {
                  return (
                    <a
                      key={item.id}
                      href={MyCV}
                      download
                      className="px-4 py-2 bg-[#14433D] text-white rounded-lg font-bold hover:scale-105 hover:bg-[#D4AF37] hover:text-black"
                    >
                      {item.label}
                    </a>
                  );
                }

                if (item.isPage) {
                  return (
                    <Link
                      key={item.label}
                      to={item.path!}
                      className="text-white/80 hover:text-[#D4AF37] transition-colors relative group cursor-pointer mt-2"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id!)}
                    className="text-white/80 hover:text-[#D4AF37] transition-colors relative group cursor-pointer"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }} // Start from right
            animate={{ x: 0 }} // Slide to center
            exit={{ x: "100%" }} // Slide back to right
            transition={{ type: "tween", duration: 0.3 }} // FIXED: Linear slide, no bounce
            className="fixed inset-0 z-40 bg-[#0B2F2A] lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.isPage) {
                    navigate(item.path!);
                    setIsMobileMenuOpen(false); // FIXED: Kusa nang magko-close
                  } else if (item.isSpecial) {
                    window.location.href = MyCV;
                    setIsMobileMenuOpen(false);
                  } else {
                    handleNavClick(item.id!);
                  }
                }}
                className="text-2xl text-white/80 hover:text-[#D4AF37]"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
