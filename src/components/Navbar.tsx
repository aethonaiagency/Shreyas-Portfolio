import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenCV: () => void;
}

export default function Navbar({ onOpenCV }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "works", label: "Works" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link calculation based on scroll
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-350 ${
        scrolled 
          ? "bg-white/95 border-b border-[#E2E4DE] backdrop-blur-md py-3 shadow-xs" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Branding */}
        <button 
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-2.5 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#6B705C] text-white flex items-center justify-center font-serif font-bold text-lg tracking-wider transition-transform duration-300 group-hover:scale-105 shadow-sm">
            SH
          </div>
          <div>
            <h1 className="font-serif text-[15px] font-semibold tracking-wide text-[#363C2E] leading-tight">
              Shreya Hossain
            </h1>
            <p className="font-mono text-[9px] tracking-wider uppercase text-[#5A6050] group-hover:text-[#6B705C] transition-colors">
              Journalism & Media
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-7">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-[13px] font-sans font-medium tracking-wide relative py-1 cursor-pointer transition-colors duration-250 ${
                    activeSection === link.id
                      ? "text-[#6B705C] font-semibold"
                      : "text-[#5A6050] hover:text-[#363C2E]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#6B705C]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-[#E2E4DE]" />

          {/* Call-to-action */}
          <div className="flex items-center space-x-4">
            {/* Quick action CV button */}
            <button
              onClick={onOpenCV}
              className="px-4 py-1.5 rounded-full border border-[#6B705C]/35 hover:border-[#6B705C] text-[12px] font-mono tracking-wider text-[#6B705C] hover:bg-[#6B705C]/5 transition-all duration-300 cursor-pointer font-semibold"
            >
              Resume File
            </button>
          </div>
        </nav>

        {/* Mobile controls & Hamburg menu trigger */}
        <div className="flex items-center space-x-3.5 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-[#6B705C]/5 text-[#363C2E]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-[#E2E4DE] shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              <ul className="space-y-3.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`text-base font-serif font-medium tracking-wide flex items-center justify-between w-full py-1.5 border-b border-[#E2E4DE]/60 ${
                        activeSection === link.id
                          ? "text-[#6B705C] font-semibold"
                          : "text-[#5A6050]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {activeSection === link.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6B705C]" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#6B705C] hover:bg-[#556052] text-white font-sans font-medium text-xs tracking-wider uppercase text-center transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>View Professional CV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
