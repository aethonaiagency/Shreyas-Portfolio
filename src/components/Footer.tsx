import React from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenCV: () => void;
}

export default function Footer({ onOpenCV }: FooterProps) {
  
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#556052] text-[#F9F9F7] py-16 transition-colors duration-350 select-none relative z-10 border-t border-white/5">
      
      {/* Editorial Grid Backing on Dark Footer */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo block (column 5) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button 
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3.5 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#556052] flex items-center justify-center font-serif font-bold text-lg tracking-wider transition-transform group-hover:scale-105">
                SH
              </div>
              <div>
                <h4 className="font-serif text-[15px] font-semibold tracking-wide text-white leading-tight">
                  Shreya Hossain
                </h4>
                <p className="font-mono text-[9px] tracking-wider uppercase text-white/80 group-hover:text-white transition-colors">
                  Journalism major
                </p>
              </div>
            </button>
            <p className="font-sans text-[13px] text-white/80 max-w-sm leading-relaxed">
              Aspiring ethical storyteller and media professional. Actively preparing for summer opportunities, editorial internships, and investigative research assignments.
            </p>
          </div>

          {/* Quick links block (column 4) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h5 className="font-serif text-sm font-semibold tracking-wide text-white underline decoration-white/20 underline-offset-4">
              Navigation Directory
            </h5>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 font-medium">
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 font-medium">
                  <span>About Me</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("education")} className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 font-medium">
                  <span>Education</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")} className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 font-medium">
                  <span>Skills</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("experience")} className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 font-medium">
                  <span>Experience</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("works")} className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 font-medium">
                  <span>Featured Works</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="col-span-2 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 font-medium">
                  <span>Inquiry Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Connect handles (column 3) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h5 className="font-serif text-sm font-semibold tracking-wide text-white underline decoration-white/20 underline-offset-4">
              Formal Signals
            </h5>
            <div className="flex flex-col space-y-2.5 text-xs text-white/85">
              <a href="mailto:shreyahossen@gmail.com" className="hover:text-white flex items-center space-x-2 transition-colors">
                <Mail className="w-4 h-4 text-white/70" />
                <span>shreyahossen@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/shreya-hossain-33924734b/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white flex items-center space-x-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white/70" />
                <span>Official LinkedIn Profile</span>
              </a>
              <button 
                onClick={onOpenCV}
                className="hover:text-white flex items-center space-x-2 transition-colors text-left font-bold"
              >
                <ArrowRight className="w-4 h-4 text-white/90 flex-shrink-0" />
                <span className="font-mono tracking-wider text-[10.5px] uppercase">Launch CV Reader</span>
              </button>
            </div>
          </div>

        </div>

        {/* Lower row block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-mono">
          <p>© {currentYear} Shreya Hossain. All rights reserved.</p>
          
          <div className="flex items-center space-x-1.5 self-center text-white/70">
            <span>Designed by</span>
            <span className="font-serif text-[13px] font-bold text-white tracking-wide uppercase hover:text-white/85 transition-colors cursor-pointer">
              NASHIAT
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
