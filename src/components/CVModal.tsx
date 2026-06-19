import React from "react";
import { motion } from "motion/react";
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Award, CheckCircle2 } from "lucide-react";
import { ACADEMIC_STATS, SKILLS_DATA } from "../types";

interface CVModalProps {
  onClose: () => void;
}

export default function CVModal({ onClose }: CVModalProps) {
  
  const handlePrint = async () => {
    // Record click analytics
    try {
      await fetch("/api/analytics/cv-download", { method: "POST" });
      console.log("Analytics: Recorded CV print action log.");
    } catch (err) {
      console.warn("Analytics pipeline offline:", err);
    }
    
    // Trigger standard print
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-xs overflow-y-auto print:absolute print:inset-0 print:bg-white print:p-0 print:backdrop-blur-none"
    >
      {/* Outer print container wrapper */}
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        transition={{ duration: 0.4 }}
        className="bg-white text-zinc-900 rounded-[24px] border border-[#D8D8D8] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col print:border-none print:shadow-none print:max-h-full print:rounded-none"
      >
        
        {/* Custom Print Style Injection (only visible during print, hides web UI) */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body * {
              visibility: hidden;
            }
            #cv-print-content, #cv-print-content * {
              visibility: visible;
            }
            #cv-print-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
          }
        `}} />

        {/* Modal control bar (Sticky at the top, hidden when printing) */}
        <div className="no-print p-5 border-b border-[#E2E4DE] bg-[#F9F9F7] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600 font-bold">
              Official Media CV Candidate File
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            {/* Print / Save to PDF Trigger */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-[#556B2F] text-white hover:bg-[#556052] font-mono text-[11px] tracking-wide uppercase font-semibold flex items-center space-x-1.5 cursor-pointer shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Back Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors cursor-pointer"
              title="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Core Resume Sheet Area */}
        <div 
          id="cv-print-content" 
          className="p-8 sm:p-12 md:p-16 space-y-10 bg-white leading-relaxed text-zinc-850"
        >
          {/* Header Row: Large text with contacts */}
          <div className="flex flex-col md:flex-row md:items-start justify-between border-b-2 border-zinc-900 pb-8 gap-6">
            <div className="text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#556B2F] font-semibold">
                Journalism & Media Professional Candidate
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mt-1">
                Shreya Hossen
              </h2>
              <p className="font-serif text-sm italic text-zinc-600 mt-1">
                Dedicated Storyteller, Media Student & Ethical Content Writer
              </p>
            </div>

            {/* Micro contacts list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[12px] font-sans text-zinc-650 text-left">
              <span className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#556B2F]" />
                <a href="mailto:shreyahossen@gmail.com" className="hover:underline">shreyahossen@gmail.com</a>
              </span>
              <span className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#556B2F]" />
                <a href="tel:+8801762493322" className="hover:underline">+880 1762-493322</a>
              </span>
              <span className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#556B2F]" />
                <span>Dhaka, Bangladesh</span>
              </span>
              <span className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-[#556B2F]" />
                <a href="https://www.linkedin.com/in/syeda-samia-hossen-shrea-2a5a76311/" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/syeda-samia-hossen-shrea</a>
              </span>
            </div>
          </div>

          {/* Primary Layout Columns: Two-Column split (Left: Educ, Skills; Right: Experience, details) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start text-left">
            
            {/* Left 4-column space */}
            <div className="md:col-span-5 space-y-8">
              
              {/* Box 1: Core Education details */}
              <div className="space-y-4">
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#556B2F] font-bold border-b border-zinc-200 pb-1.5">
                  Academic Standings
                </h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <p className="font-sans font-bold text-zinc-900">
                      Bachelor of Social Science (BSS)
                    </p>
                    <p className="font-sans text-[#6E6E6E] font-medium mt-0.5">
                      Journalism, Media & Communication
                    </p>
                    <p className="font-serif italic text-zinc-700 mt-1">
                      {ACADEMIC_STATS.university}
                    </p>
                    <p className="font-mono text-[10px] text-zinc-500 mt-0.5">
                      Session: {ACADEMIC_STATS.session} • Semester: {ACADEMIC_STATS.semester}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#556B2F] font-bold">
                      Grade Metric Status
                    </p>
                    <p className="font-serif text-lg font-bold text-zinc-900 mt-0.5">
                      CGPA: {ACADEMIC_STATS.cgpa} / 4.00
                    </p>
                    <p className="font-sans text-[10px] text-zinc-500">
                      Academic profile maintains a perfect score in core Major report modules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2: Skills listed systematically */}
              <div className="space-y-4">
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#556B2F] font-bold border-b border-zinc-200 pb-1.5">
                  Core Skills List
                </h3>
                <div className="space-y-4 text-xs">
                  {SKILLS_DATA.map((cat, cIdx) => (
                    <div key={cIdx} className="space-y-1.5">
                      <p className="font-sans font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                        {cat.title}
                      </p>
                      <ul className="grid grid-cols-1 gap-1 pl-1">
                        {cat.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="flex items-center space-x-2 text-zinc-600">
                            <CheckCircle2 className="w-3 h-3 text-[#556B2F] flex-shrink-0" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 3: Academic References */}
              <div className="space-y-3">
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#556B2F] font-bold border-b border-zinc-200 pb-1.5">
                  References
                </h3>
                <div className="text-[11px] text-zinc-600 space-y-2">
                  <div>
                    <p className="font-bold text-zinc-900">Academic Department Advisor</p>
                    <p className="italic">Department of Journalism, Media & Communication</p>
                    <p>Daffodil International University</p>
                    <p>Credentials available upon direct request.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 7-column space */}
            <div className="md:col-span-7 space-y-8">
              
              {/* Objective statement */}
              <div className="space-y-3">
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#556B2F] font-bold border-b border-zinc-200 pb-1.5">
                  Career Objective
                </h3>
                <p className="font-sans text-xs text-zinc-650 leading-relaxed text-justify">
                  A high-achieving Journalism undergraduate student searching for media research opportunities, content writing collaborations, and editorial internships. Dedicated to applying deep ethical standards, robust fact-checking, and narrative structures to document human, social, and environmental realities.
                </p>
              </div>

              {/* Practical Portfolio Projects details */}
              <div className="space-y-4">
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#556B2F] font-bold border-b border-zinc-200 pb-1.5">
                  Key Academic Projects Showcase
                </h3>
                
                <div className="space-y-4 text-xs">
                  
                  {/* Item 1 */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-sans font-bold text-zinc-900">
                        Buriganga Basin Ecological Investigation
                      </p>
                      <span className="font-mono text-[9px] text-zinc-500">2025</span>
                    </div>
                    <p className="font-serif italic text-[#556B2F]">
                      Lead Research Author • Media Reports major
                    </p>
                    <p className="text-zinc-600 leading-relaxed text-justify">
                      Formulated a multimedia story cataloguing tannery dump expansions, interviewing river communities, and framing public policy recovery plans. Highly praised for empirical clarity.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-sans font-bold text-zinc-900">
                        Modern Newsrooms AI Integration Guidelines
                      </p>
                      <span className="font-mono text-[9px] text-zinc-500">2026</span>
                    </div>
                    <p className="font-serif italic text-[#556B2F]">
                      Independent Researcher • Research Papers major
                    </p>
                    <p className="text-zinc-600 leading-relaxed text-justify">
                      Analyzed systematic biases in automated copywriting utilities, outlining a detailed 'Human-in-the-Loop' handbook to guarantee factuality and copyright safety.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-sans font-bold text-zinc-900">
                        Dhaka Grassroots Micro-Economies Narrative series
                      </p>
                      <span className="font-mono text-[9px] text-zinc-500">2025</span>
                    </div>
                    <p className="font-serif italic text-[#556B2F]">
                      Feature Essayist • Content Writing major
                    </p>
                    <p className="text-zinc-600 leading-relaxed text-justify">
                      Authored eight detailed biographical profiles of local street merchants, highlighting daily financing constraints and lifestyle changes with high literary appeal.
                    </p>
                  </div>

                </div>
              </div>

              {/* Achievements credentials */}
              <div className="space-y-3">
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#556B2F] font-bold border-b border-zinc-200 pb-1.5">
                  Relevant Certifications
                </h3>
                <div className="space-y-2 text-xs text-zinc-600">
                  <div className="flex items-start space-x-2">
                    <Award className="w-3.5 h-3.5 text-[#BFA56A] mt-0.5 flex-shrink-0" />
                    <span>Media Ethics Department Accreditation - Perfect Scoring Student</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Award className="w-3.5 h-3.5 text-[#BFA56A] mt-0.5 flex-shrink-0" />
                    <span>Representative of student committee cohort, Department of JMC, Daffodil International University</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Verification stamp foot of printed document */}
          <div className="pt-10 mt-12 border-t border-zinc-200 flex items-center justify-between font-mono text-[9px] text-zinc-400 uppercase">
            <span>Verified candidate file: shreyahossen@gmail.com</span>
            <span>DIU/JMC cohort 2024-2028</span>
          </div>

        </div>

        {/* Action footnote warning (Only visible on web modal footer) */}
        <div className="no-print p-4 bg-[#F9F9F7] border-t border-[#E2E4DE] text-center font-sans text-[11px] text-[#5A6050]">
          <span>Tip: Selecting <strong>Print / Save PDF</strong> allows you to save this CV as a perfectly formatted offline document or send it straight to an active desk printer.</span>
        </div>

      </motion.div>
    </motion.div>
  );
}
