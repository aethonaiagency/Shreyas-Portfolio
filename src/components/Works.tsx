import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Tag, ArrowRight, X, Quote } from "lucide-react";
import { FEATURED_WORKS, Project } from "../types";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Content Writing",
    "Book Reviews",
    "University Projects",
    "Research Papers",
    "Media Reports"
  ];

  const filteredProjects = selectedCategory === "All"
    ? FEATURED_WORKS
    : FEATURED_WORKS.filter(p => p.category === selectedCategory);

  return (
    <section
      id="works"
      className="py-24 bg-white transition-colors duration-350 border-t border-[#E2E4DE]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-14 text-left flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#556B2F] font-bold block mb-2.5">
              // Portfolio Showcase
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#363C2E] leading-tight">
              Featured Editorial Works
            </h3>
            <div className="w-12 h-[2px] bg-[#556B2F] mt-4" />
          </div>
          <p className="font-sans text-[13px] text-[#5A6050] max-w-sm">
            Select a category banner below to filter investigations, literature reviews, and digital content. All features are fully CMS-ready.
          </p>
        </div>

        {/* Categories Tab Selector bar */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-2.5 border-b border-[#E2E4DE]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#556B2F] text-white font-semibold"
                    : "bg-[#F9F9F7] text-[#5A6050] hover:bg-[#556B2F]/10 border border-[#E2E4DE]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Works Flex / Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => {
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="bg-[#F9F9F7] rounded-[18px] border border-[#E2E4DE] shadow-xs overflow-hidden flex flex-col justify-between group interactive-card hover:border-[#556B2F]/40 transition-all duration-350"
                >
                  <div>
                    {/* Cover graphic */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
                      
                      {/* Category Sticker overlay */}
                      <span className="absolute top-4 left-4 z-20 bg-white/94 border border-[#E2E4DE] px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase text-[#556B2F] font-bold">
                        {project.category}
                      </span>
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Metadata column */}
                    <div className="p-6 md:p-7 space-y-4">
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-[#5A6050]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.date}</span>
                        <span>•</span>
                        <span>By Shreya Hossen</span>
                      </div>

                      <h4 className="font-serif text-lg leading-snug font-semibold text-[#363C2E] group-hover:text-[#556B2F] transition-colors line-clamp-2">
                        {project.title}
                      </h4>

                      <p className="font-sans text-[13px] text-[#5A6050] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Read trigger action bar */}
                  <div className="px-6 pb-6 md:px-7 md:pb-7 flex items-center justify-between pt-4 border-t border-[#E2E4DE]">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {project.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-sans px-2 py-0.5 bg-white border border-[#E2E4DE] text-[#5A6050] rounded font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#556B2F] hover:text-[#556052] transition-colors cursor-pointer group/btn"
                    >
                      <span>Read Text</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Reader Modal Popup */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                className="bg-white text-[#363C2E] rounded-[24px] border border-[#E2E4DE] w-full max-w-3xl max-h-[88vh] overflow-y-auto shadow-2xl relative newspaper-texture"
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white hover:bg-[#556B2F] hover:text-white border border-[#E2E4DE] transition-colors cursor-pointer shadow-sm text-[#363C2E]"
                  title="Close Reader"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Banner Hero of article */}
                <div className="relative aspect-[21/9] w-full overflow-hidden border-b border-[#E2E4DE]">
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Sticker Overlay */}
                  <span className="absolute bottom-5 left-8 z-20 bg-[#556B2F] text-white px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold shadow-md">
                    {activeProject.category}
                  </span>
                </div>

                {/* Reader Content Body */}
                <div className="p-8 md:p-12 space-y-6">
                  
                  {/* Article header metadata info */}
                  <div className="space-y-3 pb-6 border-b border-[#E2E4DE]">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#5A6050] font-bold">
                      Editorial Release: {activeProject.date} • Lead Author
                    </p>
                    <h5 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#363C2E] leading-tight">
                      {activeProject.title}
                    </h5>
                    
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-[#556B2F] text-white font-bold font-serif text-[10px] flex items-center justify-center">
                          SH
                        </span>
                        <span className="font-serif text-[12px] font-semibold text-[#363C2E]">
                          By Shreya Hossen
                        </span>
                      </div>
                      <span className="text-[#E2E4DE]">•</span>
                      <p className="font-mono text-[10px] text-[#5A6050] font-semibold">
                        Daffodil International University Major Project
                      </p>
                    </div>
                  </div>

                  {/* Core prose text column (New York Times style layout) */}
                  <div className="space-y-6">
                    {/* Decorative elegant quote badge */}
                    <div className="p-5 bg-[#F9F9F7] rounded-[18px] border-l-4 border-[#556B2F] flex space-x-3 italic text-[#556052]">
                      <Quote className="w-6 h-6 text-[#556B2F] flex-shrink-0" />
                      <p className="font-serif text-[14px] leading-relaxed">
                        {activeProject.description}
                      </p>
                    </div>

                    {/* Standard prose splits by double breaks */}
                    {activeProject.content.split("\n\n").map((para, pIdx) => {
                      const trimmed = para.trim();
                      
                      const parseText = (text: string) => {
                        const regex = /(\*\*.*?\*\*|\*.*?\*)/g;
                        const splitParts = text.split(regex);
                        return splitParts.map((part, index) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                              <strong key={index} className="font-bold text-[#363C2E]">
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          if (part.startsWith("*") && part.endsWith("*")) {
                            return (
                              <em key={index} className="italic text-[#556052] font-serif">
                                {part.slice(1, -1)}
                              </em>
                            );
                          }
                          return part;
                        });
                      };

                      // 1. Heading level 3: ### Heading
                      if (trimmed.startsWith("### ")) {
                        return (
                          <h6 key={pIdx} className="font-serif text-lg font-bold text-[#363C2E] mt-8 mb-3 pt-4 border-t border-[#E2E4DE]/60 select-none">
                            {parseText(trimmed.slice(4))}
                          </h6>
                        );
                      }
                      
                      // 2. Blockquote: > "Quote text" or > — Citation
                      if (trimmed.startsWith("> ")) {
                        const lines = trimmed.split("\n");
                        const quoteText = lines[0].slice(2).replace(/^“|”$/g, "");
                        const citation = lines[1] && lines[1].trim().startsWith("—") 
                          ? lines[1].slice(1).trim() 
                          : null;
                        return (
                          <div key={pIdx} className="my-6 p-5 bg-[#556B2F]/5 border-l-4 border-[#556B2F] rounded-r-lg">
                            <p className="font-serif italic text-sm text-[#4E5645] leading-relaxed">
                              “{parseText(quoteText)}”
                            </p>
                            {citation && (
                              <p className="font-mono text-[10px] text-[#556B2F] font-bold mt-2.5 tracking-wider uppercase">
                                — {citation}
                              </p>
                            )}
                          </div>
                        );
                      }
                      
                      // 3. Bullet points list items
                      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                        const listItems = trimmed.split("\n").map(line => line.trim().replace(/^[\*\-]\s+/, ""));
                        return (
                          <ul key={pIdx} className="space-y-2.5 my-5 pl-3 list-none">
                            {listItems.map((item, itemIdx) => (
                              <li key={itemIdx} className="font-sans text-[14px] sm:text-[15px] text-[#5A6050] flex items-start space-x-2.5 leading-relaxed">
                                <span className="text-[#556B2F] mt-1.5 flex-shrink-0 text-xs select-none">•</span>
                                <span className="text-justify">{parseText(item)}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      // 4. Standard paragraph
                      return (
                        <p 
                          key={pIdx} 
                          className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#5C6254] text-justify"
                        >
                          {pIdx === 0 && trimmed.length > 0 ? (
                            <>
                              <span className="float-left text-5xl font-serif font-bold text-[#556B2F] mr-2.5 mt-1 leading-[0.85] uppercase select-none">
                                {trimmed.charAt(0)}
                              </span>
                              {parseText(trimmed.slice(1))}
                            </>
                          ) : (
                            parseText(trimmed)
                          )}
                        </p>
                      );
                    })}
                  </div>

                  {/* Article Tags and metadata footnote */}
                  <div className="pt-8 mt-12 border-t border-[#E2E4DE] flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="font-mono text-[10px] text-[#5A6050] font-bold self-center">Tags:</span>
                      {activeProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center space-x-1.5 text-[10.5px] font-sans px-3 py-1 bg-[#F9F9F7] border border-[#E2E4DE] text-[#363C2E] font-medium rounded-full">
                          <Tag className="w-3 h-3 text-[#556B2F]" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveProject(null)}
                      className="px-5 py-2 rounded-full bg-[#556B2F] hover:bg-[#556052] text-white font-mono text-[11px] uppercase tracking-wider font-semibold cursor-pointer transition-all shadow-xs"
                    >
                      Done Reading
                    </button>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
