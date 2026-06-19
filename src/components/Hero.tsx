import React from "react";
import { motion } from "motion/react";
import { Newspaper, Mic, PenTool, Award, MessageSquare, ArrowDown, FileText } from "lucide-react";

// Reference the generated image path directly as a relative string asset
const portraitImg = "/src/assets/images/shreya_portrait_1781843448678.jpg";

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  // floating animation config
  const floatTransition = (delay: number) => ({
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
      delay: delay,
    },
    rotate: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
      delay: delay,
    }
  });

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden newspaper-texture bg-white transition-colors duration-350"
    >
      {/* Editorial grid layout as design backdrop */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />

      {/* Decorative blurred blobs of Olive Green behind content */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-[#6B705C]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-[#6B705C]/5 blur-3xl pointer-events-none" />

      {/* Fine editorial layout marker lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[#E2E4DE] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[#E2E4DE] hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Brand Introductions */}
          <div className="lg:col-span-7 flex flex-col space-y-7 text-left">
            <div className="space-y-3.5">
              
              {/* Premium Subtitle */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2 text-[#6B705C]"
              >
                <span className="w-8 h-[1px] bg-[#6B705C]" />
                <span className="font-mono text-[11px] tracking-widest uppercase font-semibold">
                  Undergrad Portfolio
                </span>
              </motion.div>

              {/* Large Headings */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#363C2E]">
                <span className="block overflow-hidden py-1">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    Journalism Student<span className="text-[#6B705C]">.</span>
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    Storyteller<span className="text-[#6B705C] font-light">.</span>
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1 text-2xl sm:text-3xl lg:text-4xl mt-3 text-[#556052] font-accent italic">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    Future Media Professional
                  </motion.span>
                </span >
              </h2>
            </div>

            {/* Description Body */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#5A6050] max-w-xl"
            >
              Passionate about ethical journalism, digital storytelling, and impactful communication. Dedicated to producing meaningful content that informs, inspires, and creates positive change in local and national communities.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-3.5"
            >
              {/* Premium Pill Trigger button for CV */}
              <button
                onClick={onOpenCV}
                className="px-7 py-3.5 rounded-full bg-[#6B705C] hover:bg-[#556052] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-350 cursor-pointer shadow-md hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              {/* Contact me scroll button */}
              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-full border border-[#6B705C]/35 bg-white/40 text-[#6B705C] hover:border-[#6B705C] text-xs font-semibold tracking-widest uppercase transition-all duration-350 cursor-pointer hover:bg-[#6B705C]/5 flex items-center space-x-1"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Portrait inside luxury editorial frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4]">
              
              {/* Luxury Frame Behind Gradients */}
              <div className="absolute inset-0 rounded-[18px] bg-gradient-to-tr from-[#6B705C]/20 via-transparent to-[#6B705C]/10 blur-xl -z-10 animate-pulse-slow" />
              
              {/* Soft outer thin border */}
              <div className="absolute -inset-2.5 rounded-[22px] border border-[#E2E4DE]" />
              
              {/* Framing background graphic backing */}
              <div className="absolute inset-0 rounded-[18px] bg-[#6B705C]/5 border border-[#E2E4DE]" />
              
              {/* Image element with overlay shade */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-[6px] rounded-[15px] overflow-hidden group shadow-lg"
              >
                {/* Subtle overlay shading for luxury feeling */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 mix-blend-multiply opacity-60" />
                
                {/* Hover zoom picture */}
                <motion.img
                  src={portraitImg}
                  alt="Shreya Hossain"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  referrerPolicy="no-referrer"
                />

                {/* Embedded status sticker tag */}
                <div className="absolute bottom-4 left-4 z-20 bg-white/95 px-3 py-1.5 rounded-full border border-[#E2E4DE] backdrop-blur-sm shadow-sm flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#6B705C] animate-ping" />
                  <span className="font-mono text-[9px] tracking-wider uppercase text-[#363C2E] font-bold">
                    6th Semester • DIU
                  </span>
                </div>
              </motion.div>

              {/* Floating Animated Icons in the space */}
              
              {/* Icon Left top - Newspaper */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 8, 0] }}
                transition={floatTransition(0)}
                className="absolute -left-5 top-1/6 z-30 p-2.5 rounded-xl bg-white border border-[#E2E4DE] shadow-md text-[#6B705C]"
              >
                <Newspaper className="w-4.5 h-4.5" />
              </motion.div>

              {/* Icon Right Top - Pen tool */}
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -12, 0] }}
                transition={floatTransition(1.2)}
                className="absolute -right-4 top-1/3 z-30 p-2.5 rounded-xl bg-white border border-[#E2E4DE] shadow-md text-[#556052]"
              >
                <PenTool className="w-4.5 h-4.5" />
              </motion.div>

              {/* Icon Left Bottom - Mic */}
              <motion.div
                animate={{ y: [-5, 8, -5], rotate: [0, 5, 0] }}
                transition={floatTransition(2.3)}
                className="absolute -left-6 bottom-1/4 z-30 p-2.5 rounded-xl bg-white border border-[#E2E4DE] shadow-md text-[#6B705C]"
              >
                <Mic className="w-4.5 h-4.5" />
              </motion.div>

              {/* Icon Right Bottom - Message */}
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -6, 0] }}
                transition={floatTransition(1.8)}
                className="absolute -right-3 bottom-1/8 z-30 p-2.5 rounded-xl bg-white border border-[#E2E4DE] shadow-md text-[#6B705C]"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </motion.div>

            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center pt-16">
          <motion.button
            onClick={() => {
              const el = document.getElementById("about");
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-1.5 text-[#5A6050] hover:text-[#363C2E] group transition-colors cursor-pointer"
          >
            <span className="font-mono text-[9px] tracking-widest uppercase font-semibold">Scroll Down</span>
            <ArrowDown className="w-4 h-4 font-light text-[#6B705C]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
