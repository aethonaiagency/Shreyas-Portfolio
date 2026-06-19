import React from "react";
import { Phone, Mail, Linkedin, MapPin, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white transition-colors duration-350 border-t border-[#E2E4DE] relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#556B2F] font-bold block mb-2.5">
            // Connections & inquiries
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#363C2E] leading-tight">
            Contact Me
          </h3>
          <div className="w-12 h-[2px] bg-[#556B2F] mt-4" />
        </div>

        {/* Master Contact Card */}
        <div className="bg-white rounded-[24px] border border-[#E2E4DE] overflow-hidden shadow-xs">
          
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#556B2F] to-[#556052] text-white relative overflow-hidden">
            
            {/* Fine design element blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
              
              {/* Left Column: Heading and Description (5 columns) */}
              <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 font-bold">
                    Quick Credentials
                  </span>
                  <h4 className="font-serif text-3xl font-normal leading-tight">
                    Reach Out Directly
                  </h4>
                  <p className="font-sans text-[13px] text-white/85 leading-relaxed max-w-sm">
                    Let's cooperate on upcoming journalism profiles, research collaborations, or summer digital internships.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">Professional Handles</span>
                  
                  <div className="flex">
                    <a
                      href="https://www.linkedin.com/in/syeda-samia-hossen-shrea-2a5a76311/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#5A6050] hover:bg-white hover:text-[#363C2E] border border-white/10 text-center font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn Workspace</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Informative Lines Grid (7 columns) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                  
                  {/* Mail address */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-white/70">Email Address</p>
                      <a href="mailto:shreyahossen@gmail.com" className="font-sans text-sm hover:underline hover:text-white/90 transition-colors font-semibold block mt-1">
                        shreyahossen@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-white">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-white/70">Mobile Coordinate</p>
                      <a href="tel:+880162493322" className="font-sans text-sm hover:underline hover:text-white/90 transition-colors font-semibold block mt-1">
                        +880 162493322
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-white/70">Local Region</p>
                      <p className="font-sans text-sm font-semibold mt-1">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Availability status sticker */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-emerald-300">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-white/70">Internship Availability</p>
                      <div className="mt-1.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 bg-emerald-500/20 text-emerald-200 border border-emerald-500/20 rounded-full font-mono text-[10px] uppercase font-bold tracking-wide animate-pulse">
                          Available for Roles
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
