import { Experience, Project, SkillCategory, Education, Certification, Achievement } from "./types";

export const PERSONAL_INFO = {
  name: "Kumar Kartikey",
  title: "Senior Frontend & UI Architect",
  experienceYears: "7+",
  location: "Ghaziabad, UP, India",
  email: "webkartikdevloper@gmail.com",
  phone: "+91 9050102547",
  linkedin: "https://linkedin.com/in/kumar-kartikey-web",
  github: "https://github.com/kartikey-dev",
  summary:
    "Senior Frontend Architect & UI Expert with 7+ years of experience engineering scalable AI-powered SaaS, web, mobile, and desktop applications using React, Next.js, TypeScript, and React Native. Specialized in frontend architecture, micro-interactions, design systems, performance engineering, and AI-driven user experiences. Proven track record of leading frontend engineering initiatives, mentoring engineers, and delivering secure, high-performance applications serving 50,000+ users.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "hestabit",
    company: "Hestabit Technologies",
    role: "Senior Software Engineer / Frontend Lead",
    period: "July 2022 – July 2026",
    location: "India",
    highlights: [
      "Led frontend architecture across AI-powered Healthcare, Insurance, and Construction SaaS products using React, Next.js 16, TypeScript, and React Native.",
      "Improved LCP by 40%, SEO traffic by 28%, and Core Web Vitals from 65 to 92+ by migrating core platforms to Next.js App Router.",
      "Reduced JavaScript bundle size by 30% using React Server Components, lazy loading, code splitting, and rendering optimizations.",
      "Designed reusable Storybook design systems & component libraries, mentored engineers, and established frontend quality standards.",
      "Built React Native applications, Chrome Extensions, and Electron desktop solutions while integrating secure REST/GraphQL services using JWT and OAuth 2.0.",
      "Collaborated with product managers, designers, backend engineers, and international stakeholders to deliver scalable AI-powered SaaS products.",
      "Leveraged Claude Code, ChatGPT, and AI tools to accelerate feature delivery, refactoring, testing, and developer productivity.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "React Native",
      "GraphQL",
      "REST API",
      "Electron.js",
      "Storybook",
      "Tailwind CSS",
      "GSAP",
      "Jest",
    ],
  },
  {
    id: "new-vision",
    company: "New Vision Digital",
    role: "UI Developer",
    period: "Dec 2020 – July 2022",
    location: "India",
    highlights: [
      "Delivered 15+ production React applications while maintaining Lighthouse performance scores above 95 through responsive UI and frontend optimization.",
      "Served as the frontend technical point of contact for domestic and international clients, translating business requirements into production-ready solutions.",
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "HTML5", "Redux", "REST APIs"],
  },
  {
    id: "softclique",
    company: "Softclique Technologies",
    role: "Web Designer",
    period: "July 2019 – Dec 2020",
    location: "India",
    highlights: [
      "Modernized legacy web applications using HTML5, CSS3, JavaScript, semantic HTML, and accessibility best practices, improving cross-browser compatibility and maintainability.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "WCAG"],
  },
  {
    id: "upturn",
    company: "Upturn Private Limited",
    role: "Web Development Intern",
    period: "Jan 2018 – Feb 2018",
    location: "India",
    highlights: [
      "Built UI components with HTML5, CSS3, and WordPress; gained full SDLC and deployment experience.",
    ],
    technologies: ["HTML5", "CSS3", "WordPress", "JavaScript"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "pokedex-explorer",
    title: "Pokedex Explorer",
    subtitle: "Test-Driven Modern Pokémon Discovery Platform",
    description:
      "Interactive Pokémon exploration platform built with Next.js, TypeScript, and PokéAPI following a strict TDD methodology.",
    longDescription:
      "Built an interactive, high-performance Pokémon discovery application utilizing Next.js App Router, TypeScript, and REST PokéAPI. Engineered using a Test-Driven Development (TDD) methodology with comprehensive unit & integration tests, dynamic type-search filtering, responsive card layouts, and live Vercel deployment.",
    tags: ["Next.js", "TypeScript", "PokéAPI", "TDD", "Tailwind CSS", "Jest", "Vercel"],
    highlights: [
      "Test-Driven Development (TDD) approach with high test coverage",
      "Real-time search, type filtering & dynamic pagination",
      "PokéAPI REST integration with cached responses",
      "Responsive grid UI deployed live on Vercel",
    ],
    liveUrl: "https://pokemon-explorer-indol-psi.vercel.app/",
    githubUrl: "https://github.com/kartikey-dev",
    category: "Web App",
    featured: true,
  },
  {
    id: "ai-healthcare-platform",
    title: "AI Healthcare Platform",
    subtitle: "HIPAA-Compliant Cross-Platform Healthcare SaaS",
    description:
      "Cross-platform healthcare application featuring 5-role RBAC, secure messaging, EHR integration, and real-time AI NLP risk classification.",
    longDescription:
      "Engineered a HIPAA-compliant cross-platform healthcare application with 5-role RBAC, secure messaging, and EHR integration. Implemented AI-assisted sentiment analysis workflows enabling automated patient risk escalation through real-time NLP classification.",
    tags: ["React Native", "TypeScript", "AI/NLP", "Twilio", "EHR", "RBAC", "Expo"],
    highlights: [
      "5-Role RBAC & HIPAA compliant architecture",
      "Real-time AI sentiment analysis & patient risk escalation",
      "Twilio integration for telehealth & secure messaging",
      "TDD approach with high test coverage",
    ],
    category: "Healthcare",
    featured: true,
  },
  {
    id: "ai-insurance-concierge",
    title: "AI Insurance Concierge Platform",
    subtitle: "Context-Aware AI Conversational Healthcare Benefits Platform",
    description:
      "AI-powered insurance concierge platform delivering context-aware multi-turn conversational experiences across healthcare benefit plans.",
    longDescription:
      "Engineered an AI-powered insurance concierge platform delivering context-aware conversational experiences across healthcare benefit plans. Architected scalable frontend workflows integrating secure APIs, responsive UI, and optimized multi-turn conversational experiences.",
    tags: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "AI UX"],
    highlights: [
      "Multi-turn conversational AI workflows",
      "GraphQL API integration with streaming responses",
      "High information discovery via conversational UX",
      "Reusable modular architecture",
    ],
    category: "AI",
    featured: true,
  },
  {
    id: "ai-construction-copilot",
    title: "AI Construction Co-Pilot",
    subtitle: "Real-Time Construction Insights & Workflow Automation",
    description:
      "AI-powered dashboard application enabling real-time construction intelligence, automated workflows, and project streaming insights.",
    longDescription:
      "Architected AI-powered dashboards enabling real-time construction insights and workflow automation. Designed scalable frontend architecture with reusable components, streaming AI responses, and performance-first rendering.",
    tags: ["Next.js", "TypeScript", "GraphQL", "TanStack Query", "Tailwind CSS"],
    highlights: [
      "Real-time construction analytics dashboard",
      "Streaming AI response handling",
      "TanStack Query for server state management",
      "Performance-first rendering architecture",
    ],
    category: "SaaS",
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Core",
    skills: [
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "HTML5 & Semantic Markup", level: "Expert" },
      { name: "CSS3 & Modern Layouts", level: "Expert" },
    ],
  },
  {
    title: "Frontend & Frameworks",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js (App Router)", level: "Expert" },
      { name: "React Native (Expo)", level: "Advanced" },
      { name: "Electron.js", level: "Proficient" },
    ],
  },
  {
    title: "UI, Styling & Animation",
    skills: [
      { name: "Tailwind CSS (v3 & v4)", level: "Expert" },
      { name: "GSAP & ScrollTrigger", level: "Advanced" },
      { name: "Storybook & Design Systems", level: "Expert" },
      { name: "Accessibility (WCAG AA)", level: "Expert" },
    ],
  },
  {
    title: "State & Data Fetching",
    skills: [
      { name: "TanStack Query", level: "Expert" },
      { name: "Zustand", level: "Advanced" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "React Hook Form & Zod", level: "Expert" },
    ],
  },
  {
    title: "API & Architecture",
    skills: [
      { name: "RESTful APIs", level: "Expert" },
      { name: "GraphQL", level: "Advanced" },
      { name: "JWT & OAuth 2.0", level: "Advanced" },
      { name: "Micro-Frontends & Architecture", level: "Advanced" },
    ],
  },
  {
    title: "Testing & Tooling",
    skills: [
      { name: "React Testing Library (TDD)", level: "Expert" },
      { name: "Jest", level: "Expert" },
      { name: "Playwright", level: "Advanced" },
      { name: "Vite, Webpack & Bun", level: "Advanced" },
      { name: "pnpm / npm / Yarn", level: "Expert" },
      { name: "GitHub Actions & CI/CD", level: "Advanced" },
    ],
  },
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kurukshetra University",
    location: "Haryana, India",
    year: "2018",
  },
  {
    degree: "Diploma in Web Designing & Development",
    institution: "Ducat Institute",
    location: "Ghaziabad, UP, India",
    year: "2019",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "March 2026",
    certId: "w3yqm6oiqd3t",
    verifyUrl: "https://verify.skilljar.com/c/w3yqm6oiqd3t",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Best Client Feedback Award",
    description: "Awarded for exceptional client satisfaction and project delivery.",
    issuer: "Hestabit Technologies",
  },
  {
    title: "Excellence in Mentorship Award",
    description: "Recognized for leading engineering standards and mentoring junior/mid developers.",
    issuer: "Hestabit Technologies",
  },
  {
    title: "Lighthouse 95+ & Core Web Vitals 90+",
    description: "Consistently achieved top-tier performance scores across production web apps.",
    issuer: "Performance Engineering",
  },
];
