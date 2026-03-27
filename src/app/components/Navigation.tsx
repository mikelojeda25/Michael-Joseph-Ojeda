/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyCV from "@/files/Resume_Ojeda_Michael-Joseph.pdf";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCreativesMobile, setShowCreativesMobile] = useState(false); // Mobile dropdown state
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
    setIsMobileMenuOpen(false);

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
    { label: "Creatives", id: "creatives", path: "/creatives", isPage: true },
    { label: "Contact", id: "contact", path: "/contact", isPage: true },
    { label: "Download CV", id: "cv", isSpecial: true },
  ];

  const creativesSubLinks = [
    { label: "Visual Editing", path: "/creatives/visual-editing" },
    { label: "Artworks", path: "/creatives/artworks" },
    { label: "Web Development", path: "/creatives/web-development" },
    { label: "Music", path: "/music" },
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
                      className="px-4 py-2 bg-[#14433D] text-white rounded-lg font-bold hover:scale-105 hover:bg-[#D4AF37] hover:text-black whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  );
                }

                if (item.isPage) {
                  if (item.label === "Creatives") {
                    return (
                      <div key={item.label} className="relative group mt-2">
                        <Link
                          to={item.path!}
                          className="text-white/80 hover:text-[#D4AF37] transition-colors relative cursor-pointer"
                        >
                          {item.label}
                        </Link>

                        {/* Desktop Dropdown */}
                        <div className="absolute left-0 mt-2 overflow-hidden w-48 bg-[#0B2F2A] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          {creativesSubLinks.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path}
                              className="block px-4 py-2 text-white/80 hover:text-[#D4AF37] hover:bg-[#14433D] transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B2F2A] lg:hidden flex flex-col items-center justify-center space-y-4"
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="w-full flex flex-col items-center"
              >
                {/* Main Nav Button */}
                <button
                  onClick={() => {
                    if (item.isPage) {
                      if (item.label === "Creatives") {
                        setShowCreativesMobile((prev) => !prev);
                        return;
                      }
                      navigate(item.path!);
                      setIsMobileMenuOpen(false);
                    } else if (item.isSpecial) {
                      window.location.href = MyCV;
                      setIsMobileMenuOpen(false);
                    } else {
                      handleNavClick(item.id!);
                    }
                  }}
                  className={`text-2xl w-full text-center py-2 rounded-md transition-colors ${
                    item.label === "Creatives" && showCreativesMobile
                      ? "text-[#D4AF37]" // yellow kapag dropdown open
                      : "text-white/80 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.label}
                </button>

                {/* Mobile Dropdown for Creatives */}
                {item.label === "Creatives" && showCreativesMobile && (
                  <div className="flex flex-col mt-2 mx-auto bg-[#b4a93f25] shadow-md divide-y divide-[#14433D] w-full">
                    {creativesSubLinks.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => {
                          navigate(sub.path);
                          setIsMobileMenuOpen(false);
                          setShowCreativesMobile(false);
                        }}
                        className="text-center w-full px-4 py-2 text-white/90 hover:bg-[#14433D] hover:text-[#D4AF37] transition-colors rounded-md"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
