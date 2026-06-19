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
    <footer className="bg-[#3a4a17] text-[#F9F9F7] py-16 transition-colors duration-350 select-none relative z-10 border-t border-white/5">
      
      {/* Editorial Grid Backing on Dark Footer */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo block (column 5) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button 
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 group text-left cursor-pointer"
            >
              <div className="flex items-center">
                <span className="font-sans font-black text-xl tracking-tighter text-white transition-all">
                  SHREYA
                </span>
                <span className="text-xl font-black text-[#a78bfa] group-hover:animate-bounce">.</span>
              </div>
              <div className="pl-2 border-l border-white/20">
                <p className="font-mono text-[9px] tracking-wider uppercase text-white/80 group-hover:text-white transition-colors leading-none">
                  Journalism
                </p>
                <p className="font-sans text-[8px] tracking-wider text-white/50 leading-none mt-0.5">
                  Portfolio
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
                href="https://www.linkedin.com/in/syeda-samia-hossen-shrea-2a5a76311/" 
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
          <p>© {currentYear} Shreya Hossen. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
