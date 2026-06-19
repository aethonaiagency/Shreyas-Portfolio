export interface Project {
  id: string;
  title: string;
  category: 'Content Writing' | 'Book Reviews' | 'University Projects' | 'Research Papers' | 'Media Reports';
  description: string;
  image: string;
  date: string;
  content: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // For visualization
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  details: string[];
}

export interface ExperienceItem {
  title: string;
  description: string;
  icon: string;
  longDescription: string;
}

export interface BentoAttribute {
  title: string;
  value: string;
  description: string;
  bgColor: string;
  span: string;
}

export const ACADEMIC_STATS = {
  cgpa: "4.00",
  semester: "6th",
  program: "BSS in Journalism, Media & Communication",
  university: "Daffodil International University",
  graduation: "2028",
  session: "2024–2028",
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Journalism & Writing",
    skills: [
      "Content Writing",
      "Book Reviewing",
      "Academic Research",
      "Interview Preparation",
      "Media Ethics",
      "Digital Storytelling"
    ]
  },
  {
    title: "Technical Utilities",
    skills: [
      "Canva Design",
      "Microsoft Word",
      "Google Docs",
      "PowerPoint",
      "Basic AI Tools"
    ]
  },
  {
    title: "Communication & Core",
    skills: [
      "Public Speaking",
      "Teamwork",
      "Leadership",
      "Time Management",
      "Critical Thinking"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Academic Projects & Reports",
    description: "Investigating issues and crafting deeply researched journalistic pieces as part of rigorous coursework.",
    icon: "FileText",
    longDescription: "Led research teams at Daffodil International University. Formulated hypotheses, conducted open-ended interviews with local stakeholders, and curated multimedia news stories."
  },
  {
    title: "Editorial & Content Writing",
    description: "Crafting long-form essays, profiles, and analytical papers about modern communicative trends.",
    icon: "PenTool",
    longDescription: "Published opinion pieces and feature columns within university media publications. Skilled in adjusting tone to balance neutral journalism with editorial style."
  },
  {
    title: "Book & Media Reviewing",
    description: "Critiquing historical and contemporary literature to develop analytical thinking and prose craftsmanship.",
    icon: "BookOpen",
    longDescription: "Authored critiques analyzing themes of social structures, post-modern communication paradigms, and native literature, enriching critical thinking and narrative vocabulary."
  },
  {
    title: "Digital Design & Storytelling",
    description: "Structuring news elements visual first using design spaces and layout structures.",
    icon: "Palette",
    longDescription: "Proficient in designing high-quality infographics, newsletters, and magazine slides utilizing Canva and standard publishing tools to boost audience engagement."
  }
];

export const BENTO_ATTRIBUTES: BentoAttribute[] = [
  {
    title: "Ethics-Driven",
    value: "Responsible",
    description: "Deeply committed to the principles of truth, objectivity, and accountability.",
    bgColor: "bg-olive-light/10",
    span: "col-span-12 md:col-span-8"
  },
  {
    title: "Resilient Work ethic",
    value: "Thrives Under Pressure",
    description: "Well-conditioned for fast-paced editorial room timelines.",
    bgColor: "bg-gold-light/15",
    span: "col-span-12 md:col-span-4"
  },
  {
    title: "Dynamic Speaker",
    value: "Communication",
    description: "Articulate voice for public forums, broadcast panels, and interviews.",
    bgColor: "bg-dark-olive/10",
    span: "col-span-12 md:col-span-5"
  },
  {
    title: "Active Collaborator",
    value: "Team Player",
    description: "Engages and coordinates in multi-disciplinary editorial divisions.",
    bgColor: "bg-olive-light/10",
    span: "col-span-11 md:col-span-7"
  },
  {
    title: "Proactive Adaptor",
    value: "Fast Learner",
    description: "Quickly learns emerging technologies and media paradigms.",
    bgColor: "bg-gold-light/15",
    span: "col-span-12 md:col-span-4"
  },
  {
    title: "Analytical Mind",
    value: "Problem Solver",
    description: "Translates complex social phenomena into comprehensible, digestible narratives.",
    bgColor: "bg-dark-olive/10",
    span: "col-span-12 md:col-span-8"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2026 – Present",
    title: "Deepening Editorial Practice",
    institution: "Daffodil International University",
    description: "Entering advanced semesters focusing on Media Research Methods, Broadcast Journalism, and investigative pipelines.",
    details: [
      "Currently maintaining a 4.00 GPA in core major modules.",
      "Leading collaborative student media projects highlighting municipal stories.",
      "Hosting department seminars and interviewing visiting keynote journalists."
    ]
  },
  {
    year: "2024",
    title: "BSS Commenced (Journalism, Media & Comm)",
    institution: "Daffodil International University",
    description: "Initiated undergraduate BSS program laying solid theoretical foundations in communication techniques, print styles, and ethics.",
    details: [
      "Inducted with top academic scores.",
      "Mastered foundational writing schemas: inverted pyramid, investigative feature, and news analysis.",
      "Elected representative of the student media association cohort."
    ]
  },
  {
    year: "2023",
    title: "Pre-University Preparatory Accomplishments",
    institution: "College & Academic Competitions",
    description: "Aggressively pursued speech, writing, and leadership accolades during secondary education.",
    details: [
      "Secured National Writing Award in regional youth writing championships.",
      "Led college editorial newsletter division.",
      "Formulated critical debates on digital privacy and media democratization."
    ]
  }
];

