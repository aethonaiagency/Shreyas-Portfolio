import React from "react";
import { motion } from "motion/react";
import { 
  FileText, PenTool, BookOpen, Palette, Radio, 
  ShieldCheck, Flame, MessageCircle, Users, Zap, Brain, Sliders, ArrowUpRight
} from "lucide-react";
import { EXPERIENCE_DATA, BENTO_ATTRIBUTES } from "../types";

export default function Experience() {

  // Map icons dynamically
  const getExperienceIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-5 h-5 text-[#556B2F]" />;
      case "PenTool":
        return <PenTool className="w-5 h-5 text-[#556052]" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-[#556B2F]" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-[#556B2F]" />;
      default:
        return <Radio className="w-5 h-5" />;
    }
  };

  // Map bento icons based on value
  const getBentoIcon = (value: string) => {
    switch (value) {
      case "Responsible":
        return <ShieldCheck className="w-5 h-5 text-[#556B2F]" />;
      case "Thrives Under Pressure":
        return <Flame className="w-5 h-5 text-orange-650" />;
      case "Communication":
        return <MessageCircle className="w-5 h-5 text-blue-650" />;
      case "Team Player":
        return <Users className="w-5 h-5 text-[#556052]" />;
      case "Fast Learner":
        return <Zap className="w-5 h-5 text-amber-600" />;
      case "Problem Solver":
        return <Brain className="w-5 h-5 text-[#556B2F]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#556B2F]" />;
    }
  };

  // Map background borders on hover for bento attributes
  const getBentoStyles = (index: number) => {
    return "hover:border-[#556B2F] transition-all";
  };

  return (
    <section
      id="experience"
      className="py-24 bg-[#F9F9F7] transition-colors duration-350 border-t border-[#E2E4DE]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* ================= SECTION 1: EXPERIENCE METRICS ================= */}
        <div>
          {/* Section Header */}
          <div className="mb-16 text-left flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#556B2F] font-bold block mb-2.5">
                // Professional Practice
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#363C2E] leading-tight">
                Work & Academic Experience
              </h3>
              <div className="w-12 h-[2px] bg-[#556B2F] mt-4" />
            </div>
            <div className="bg-[#556B2F]/10 border border-[#556B2F]/25 px-4 py-2 rounded-xl text-left max-w-xs">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#556B2F] font-bold">
                Career Status: Student / Active
              </p>
              <p className="font-sans text-[11px] text-[#5A6050] mt-0.5 leading-tight font-medium">
                Synthesizing skills aggressively through university reports, publications, and clinical investigations.
              </p>
            </div>
          </div>

          {/* Luxury Horizontal Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCE_DATA.map((exp, idx) => {
              return (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-60px" }}
                   transition={{ duration: 0.6 }}
                   whileHover={{ y: -4 }}
                   className="bg-white p-6 sm:p-8 rounded-[18px] border border-[#E2E4DE] shadow-xs flex flex-col justify-between hover:shadow-sm transition-all duration-350"
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 rounded-xl bg-[#F9F9F7] border border-[#E2E4DE]">
                        {getExperienceIcon(exp.icon)}
                      </div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#363C2E]">
                        {exp.title}
                      </h4>
                    </div>

                    <p className="font-sans text-[13px] text-[#5A6050] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Long descriptive footprint */}
                  <div className="mt-6 pt-4 border-t border-[#E2E4DE]">
                    <p className="font-sans text-[12px] italic text-[#5A6050]">
                      "{exp.longDescription}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= SECTION 2: BENTO GRID OF ATTRIBUTES ================= */}
        <div>
          {/* Section Header */}
          <div className="mb-14 text-left">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#556B2F] font-bold block mb-2.5">
              // Core Attributes
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#363C2E] leading-tight">
              Personal Attributes & Fit
            </h3>
            <p className="font-sans text-xs text-[#5A6050] mt-1 max-w-sm">
              Exploring cognitive strengths, ethical standards, and performance habits that define my professional output.
            </p>
          </div>

          {/* Bento Grid Construction */}
          <div className="grid grid-cols-12 gap-5">
            {BENTO_ATTRIBUTES.map((bento, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -5, scale: 1.012 }}
                  className={`${bento.span} bg-white p-6 rounded-[18px] border border-[#E2E4DE] hover:shadow-md transition-all duration-350 cursor-pointer flex flex-col justify-between overflow-hidden relative group ${getBentoStyles(idx)}`}
                >
                  
                  {/* Glowing background decor on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#556B2F]/5 blur-2xl group-hover:bg-[#556B2F]/10 pointer-events-none transition-all duration-500" />
                  
                  <div className="space-y-3 relative z-10">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#5A6050] font-bold block">
                        {bento.title}
                      </span>
                      <div className="p-1.5 rounded-lg bg-[#F9F9F7] border border-[#E2E4DE]">
                        {getBentoIcon(bento.value)}
                      </div>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#363C2E] tracking-tight group-hover:text-[#556B2F] transition-colors leading-tight">
                      {bento.value}
                    </h4>
                  </div>

                  <p className="font-sans text-[12px] text-[#5A6050] leading-relaxed mt-4 relative z-10 font-medium">
                    {bento.description}
                  </p>

                  {/* Corner indicator accent */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#556B2F]">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
