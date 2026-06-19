import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Calendar, CheckCircle } from "lucide-react";
import { TIMELINE_DATA } from "../types";

export default function Timeline() {
  return (
    <section
      id="education"
      className="py-24 bg-[#F9F9F7] transition-colors duration-350 border-t border-[#E2E4DE] relative overflow-hidden"
    >
      {/* Subtle lines in background */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#556B2F] font-bold block mb-2.5">
            // Academic Timeline
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#363C2E] leading-tight">
            Education Timeline
          </h3>
          <div className="w-12 h-[2px] bg-[#556B2F] mt-4" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-3xl mx-auto pl-6 md:pl-12">
          
          {/* Vertical Tracking Line */}
          <div className="absolute left-0 top-3 bottom-3 w-[1.5px] bg-[#E2E4DE]" />

          {/* Timeline Cards Loop */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              return (
                <div key={index} className="relative">
                  
                  {/* Bullet Node Indicator */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4 }}
                    className="absolute -left-[30px] md:-left-[54px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#556B2F] flex items-center justify-center z-10"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#556B2F]" />
                  </motion.div>

                  {/* Course Timeline Card layout */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="bg-white p-6 md:p-8 rounded-[18px] border border-[#E2E4DE] shadow-xs hover:shadow-sm transition-all duration-350"
                  >
                    {/* Upper Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-2.5 mb-4">
                      <div>
                        {/* Session Date Badge */}
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#556B2F]/10 text-[#556B2F] rounded-full text-[10px] font-mono uppercase tracking-wider font-bold mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{item.year}</span>
                        </div>
                        
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-[#363C2E] leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center space-x-1 font-mono text-[11px] text-[#5A6050]">
                        <GraduationCap className="w-4 h-4 text-[#556052]" />
                        <span>{item.institution}</span>
                      </div>
                    </div>

                    <p className="font-sans text-[13px] sm:text-[14px] text-[#5A6050] leading-relaxed mb-5 border-l-2 border-[#556B2F]/35 pl-3">
                      {item.description}
                    </p>

                    {/* Bullet elements with custom detail logs */}
                    {item.details && item.details.length > 0 && (
                      <div className="space-y-2.5 pt-2 border-t border-[#E2E4DE]">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-[#556B2F] font-bold">
                          Key Areas / Focus Accomplished
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start space-x-2 text-[12px] text-[#5A6050]">
                              <CheckCircle className="w-3.5 h-3.5 text-[#556B2F] mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