export const FEATURED_WORKS: Project[] = [
  {
    id: "proj-1",
    title: "Unveiling the Silent River: A Multimedia Investigation of Buriganga Pollution",
    category: "Media Reports",
    description: "A comprehensive multimedia feature detailing the ecological degradation of Bangladesh's Buriganga River and its direct socio-economic impact on surrounding communities.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800",
    date: "May 2025",
    content: "This paper acts as a visual and data-supported investigation into the extreme levels of industrial waste poisoning the Buriganga River. It combines scientific and ecological water test metrics with deep human storytelling—interviewing third-generation boatmen whose livelihoods have collapsed due to water toxicities. The research outlines actionable municipal initiatives and advocates for stricter regulatory enforcement on waste discharge.\n\nKey areas explored include the history of tannery migrations, public health crises in adjacent urban wards, and international river recovery models applicable to local rivers.",
    tags: ["Environmental Journalism", "In-depth Interviews", "Infographics", "Local Policy"]
  },
  {
    id: "proj-2",
    title: "Reflecting on National Literature: Reviews of Ten Bengali Classics",
    category: "Book Reviews",
    description: "A series of critical literary reviews examining the psychological, political, and cultural themes of ten prominent 20th-century Bengali classical novels.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
    date: "October 2025",
    content: "Through chronological critiques of Rabindranath Tagore, Sarat Chandra Chattopadhyay, and modern authors, this literary portfolio unpacks the deep social and humanistic changes within historical Bengal. Beyond superficial plot summaries, each review explores how the authors' stylistic methodologies reflected the socio-political movements of their respective eras.\n\nThis synthesis provides high-quality cultural reading and demonstrates deep thematic analytical thinking and advanced academic prose formulation.",
    tags: ["Literary Criticism", "Socio-political Analysis", "Bengali Classics", "Cultural Studies"]
  },
  {
    id: "proj-3",
    title: "Artificial Intelligence in the Modern Newsroom: Ethics v. Efficiency",
    category: "Research Papers",
    description: "An academic research paper debating the ethical boundaries and structural efficiency of integrating Large Language Models in digital newsrooms.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    date: "January 2026",
    content: "With artificial intelligence growing exponentially, this research paper examines the delicate boundary between generative utility and journalistic integrity. It analyses algorithmic biases, the dangers of unverified automated facts, and potential plagiarism liabilities in active media agencies.\n\nThe paper proposes a structured 'Human-in-the-Loop' editorial protocol designed to preserve the human soul of journalism—empathy, verification, and investigative grit—while utilizing technological accelerators.",
    tags: ["Media Ethics", "AI Technologies", "Academic Research", "Newsroom Policy"]
  },
  {
    id: "proj-4",
    title: "Grassroots Voice: Profiles of Eight Dhaka Street Vendors",
    category: "Content Writing",
    description: "A human-interest narrative series profiling the resilience, operating economies, and dreams of eight street merchants in Dhaka city.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
    date: "March 2025",
    content: "By taking the focus out of corporate boardrooms and placing it onto dusty streets, this narrative feature captures the colorful and complex micro-economies of Dhaka. It is structured around the literal voices of tea-stall owners, fruit vendors, and rickshaw-pullers, offering readers intimate glimpses into daily struggles and family ambitions.\n\nWritten with descriptive literary journalism styles, the project proves a strong ability to build empathy, listen actively, and convert simple, raw conversations into premium, reading experiences.",
    tags: ["Literary Journalism", "Human-Interest", "Dhaka Micro-Economies", "Empathetic Writing"]
  },
  {
    id: "proj-5",
    title: "Media Literacy Guidelines for High School Curriculum",
    category: "University Projects",
    description: "A proposed curriculum workbook targeting secondary education to combat misinformation and false fake news networks in the digital age.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    date: "December 2025",
    content: "This project serves as a practical, comprehensive guide outline engineered for high schoolers. Designed to be covered in an interactive semester, it breaks down concepts of digital echo chambers, algorithms, reverse-image search verification, primary source cross-referencing, and distinguishing commentary from objective hard news.\n\nComplete with exercise files, trivia elements, and graphical worksheets, the project was highly appreciated by the DIU academic panel for its immediate public utility.",
    tags: ["Educational Design", "Media Literacy", "Pre-empting Fake News", "Public Welfare"]
  }
];

export const JOURNALISM_QUOTES = [
  {
    quote: "Journalism is what maintains democracy. It's the force for progressive social change.",
    author: "Tom Stoppard"
  },
  {
    quote: "Our job is not to make people comfortable. Our job is to tell stories that need telling with uncompromising truth.",
    author: "Shreya Hossain"
  },
  {
    quote: "Literature is the prefix of life, but journalism is its direct, daily transcript.",
    author: "Anonymous Editorial"
  },
  {
    quote: "The media is the ultimate watchdog of the people, demanding transparency in every shadow.",
    author: "Ethical Press Manifesto"
  }
];
