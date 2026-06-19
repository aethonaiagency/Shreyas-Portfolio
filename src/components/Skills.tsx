import React from "react";
import { motion } from "motion/react";
import { PenTool, Laptop, Users, CheckCircle } from "lucide-react";
import { SKILLS_DATA, SkillCategory } from "../types";

export default function Skills() {
  
  // Icon selector helper
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Journalism & Writing":
        return <PenTool className="w-5 h-5 text-[#556B2F]" />;
      case "Technical Utilities":
        return <Laptop className="w-5 h-5 text-[#556B2F]" />;
      case "Communication & Core":
        return <Users className="w-5 h-5 text-[#556B2F]" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-white transition-colors duration-350 border-t border-[#E2E4DE]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#556B2F] font-bold block mb-2.5">
              // Competencies & Methods
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#363C2E] leading-tight">
              Skills & Expertise
            </h3>
            <div className="w-12 h-[2px] bg-[#556B2F] mt-4" />
          </div>
          <p className="font-sans text-[13px] text-[#5A6050] max-w-sm md:text-right">
            Blending traditional reportage standards with digital creation assets and modern workspace efficiency.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category: SkillCategory, idx: number) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-[#F9F9F7] border border-[#E2E4DE] p-6 md:p-8 rounded-[18px] hover:border-[#556B2F]/50 transition-all duration-350 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#E2E4DE]">
                    <div className="p-2 rounded-xl bg-white border border-[#E2E4DE] shadow-xs">
                      {getCategoryIcon(category.title)}
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-semibold text-[#363C2E]">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills List inside this category */}
                  <ul className="space-y-3">
                    {category.skills.map((skill: string, sIdx: number) => {
                      return (
                        <motion.li
                          key={sIdx}
                          whileHover={{ x: 2 }}
                          className="flex items-center space-x-2.5 py-1"
                        >
                          {/* Checked icon indicator */}
                          <div className="w-1.5 h-1.5 rounded-full bg-[#556B2F]" />
                          <span className="font-sans text-[13px] sm:text-[14px] text-[#363C2E] font-medium">
                            {skill}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>

                {/* Additional design stamp inside card */}
                <div className="mt-8 pt-4 border-t border-[#E2E4DE] flex items-center justify-between text-[#5A6050]">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">
                    Term Certified
                  </span>
                  <div className="flex space-x-1">
                    <span className="w-1 h-1 rounded-full bg-[#556B2F]" />
                    <span className="w-1 flex-1 h-[2px] rounded-full  bg-[#556052]" />
                    <span className="w-1 h-1 rounded-full bg-[#556B2F]" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
