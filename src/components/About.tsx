import React from "react";
import { motion } from "motion/react";
import { BookOpen, Award, Compass, GraduationCap, Calendar } from "lucide-react";
import { ACADEMIC_STATS } from "../types";

// Reference the generated desktop workspace image directly as a relative string asset
const desktopImg = "/src/assets/images/journalism_desktop_1781843617300.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white transition-colors duration-350 border-t border-[#E2E4DE]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#6B705C] font-bold block mb-2.5">
            // Profile & Bio
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#363C2E] leading-tight">
            About Me
          </h3>
          <div className="w-12 h-[2px] bg-[#6B705C] mt-4" />
        </div>

        {/* Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Elegant Editorial Framed Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[340px] aspect-[3/4]"
            >
              {/* Gold frame overlay backing */}
              <div className="absolute -inset-3.5 rounded-[22px] border border-[#6B705C]/25" />
              
              {/* Outer border container */}
              <div className="absolute inset-0 rounded-[18px] bg-[#6B705C]/5 border border-[#E2E4DE]" />
              
              {/* Image holder */}
              <div className="absolute inset-[8px] rounded-[14px] overflow-hidden group shadow-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B705C]/15 to-transparent z-10 pointer-events-none" />
                <img
                  src={desktopImg}
                  alt="Journalism Desk"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Small Overlay Decorative Card */}
              <div className="absolute -bottom-6 -right-6 md:-right-8 bg-white border border-[#E2E4DE] p-4 rounded-xl shadow-lg max-w-[200px] z-20">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="p-1 rounded bg-[#6B705C]/15 text-[#6B705C]">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-[9px] tracking-wider uppercase text-[#363C2E] font-bold">
                    Core Philosophy
                  </span>
                </div>
                <p className="font-serif text-[11px] leading-relaxed text-[#5A6050] italic">
                  "A story doesn't matter unless it drives truthful, positive clarity to human lives."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Biography content & statistics cards */}
          <div className="lg:col-span-7 space-y-9">
            
            {/* Biography text */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-[#363C2E] font-normal italic">
                Shreya Hossain — Journalist, researcher, and critical observer.
              </h4>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#5A6050]">
                I am currently pursuing a Bachelor of Social Science (BSS) in Journalism, Media & Communication at <strong>Daffodil International University</strong>. Driven by a deep curiosity for social truths and a dedication to media integrity, I craft long-form reports, analyze literature, and design communicative frameworks.
              </p>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#5A6050]">
                My academic journey is anchored by a stellar academic profile and a constant push toward practical media experiments. I balance traditional, bulletproof investigative values with modern digital storytelling techniques, preparing myself to champion ethical insights in tomorrow's public feeds.
              </p>
            </div>

            {/* Statistics Cards Grids - 4 columns on tablets/desktops */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3.5">
              
              {/* Card 1: CGPA */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-[#E2E4DE] p-4 rounded-[18px] text-center flex flex-col justify-between shadow-xs hover:border-[#6B705C]/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-2.5">
                  <div className="p-2 rounded-full bg-[#6B705C]/10 text-[#6B705C]">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#6B705C]">
                    {ACADEMIC_STATS.cgpa}
                  </p>
                  <p className="font-sans text-[10px] tracking-wide uppercase text-[#5A6050] font-semibold mt-1">
                    Cumulative CGPA
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Current term */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-[#E2E4DE] p-4 rounded-[18px] text-center flex flex-col justify-between shadow-xs hover:border-[#6B705C]/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-2.5">
                  <div className="p-2 rounded-full bg-[#556052]/10 text-[#556052]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#363C2E]">
                    {ACADEMIC_STATS.semester}
                  </p>
                  <p className="font-sans text-[10px] tracking-wide uppercase text-[#5A6050] font-semibold mt-1">
                    Current Semester
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Major program */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-[#E2E4DE] p-4 rounded-[18px] text-center col-span-1 flex flex-col justify-between shadow-xs hover:border-[#6B705C]/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-2.5">
                  <div className="p-2 rounded-full bg-[#6B705C]/10 text-[#6B705C]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="font-serif text-[13px] font-semibold leading-tight text-[#363C2E] line-clamp-2">
                    Journalism Major
                  </p>
                  <p className="font-sans text-[10px] tracking-wide uppercase text-[#5A6050] font-semibold mt-1">
                    Academic Degree
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Expected graduation */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-[#E2E4DE] p-4 rounded-[18px] text-center flex flex-col justify-between shadow-xs hover:border-[#6B705C]/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-2.5">
                  <div className="p-2 rounded-full bg-[#556052]/10 text-[#556052]">
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#363C2E]">
                    {ACADEMIC_STATS.graduation}
                  </p>
                  <p className="font-sans text-[10px] tracking-wide uppercase text-[#5A6050] font-semibold mt-1">
                    Expected Grad
                  </p>
                </div>
              </motion.div>

            </div>

            {/* University Citation Footnote */}
            <div className="p-4 rounded-[12px] bg-[#6B705C]/5 border border-[#6B705C]/20 flex items-start space-x-3">
              <GraduationCap className="w-4.5 h-4.5 text-[#6B705C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-serif text-[12px] font-semibold text-[#363C2E]">
                  {ACADEMIC_STATS.university}
                </p>
                <p className="font-sans text-[11px] text-[#5A6050]">
                  Affiliated Session: {ACADEMIC_STATS.session} • Department of Journalism, Media & Communication
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
