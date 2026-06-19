import React from "react";
import { motion } from "motion/react";
import { X, Printer, Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { ACADEMIC_STATS } from "../types";

interface CVModalProps {
  onClose: () => void;
}

export default function CVModal({ onClose }: CVModalProps) {
  
  const handlePrint = async () => {
    try {
      await fetch("/api/analytics/cv-download", { method: "POST" });
      console.log("Analytics: Recorded CV print action log.");
    } catch (err) {
      console.warn("Analytics pipeline offline:", err);
    }
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-zinc-950/80 backdrop-blur-xs overflow-y-auto print:absolute print:inset-0 print:bg-white print:p-0 print:backdrop-blur-none"
    >
      {/* Outer print container wrapper */}
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        transition={{ duration: 0.4 }}
        className="bg-[#2D3C1F] text-zinc-900 sm:rounded-[24px] border border-[#2D3C1F] w-full max-w-5xl md:max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col print:border-none print:shadow-none print:max-h-full print:rounded-none"
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
              background-color: white !important;
              color: black !important;
            }
            .sidebar-bg {
              background-color: #2D3C1F !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .header-bg {
              background-color: #2D3C1F !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .tag-bg {
              background-color: #2D3C1F !important;
              color: white !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .no-print {
              display: none !important;
            }
          }
        `}} />

        {/* Modal control bar (Sticky at the top, hidden when printing) */}
        <div className="no-print p-4 sm:p-5 border-b border-white/10 bg-[#2D3C1F] flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#D1DBC5] font-bold">
              Syeda Samia Hossen Shreya — CV Media File
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            {/* Print / Save to PDF Trigger */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-[#EAF2E1] text-[#2D3C1F] hover:bg-white font-mono text-[11px] tracking-wide uppercase font-bold flex items-center space-x-1.5 cursor-pointer shadow transition-all hover:scale-105"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Back Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              title="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Core Resume Sheet Area */}
        <div 
          id="cv-print-content" 
          className="grid grid-cols-1 md:grid-cols-12 bg-white text-zinc-900 leading-relaxed text-left min-h-[1100px]"
        >
          {/* LEFT SIDEBAR (Deep Olive/Forest Green) */}
          <div className="md:col-span-4 bg-[#2D3C1F] sidebar-bg text-white p-8 sm:p-10 flex flex-col justify-between space-y-12">
            <div>
              {/* Profile Portrait */}
              <div className="relative w-44 h-44 mx-auto mb-8 rounded-full border-4 border-white/35 overflow-hidden shadow-lg bg-zinc-800">
                <img 
                  src="/assets/images/shreya_portrait.jpg" 
                  alt="Syeda Samia Hossen Shreya Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bio Profile */}
              <div className="space-y-4 mb-10">
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-lg tracking-wider font-bold uppercase pb-1.5 border-b border-white/20">
                    Profile
                  </h3>
                </div>
                <p className="text-[11.5px] text-[#E5ECE0] leading-relaxed text-justify font-sans">
                  Undergraduate Student of Journalism, Media & Communication | Aspiring Researcher & Content Writer | Passionate About Storytelling, Feature Writing, Media Literacy & Development Communication.
                </p>
              </div>

              {/* Languages */}
              <div className="space-y-4 mb-10">
                <h3 className="font-serif text-lg tracking-wider font-bold uppercase pb-1.5 border-b border-white/20">
                  Language
                </h3>
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <div className="flex justify-between items-center mb-1 text-[#E5ECE0]">
                      <span>English</span>
                      <span className="text-[10px] text-white/70">Highly Proficient</span>
                    </div>
                    <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full rounded-full" style={{ width: "90%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1 text-[#E5ECE0]">
                      <span>Bangla</span>
                      <span className="text-[10px] text-white/70">Native / Bilingual</span>
                    </div>
                    <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Road Map */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg tracking-wider font-bold uppercase pb-1.5 border-b border-white/20">
                  My Skills
                </h3>
                <div className="relative pl-6 border-l border-white/25 ml-2 space-y-6 py-1">
                  {[
                    "Writing",
                    "Canva",
                    "MS Word",
                    "MS PowerPoint",
                    "Adobe Lightroom",
                    "Capcut"
                  ].map((skill, index) => (
                    <div key={index} className="relative text-xs">
                      {/* Timeline dot */}
                      <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#2D3C1F]" />
                      <span className="font-sans font-medium text-[#E5ECE0]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro details Footer of Sidebar */}
            <div className="pt-8 border-t border-white/10 font-mono text-[9px] text-[#A2B591] tracking-wider uppercase text-center md:text-left">
              <span>Verification ID: SH-2026-DIU</span>
            </div>
          </div>

          {/* RIGHT CONTENT WORKSPACE (White background with deep olive accents) */}
          <div className="md:col-span-8 p-8 sm:p-12 md:p-14 flex flex-col justify-between space-y-10">
            {/* High-Fidelity Header block */}
            <div>
              {/* CV Title Header block */}
              <div className="bg-[#2D3C1F] header-bg text-white p-6 sm:p-7 rounded-[18px] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow">
                {/* Visual Accent Overlay */}
                <div className="absolute right-0 top-0 bottom-0 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="h-full w-auto text-white fill-current">
                    <circle cx="85" cy="15" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="85" cy="15" r="25" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </div>

                <div className="text-center sm:text-left z-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D1DBC5] font-semibold">
                    Curriculum Vitae
                  </span>
                  <p className="font-mono text-[9px] text-[#F4F6F2] tracking-wider uppercase mt-0.5">
                    of
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
                    Syeda Samia Hossen Shreya
                  </h2>
                </div>

                {/* Micro contacts info inside dark header block to mirror PDF layout */}
                <div className="grid grid-cols-1 gap-2 text-xs text-[#E5ECE0] z-10 text-center sm:text-left">
                  <span className="flex items-center justify-center sm:justify-start space-x-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
                    <a href="tel:+880162493322" className="hover:underline">+880 162493322</a>
                  </span>
                  <span className="flex items-center justify-center sm:justify-start space-x-2">
                    <Mail className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
                    <a href="mailto:shreyahossen@gmail.com" className="hover:underline">shreyahossen@gmail.com</a>
                  </span>
                  <span className="flex items-center justify-center sm:justify-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
                    <span>Mirpur-2, Dhaka 1216</span>
                  </span>
                  <span className="flex items-center justify-center sm:justify-start space-x-2">
                    <Linkedin className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
                    <a href="https://www.linkedin.com/in/syeda-samia-hossen-shrea-2a5a76311/" target="_blank" rel="noreferrer" className="hover:underline text-[10.5px]">linkedin.com/in/syeda-samia-hossen-shrea</a>
                  </span>
                </div>
              </div>

              {/* Education Block */}
              <div className="mt-10 space-y-4">
                <div className="inline-block bg-[#2D3C1F] tag-bg text-white font-serif font-bold text-sm tracking-wider uppercase py-1.5 px-6 rounded-r-[4px]">
                  Education
                </div>
                <div className="pl-2 pt-2 border-l border-zinc-200 ml-1 space-y-1 group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h4 className="font-sans font-bold text-zinc-900 text-[14px]">
                      BSS in Journalism, Media and Communication
                    </h4>
                    <span className="font-mono text-[10.5px] text-zinc-500 font-bold sm:text-right">
                      Session: 2024 - 2028
                    </span>
                  </div>
                  <p className="font-serif text-[13px] text-zinc-700 italic">
                    Daffodil International University
                  </p>
                  <p className="font-sans text-[11.5px] text-zinc-600 mt-1">
                    Current Semester: <strong className="text-zinc-800">6th Semester (Summer 2026)</strong>
                  </p>
                  <p className="font-sans text-[11.5px] text-zinc-600">
                    Current CGPA : <strong className="text-zinc-800">4.00</strong> / 4.00
                  </p>
                </div>
              </div>

              {/* Experience Block */}
              <div className="mt-8 space-y-4">
                <div className="inline-block bg-[#2D3C1F] tag-bg text-white font-serif font-bold text-sm tracking-wider uppercase py-1.5 px-6 rounded-r-[4px]">
                  Experience
                </div>
                <div className="pl-2 pt-2 border-l border-zinc-200 ml-1 space-y-2">
                  <div>
                    <h4 className="font-sans font-bold text-zinc-900 text-[14px] uppercase tracking-wide">
                      Fresher
                    </h4>
                    <p className="font-sans text-[12.5px] text-zinc-600 leading-relaxed text-justify mt-1.5">
                      Actively building practical skills through academic projects, content writing, book reviews, digital design, and independent media work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Published Work Block */}
              <div className="mt-8 space-y-4">
                <div className="inline-block bg-[#2D3C1F] tag-bg text-[#2D3C1F] font-serif font-semibold text-sm tracking-widest uppercase border-b-2 border-[#2D3C1F]/40 pb-0.5">
                  Published Work
                </div>
                
                <div className="flex items-start justify-between gap-4 pl-1">
                  <div className="text-xs space-y-1 max-w-[85%]">
                    <p className="font-sans font-bold text-zinc-950">
                      Feature Article inside The Daily Star:
                    </p>
                    <p className="italic text-[#2D3C1F] font-serif hover:underline block">
                      Revisiting Satyajit Ray in the Age of Noise
                    </p>
                    <a 
                      href="https://www.thedailystar.net/slow-reads/focus/news/revisiting-satyajit-ray-the-age-noise-4165796" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="font-mono text-[10.5px] text-emerald-700 hover:underline flex items-center gap-1 break-all mt-1"
                    >
                      <span>https://www.thedailystar.net/slow-reads/focus/news/revisiting-satyajit-ray-the-age-noise-4165796</span>
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </a>
                  </div>

                  {/* High Fidelity QR Code representation block to match the original layout */}
                  <div className="flex-shrink-0 flex flex-col items-center bg-zinc-55 border border-zinc-200 p-1.5 rounded-lg no-print">
                    <div className="w-12 h-12 bg-white flex items-center justify-center relative">
                      {/* Neat little QR code mock pattern */}
                      <div className="absolute inset-1 grid grid-cols-5 gap-0.5 opacity-80">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div 
                            key={i} 
                            style={{ backgroundColor: (i * 7 + 3) % 5 === 0 ? "#2D3C1F" : "transparent" }} 
                            className="rounded-2xs" 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono font-bold text-zinc-500 uppercase mt-1">Scan Link</span>
                  </div>
                </div>
              </div>

              {/* Additional Work Block */}
              <div className="mt-8 space-y-3">
                <div className="inline-block bg-[#2D3C1F] tag-bg text-[#2D3C1F] font-serif font-semibold text-sm tracking-widest uppercase border-b-2 border-[#2D3C1F]/40 pb-0.5">
                  Additional Work
                </div>
                
                <div className="text-xs pl-1">
                  <p className="font-sans font-bold text-zinc-950 mb-0.5">
                    Photo Story & Editorial Archive:
                  </p>
                  <a 
                    href="https://dailysphere2.wordpress.com/photo-story/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-mono text-[11px] text-emerald-700 hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>https://dailysphere2.wordpress.com/photo-story/</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* Personal Attributes Block */}
              <div className="mt-8 space-y-4">
                <div className="inline-block bg-[#2D3C1F] tag-bg text-[#2D3C1F] font-serif font-semibold text-sm tracking-widest uppercase border-b-2 border-[#2D3C1F]/40 pb-0.5">
                  Personal Attributes
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-zinc-700 pl-1">
                  {[
                    "Strong sense of responsibility",
                    "Ability to work under pressure",
                    "Effective communication skills",
                    "Team-oriented mindset",
                    "Open to learning and challenges"
                  ].map((attr, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D3C1F]" />
                      <span>{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Declaration at footer of print sheet */}
            <div className="pt-10 mt-14 border-t border-zinc-200 text-center space-y-4">
              <p className="font-serif italic text-zinc-800 text-[11.5px] max-w-lg mx-auto">
                "I hereby declare that the information stated above is true and accurate to the best of my knowledge."
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-[8.5px] text-zinc-400 uppercase tracking-widest">
                <span>Verified Candidate — Syeda Samia Hossen Shreya</span>
                <span>DIU Department of Journalism, Media & Comm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action footnote warning (Only visible on web modal footer) */}
        <div className="no-print p-4 bg-[#F2F5EF] border-t border-[#D3DEC6] text-center font-sans text-[11px] text-[#2D3C1F] font-medium rounded-b-[24px]">
          <span>Tip: Selecting <strong>Print / Save PDF</strong> allows you to save this CV as a perfectly formatted offline document or send it straight to an active desk printer.</span>
        </div>

      </motion.div>
    </motion.div>
  );
}
