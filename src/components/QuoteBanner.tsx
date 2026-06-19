import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Newspaper } from "lucide-react";
import { JOURNALISM_QUOTES } from "../types";

export default function QuoteBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIndex((prev) => (prev + 1) % JOURNALISM_QUOTES.length);
    }, 8500);

    return () => clearInterval(cycle);
  }, []);

  const activeQuote = JOURNALISM_QUOTES[index];

  return (
    <section className="py-20 bg-gradient-to-r from-[#556B2F] to-[#556052] text-white relative overflow-hidden transition-colors duration-350 select-none">
      
      {/* Editorial grid overlay inside dark quote division */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-5" />
      
      {/* Abstract thin line borders */}
      <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-white/10" />
      <div className="absolute top-0 bottom-0 right-10 w-[1px] bg-white/10" />

      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center space-y-4">
        
        {/* Newspaper symbol decoration */}
        <div className="p-3 bg-white/10 border border-white/20 rounded-full text-white mb-2 animate-pulse-slow">
          <Newspaper className="w-5 h-5" />
        </div>

        {/* Animated quote slideshow */}
        <div className="min-h-[140px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic leading-relaxed text-white max-w-3xl mx-auto">
                "{activeQuote.quote}"
              </h4>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="w-6 h-[1px] bg-white/50" />
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-white/95">
                  {activeQuote.author}
                </p>
                <span className="w-6 h-[1px] bg-white/50" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Index indicator bullets */}
        <div className="flex items-center space-x-2 pt-6">
          {JOURNALISM_QUOTES.map((_, qIdx) => (
            <button
              key={qIdx}
              onClick={() => setIndex(qIdx)}
              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                index === qIdx 
                  ? "bg-white w-4" 
                  : "bg-white/35 hover:bg-white/60"
              }`}
              title={`Quote slide ${qIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
