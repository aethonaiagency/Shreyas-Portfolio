import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Award } from "lucide-react";

// Sub-components
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import QuoteBanner from "./components/QuoteBanner";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CVModal from "./components/CVModal";

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor Scroll Progress & Back To Top status
  useEffect(() => {
    const handleScroll = () => {
      // 1. Back to top button visibility
      setShowBackToTop(window.scrollY > 400);

      // 2. Reading Progress tracker calculations
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="min-h-screen font-sans bg-white text-[#363C2E] transition-colors duration-350 relative pb-0 selection:bg-[#6B705C]/25"
      >
        {/* Scroll Progress Bar (Top of body) */}
        <div className="fixed top-0 left-0 w-full h-[3.5px] z-50 pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-[#6B705C] via-[#BFA56A] to-[#6B705C] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Premium Cursor Follower halo */}
        <CustomCursor />

        {/* Sticky Navigation headers */}
        <Navbar 
          darkMode={false} 
          setDarkMode={() => {}} 
          onOpenCV={() => setCvOpen(true)} 
        />

        {/* Frame Boundaries Decorators for Editorial Style */}
        <div className="no-print hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-widest uppercase text-[#6B705C]/35 -rotate-90 origin-center pointer-events-none z-35 select-none">
          SHREYA HOSSAIN • JOURNALISM PORTFOLIO
        </div>
        
        <div className="no-print hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-widest uppercase text-[#6B705C]/35 rotate-90 origin-center pointer-events-none z-35 select-none">
          EST. SESSION 2024 - 2028
        </div>

        {/* Core Section Elements stacked cleanly */}
        <main id="main-editorial-framework" className="relative">
          <Hero onOpenCV={() => setCvOpen(true)} />
          <About />
          <Timeline />
          <Skills />
          <Experience />
          <QuoteBanner />
          <Works />
          <Contact />
        </main>

        {/* Footer Signoff */}
        <Footer onOpenCV={() => setCvOpen(true)} />

        {/* Back to Top floating gold bubble */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              key="back-to-top"
              initial={{ opacity: 0, scale: 0.5, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 15 }}
              onClick={scrollToTop}
              className="no-print fixed bottom-6 right-6 p-3.5 rounded-full bg-[#6B705C] hover:bg-[#556052] text-white transition-all duration-300 shadow-lg cursor-pointer z-40 border border-white/10"
              title="Scroll to main top"
              whileHover={{ y: -3 }}
              style={{ touchAction: "manipulation" }}
            >
              <ArrowUp className="w-4 h-4 animate-bounce" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Printable Portfolio Resume Modal overlay */}
        <AnimatePresence>
          {cvOpen && (
            <CVModal onClose={() => setCvOpen(false)} />
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
