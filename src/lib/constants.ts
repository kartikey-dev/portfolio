import {
  Experience,
  Project,
  SkillCategory,
  Service,
  Education,
  Certification,
  Achievement,
  FAQItem,
  ProcessStep,
} from "./types";

export const PERSONAL_INFO = {
  name: "Kumar Kartikey",
  title: "Senior Frontend Engineer & UI Expert",
  experienceYears: "7+",
  location: "Ghaziabad, UP, India",
  email: "hello@kumarkartikey.com",
  phone: "+91 9050102547",
  linkedin: "https://linkedin.com/in/kumar-kartikey-web",
  github: "https://github.com/kartikey-dev",
  resumeUrl: "https://drive.google.com/file/d/1xCm78itTYlFaggPuMKpcWSx6WAj_NNZa/view?usp=sharing",
  whatsappUrl:
    "https://wa.me/919050102547?text=Hi%20Kartikey,%20I'm%20interested%20in%20discussing%20a%20project",
  summary:
    "Senior Frontend Engineer & UI Expert with 7+ years of experience engineering scalable AI-powered SaaS, web, mobile, and desktop applications using React, Next.js, TypeScript, and React Native. Proven track record of leading 4–5 member UI teams, managing 5 concurrent enterprise projects, mentoring 5–10 freshers/interns, interviewing engineering candidates, and integrating OpenAI APIs, GPT models, MCP, and Prompt Engineering to boost engineering productivity by 50–60%.",
};

export const WHAT_I_BUILD_SERVICES: Service[] = [
  {
    id: "ai-saas",
    title: "AI SaaS Applications",
    description:
      "End-to-end scalable multi-tenant SaaS platforms powered by LLM APIs, Vercel AI SDK, streaming responses, and custom AI workflows.",
    tags: ["Next.js", "React", "OpenAI API", "Vercel AI SDK", "Tailwind CSS"],
  },
  {
    id: "business-websites",
    title: "Business & Portfolio Websites",
    description:
      "High-converting corporate and marketing websites with stunning glassmorphism visuals, micro-interactions, and 90+ PageSpeed scores.",
    tags: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS", "Technical SEO"],
  },
  {
    id: "dashboards",
    title: "Analytics & Data Dashboards",
    description:
      "Interactive real-time data visualization dashboards handling complex streaming data, filters, and high-frequency UI updates.",
    tags: ["React", "TypeScript", "TanStack Query", "Recharts", "Zustand"],
  },
  {
    id: "admin-panels",
    title: "Enterprise Admin Panels",
    description:
      "Secure role-based (RBAC) administration suites, content management control centers, and internal operations tools.",
    tags: ["React", "Next.js", "shadcn/ui", "REST/GraphQL", "Auth.js"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platforms",
    description:
      "Custom headless storefronts and full-stack e-commerce solutions with seamless checkout, cart state, and payment integrations.",
    tags: ["Shopify APIs", "WooCommerce", "Magento", "Stripe", "Razorpay"],
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    description:
      "Pixel-perfect, ultra-fast landing pages optimized for maximum conversion rate, A/B testing, and AEO/AIO search visibility.",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Core Web Vitals 90+"],
  },
  {
    id: "pwa",
    title: "Progressive Web Apps (PWAs)",
    description:
      "Offline-first web applications with desktop/mobile installability, background sync, service workers, and push notifications.",
    tags: ["Service Workers", "Workbox", "IndexedDB", "Web Manifest"],
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Apps",
    description:
      "Native-performing iOS & Android mobile applications built with React Native, Expo, and SwiftUI native module bridging.",
    tags: ["React Native", "Expo", "SwiftUI", "BLE", "Redux Toolkit"],
  },
  {
    id: "chrome-extensions",
    title: "Chrome & Browser Extensions",
    description:
      "Manifest V3 browser tools, DOM manipulators, automation extensions, and productivity sidebar suites.",
    tags: ["Chrome Extension API", "TypeScript", "React", "IPC Bridge"],
  },
  {
    id: "design-systems",
    title: "Design Systems & Component Libraries",
    description:
      "Standardized Storybook UI design systems with design tokens, WCAG 2.1 AA accessibility, and multi-brand theme distribution.",
    tags: ["Storybook", "Tailwind CSS", "shadcn/ui", "Radix UI", "Tokens"],
  },
  {
    id: "wordpress-solutions",
    title: "WordPress & Headless Solutions",
    description:
      "Custom WordPress theme development, plugin creation, and Headless WP architectures connected to Next.js frontends.",
    tags: ["WordPress", "Headless WP", "PHP", "GraphQL", "WooCommerce"],
  },
  {
    id: "seo-optimization",
    title: "SEO, AEO & AIO Optimization",
    description:
      "Comprehensive Technical SEO, Answer Engine Optimization (AEO), Schema.org JSON-LD, Open Graph, and AI Search dominance.",
    tags: ["Schema.org", "JSON-LD", "Core Web Vitals", "AEO / AIO / GEO"],
  },
  {
    id: "performance-optimization",
    title: "Web Performance Optimization",
    description:
      "Auditing and optimizing legacy or slow applications to achieve 90+ Google PageSpeed Scores and sub-1s LCP times.",
    tags: ["Lighthouse CI", "Code Splitting", "RSC", "Bundle Analysis"],
  },
  {
    id: "api-integrations",
    title: "API & Backend Integrations",
    description:
      "Robust integration of complex REST APIs, GraphQL endpoints, WebSockets, OAuth2, and third-party SaaS services.",
    tags: ["REST", "GraphQL", "WebSockets", "Axios", "JWT / OAuth2"],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Assistants",
    description:
      "Context-aware multi-turn conversational chatbots built with OpenAI GPT models, streaming UI, and custom knowledge bases.",
    tags: ["OpenAI API", "GPT-4/5", "Vercel AI SDK", "Prompt Engineering"],
  },
  {
    id: "ai-search",
    title: "AI Search & Vector Systems",
    description:
      "Intelligent semantic search experiences connecting vector databases to custom prompt engines.",
    tags: ["Pinecone", "Chroma", "Supabase Vector", "MCP", "Semantic Search"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "hestabit",
    company: "Hestabit Technologies",
    role: "Software Engineer / Senior Frontend Engineer",
    period: "July 2022 – Present",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Led frontend architecture and managed a 4–5 member UI engineering team across AI-powered Healthcare, Insurance, and Construction SaaS products using React, Next.js 16, TypeScript, and React Native.",
      "Mentored 5–10 freshers and interns for UI/UX learning programs, conducting code reviews and establishing reusable development standards.",
      "Integrated OpenAI APIs, GPT models, MCP (Model Context Protocol), and Prompt Engineering into enterprise applications, boosting development efficiency and product capabilities by 50–60%.",
      "Successfully managed 5 concurrent projects, ensuring high engineering quality, on-time delivery, and international stakeholder satisfaction.",
      "Built scalable frontend applications integrating REST APIs, GraphQL (schema design & caching strategy), and WebSocket services for real-time data streaming.",
      "Collaborated with global clients across the USA, UK, Europe, Australia, and the Middle East, translating business requirements into scalable technical solutions.",
      "Optimized web performance, consistently achieving 90+ Google PageSpeed Insights scores and improving Core Web Vitals (LCP by 40%, SEO traffic by 28%).",
      "Implemented Technical SEO, Answer Engine Optimization (AEO), and AI Optimization (AIO) across enterprise applications for maximum search visibility.",
      "Improved engineering productivity by 50–60% through AI-assisted development workflows, automation, and prompt engineering.",
      "Designed reusable Storybook design systems & component libraries, establishing WCAG 2.1 AA accessibility and engineering quality standards.",
      "Built React Native cross-platform mobile applications, Chrome Extensions, and Electron desktop solutions with secure JWT and OAuth 2.0 authentication.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "React Native",
      "OpenAI API",
      "GPT Models",
      "MCP",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "Tailwind CSS",
      "Storybook",
      "GSAP",
      "Jest",
    ],
  },
  {
    id: "new-vision",
    company: "New Vision Digital",
    role: "UI Developer",
    period: "Dec 2020 – July 2022",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Delivered 15+ production React applications while maintaining Lighthouse performance scores above 90+ through responsive UI and frontend optimization.",
      "Interviewed engineering candidates for technical hiring and served as the frontend technical point of contact for domestic and international clients.",
      "Architected clean, component-driven UIs with Redux Toolkit and CSS3 for scalable client portals.",
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "HTML5", "Redux Toolkit", "REST APIs"],
  },
  {
    id: "softclique",
    company: "Softclique Technologies",
    role: "Web Designer",
    period: "July 2019 – Dec 2020",
    location: "Noida, Uttar Pradesh, India",
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
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Built UI components with HTML5, CSS3, and WordPress; gained full SDLC and deployment experience.",
    ],
    technologies: ["HTML5", "CSS3", "WordPress", "JavaScript"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "kraken-photography",
    title: "Kraken – AI Underwater Photography Platform",
    subtitle: "AI-Powered Underwater Photography & Hardware Integration App",
    description:
      "Native iOS & cross-platform Mobile application featuring smart camera connectivity, real-time AI image enhancement, and automated color restoration workflows.",
    longDescription:
      "Engineered Kraken, an AI-powered underwater photography platform using SwiftUI and React Native. Built native iOS features using SwiftUI alongside cross-platform functionality built with React Native. Built reusable and responsive UI components, delivering a seamless user experience across iOS and Android platforms. Integrated AI-powered image enhancement and analysis services through REST APIs to support underwater photography workflows. Implemented hardware communication protocols for seamless connectivity with underwater camera devices. Optimized application performance, navigation, and state management to improve responsiveness and overall UX. Collaborated closely with AI engineers, backend developers, designers, and QA teams to deliver production-ready features.",
    tags: ["React Native", "SwiftUI", "TypeScript", "AI APIs", "Hardware APIs", "REST APIs", "Git"],
    highlights: [
      "Developed native iOS features using SwiftUI alongside cross-platform functionality built with React Native.",
      "Built reusable and responsive UI components delivering a seamless user experience across iOS and Android platforms.",
      "Integrated AI-powered image enhancement and analysis services through REST APIs to support underwater photography workflows.",
      "Implemented hardware communication protocols for seamless connectivity with underwater camera devices.",
      "Optimized application performance, navigation, and state management to improve responsiveness and overall user experience.",
      "Collaborated closely with AI engineers, backend developers, designers, and QA teams to deliver production-ready features.",
      "Participated in architecture discussions, sprint planning, code reviews, and Agile development.",
      "Contributed to native iOS development using SwiftUI, expanding platform-specific capabilities and improving UX.",
    ],
    category: "Mobile",
    featured: true,
  },
  {
    id: "icontentspro",
    title: "iContentsPro – Enterprise Insurance Mobile Application",
    subtitle: "Cross-Platform Enterprise Claims & Policy Management Suite",
    description:
      "Cross-platform enterprise insurance application using React Native (Expo) and TypeScript for policy management, claims, and secure client workflows.",
    longDescription:
      "Developed and maintained iContentsPro, a cross-platform enterprise insurance application using React Native (Expo) and TypeScript for iOS and Android. Built reusable, scalable UI components and implemented responsive interfaces to ensure a consistent user experience across devices. Integrated REST APIs for policy management, user authentication, claims, and other business workflows. Optimized application performance, navigation, and state management to improve responsiveness and maintainability. Collaborated closely with international clients, product managers, designers, and backend teams.",
    tags: ["React Native", "Expo", "TypeScript", "REST APIs", "Redux Toolkit", "Git"],
    highlights: [
      "Developed and maintained a cross-platform enterprise insurance application using React Native (Expo) and TypeScript for iOS and Android.",
      "Built reusable, scalable UI components and implemented responsive interfaces ensuring a consistent user experience across devices.",
      "Integrated REST APIs for policy management, user authentication, claims, and other business workflows.",
      "Optimized application performance, navigation, and state management to improve responsiveness and maintainability.",
      "Collaborated closely with international clients, product managers, designers, and backend teams to deliver features aligned with business requirements.",
      "Participated in sprint planning, code reviews, bug fixing, and release cycles following Agile development practices.",
      "Maintained high code quality using Git-based workflows, reusable architecture, and frontend best practices.",
    ],
    category: "Mobile",
    featured: true,
  },
  {
    id: "hestabit-digital-ecosystem",
    title: "Hestabit Digital Portfolio Ecosystem",
    subtitle: "High-Performance Multi-Site Next.js Platform & SEO Engine",
    description:
      "Suite of company portfolio websites built with Next.js, TypeScript, Tailwind CSS, and Technical SEO achieving 90+ Google PageSpeed Insights scores.",
    longDescription:
      "Led frontend development for multiple company portfolio websites using Next.js, React, and TypeScript. Designed scalable, reusable UI components and frontend architecture to accelerate development across multiple projects. Built high-performance, responsive, and SEO-optimized websites following Core Web Vitals, accessibility, and modern frontend best practices. Improved website performance through code splitting, image optimization, lazy loading, and rendering optimizations, achieving consistently high Google PageSpeed Insights scores.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Technical SEO",
      "Google Analytics",
      "Google Search Console",
    ],
    highlights: [
      "Led frontend development for multiple company portfolio websites using Next.js, React, and TypeScript.",
      "Designed scalable, reusable UI components and frontend architecture to accelerate development across multiple projects.",
      "Built high-performance, responsive, and SEO-optimized websites following Core Web Vitals, accessibility, and modern frontend best practices.",
      "Improved website performance through code splitting, image optimization, lazy loading, and rendering optimizations (90+ PageSpeed).",
      "Implemented Technical SEO best practices including structured metadata, sitemap optimization, canonical URLs, Open Graph, and schema markup.",
      "Worked closely with UI/UX designers, marketing teams, and stakeholders to deliver modern digital experiences aligned with business objectives.",
      "Integrated Google Analytics and Google Search Console to monitor website performance, user engagement, and search visibility.",
      "Mentored junior developers, performed code reviews, and established reusable development standards across frontend projects.",
    ],
    category: "Web App",
    featured: true,
  },
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
    featured: false,
  },
  {
    id: "enterprise-design-system",
    title: "Enterprise Storybook Design System",
    subtitle: "Modular UI Component Library & Micro-Frontend Tokens",
    description:
      "Accessible Storybook design system providing standardized UI tokens, micro-interactions, and reusable React components across enterprise products.",
    longDescription:
      "Architected a centralized Storybook design system establishing design tokens, WCAG 2.1 AA accessibility standards, and reusable component libraries. Reduced development cycle time by 35% across multi-repo frontend teams.",
    tags: ["Storybook", "React", "TypeScript", "Tailwind CSS", "WCAG AA"],
    highlights: [
      "WCAG 2.1 AA accessible component tokens",
      "Standardized UI states, micro-interactions & animations",
      "Multi-brand theme token distribution",
      "Storybook visual regression testing",
    ],
    category: "Frontend",
    featured: false,
  },
  {
    id: "electron-desktop-extension",
    title: "Electron Desktop & Chrome Extension Suite",
    subtitle: "Cross-Platform Desktop & Browser Integration Tools",
    description:
      "Cross-platform desktop application built with Electron.js alongside companion Chrome extensions for secure workflow automation.",
    longDescription:
      "Engineered secure desktop solutions using Electron.js and Chrome Extension API with OAuth 2.0 authentication, native system notifications, and background IPC bridge communication.",
    tags: ["Electron.js", "JavaScript", "Chrome Extension API", "OAuth 2.0", "IPC"],
    highlights: [
      "Cross-platform desktop packaging with Electron",
      "Chrome Extension API integration & background workers",
      "OAuth 2.0 authentication & secure token storage",
      "Native IPC inter-process communication",
    ],
    category: "SaaS",
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Core Frameworks",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Vue.js", level: "Proficient" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
    ],
  },
  {
    title: "Next.js & React Architecture",
    skills: [
      { name: "SSR (Server-Side Rendering)", level: "Expert" },
      { name: "SSG (Static Site Generation)", level: "Expert" },
      { name: "ISR (Incremental Static Regeneration)", level: "Expert" },
      { name: "React Server Components (RSC)", level: "Expert" },
      { name: "Server Actions", level: "Expert" },
      { name: "Middleware", level: "Expert" },
      { name: "API Routes", level: "Expert" },
    ],
  },
  {
    title: "Modern CSS, Styling & UI",
    skills: [
      { name: "Tailwind CSS (v3 & v4)", level: "Expert" },
      { name: "Bootstrap", level: "Expert" },
      { name: "SCSS / SASS", level: "Expert" },
      { name: "CSS Variables & Container Queries", level: "Expert" },
      { name: "CSS Modules", level: "Expert" },
      { name: "Styled-components", level: "Advanced" },
      { name: "Storybook & Design Systems", level: "Expert" },
      { name: "Responsive Design & WCAG 2.1 AA", level: "Expert" },
    ],
  },
  {
    title: "UI Component Libraries",
    skills: [
      { name: "shadcn/ui", level: "Expert" },
      { name: "Radix UI", level: "Advanced" },
      { name: "Material UI (MUI)", level: "Proficient" },
      { name: "Ant Design", level: "Proficient" },
    ],
  },
  {
    title: "Frontend Animation",
    skills: [
      { name: "GSAP & ScrollTrigger", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Anime.js", level: "Advanced" },
      { name: "AOS (Animate On Scroll)", level: "Expert" },
      { name: "Lottie", level: "Advanced" },
      { name: "Three.js", level: "Intermediate" },
    ],
  },
  {
    title: "AI Development",
    skills: [
      { name: "OpenAI API", level: "Advanced" },
      { name: "Google Gemini API", level: "Advanced" },
      { name: "Claude API", level: "Advanced" },
      { name: "Vercel AI SDK", level: "Advanced" },
      { name: "AI Chatbots & Conversational UX", level: "Advanced" },
      { name: "AI Search & Semantic Retrieval", level: "Advanced" },
      { name: "Prompt Engineering", level: "Expert" },
      { name: "MCP (Model Context Protocol)", level: "Advanced" },
      { name: "Vector Databases (Pinecone, Chroma, Supabase)", level: "Advanced" },
      { name: "AI Agents & Automation", level: "Advanced" },
    ],
  },
  {
    title: "AI Productivity",
    skills: [
      { name: "GitHub Copilot", level: "Advanced" },
      { name: "Cursor", level: "Advanced" },
      { name: "OpenAI Codex", level: "Advanced" },
      { name: "Lovable", level: "Proficient" },
      { name: "v0 by Vercel", level: "Proficient" },
    ],
  },
  {
    title: "Mobile & Native",
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Expo", level: "Advanced" },
      { name: "SwiftUI", level: "Proficient" },
      { name: "Swift", level: "Proficient" },
      { name: "Flutter", level: "Proficient" },
    ],
  },
  {
    title: "State Management & Dates",
    skills: [
      { name: "TanStack Query", level: "Expert" },
      { name: "Zustand", level: "Advanced" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "Context API", level: "Proficient" },
      { name: "React Hook Form & Zod", level: "Expert" },
      { name: "Day.js", level: "Expert" },
      { name: "date-fns", level: "Expert" },
    ],
  },
  {
    title: "APIs & Web APIs",
    skills: [
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL (Schema Design & Caching)", level: "Advanced" },
      { name: "WebSockets", level: "Advanced" },
      { name: "Service Workers & PWAs", level: "Advanced" },
      { name: "Web Workers", level: "Advanced" },
      { name: "IndexedDB", level: "Advanced" },
      { name: "Notifications API", level: "Advanced" },
      { name: "Clipboard API", level: "Advanced" },
    ],
  },
  {
    title: "Authentication",
    skills: [
      { name: "JWT", level: "Advanced" },
      { name: "OAuth2", level: "Advanced" },
      { name: "NextAuth / Auth.js", level: "Advanced" },
      { name: "Firebase Auth", level: "Advanced" },
      { name: "Supabase Auth", level: "Advanced" },
    ],
  },
  {
    title: "Cloud, Backend & Databases",
    skills: [
      { name: "Firebase", level: "Advanced" },
      { name: "Supabase", level: "Advanced" },
      { name: "AWS S3", level: "Intermediate" },
      { name: "Cloudflare", level: "Proficient" },
      { name: "Vercel", level: "Expert" },
      { name: "Netlify", level: "Proficient" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Prisma", level: "Proficient" },
      { name: "SQL", level: "Advanced" },
      { name: "PHP & Laravel", level: "Intermediate" },
    ],
  },
  {
    title: "CMS & E-Commerce",
    skills: [
      { name: "WordPress", level: "Expert" },
      { name: "Headless WordPress", level: "Advanced" },
      { name: "WooCommerce", level: "Proficient" },
      { name: "Magento", level: "Proficient" },
      { name: "Shopify & Shopify APIs", level: "Proficient" },
      { name: "Sanity", level: "Proficient" },
    ],
  },
  {
    title: "Payments & Integration",
    skills: [
      { name: "Stripe", level: "Advanced" },
      { name: "Razorpay", level: "Advanced" },
      { name: "PayPal", level: "Proficient" },
    ],
  },
  {
    title: "SEO, AEO, AIO & Analytics",
    skills: [
      { name: "Technical SEO", level: "Expert" },
      { name: "Schema.org & JSON-LD", level: "Expert" },
      { name: "Open Graph & Twitter Cards", level: "Expert" },
      { name: "Core Web Vitals (90+ Scores)", level: "Expert" },
      { name: "AEO (Answer Engine Optimization)", level: "Expert" },
      { name: "AIO (AI Optimization)", level: "Expert" },
      { name: "GEO (Generative Engine Optimization)", level: "Advanced" },
      { name: "Google Analytics & Tag Manager", level: "Expert" },
      { name: "Microsoft Clarity", level: "Advanced" },
      { name: "Meta Pixel", level: "Proficient" },
    ],
  },
  {
    title: "DevOps & Delivery",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "GitLab", level: "Advanced" },
      { name: "CI/CD Pipelines", level: "Proficient" },
      { name: "Azure DevOps", level: "Proficient" },
      { name: "Jenkins", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Proficient" },
      { name: "Linux", level: "Proficient" },
    ],
  },
  {
    title: "Engineering Leadership",
    skills: [
      { name: "Engineering Leadership", level: "Expert" },
      { name: "Team Management (4-5 UI Team)", level: "Expert" },
      { name: "Fresher & Intern Mentorship (5-10 Interns)", level: "Expert" },
      { name: "Technical Hiring & Candidate Interviewing", level: "Expert" },
      { name: "Sprint Planning & Agile/Scrum", level: "Expert" },
      { name: "Global Client Collaboration (USA, UK, Middle East)", level: "Expert" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Figma", level: "Proficient" },
      { name: "Adobe XD & Photoshop", level: "Proficient" },
      { name: "ZOHO", level: "Proficient" },
      { name: "VS Code", level: "Expert" },
      { name: "Antigravity", level: "Expert" },
      { name: "Postman", level: "Expert" },
      { name: "Chrome DevTools", level: "Expert" },
      { name: "npm / pnpm / Yarn", level: "Expert" },
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
    description:
      "Recognized for leading engineering standards and mentoring 5-10 junior/mid developers and interns.",
    issuer: "Hestabit Technologies",
  },
  {
    title: "Lighthouse 90+ & Core Web Vitals 90+",
    description:
      "Consistently achieved top-tier 90+ performance scores across production web apps.",
    issuer: "Performance Engineering",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discovery & Architecture Audit",
    subtitle: "Understanding your vision & technical requirements",
    description:
      "We begin with a deep dive into your business goals, target audience, UI design specifications, and performance requirements to define a robust technical architecture.",
    deliverables: ["Technical Specifications", "Architecture Roadmap", "Sprint Scope & Timeline"],
  },
  {
    stepNumber: "02",
    title: "Agile UI & Component Engineering",
    subtitle: "Building pixel-perfect, interactive interfaces",
    description:
      "Using React, Next.js 16, TypeScript, and modern CSS/Tailwind, I construct modular, accessible, and high-performance component systems with seamless state management.",
    deliverables: [
      "Modular Component Suite",
      "Interactive Prototypes",
      "API & Database Integrations",
    ],
  },
  {
    stepNumber: "03",
    title: "Performance, SEO & AEO Optimization",
    subtitle: "Maxing out PageSpeed, Accessibility & AI readiness",
    description:
      "Every line of code undergoes strict Core Web Vitals optimization, cross-browser testing (iOS Safari, Chrome, Firefox, Edge), WCAG accessibility audits, and JSON-LD schema injection.",
    deliverables: [
      "95+ Lighthouse Score Report",
      "Schema.org Rich Snippets",
      "Cross-Browser Verification",
    ],
  },
  {
    stepNumber: "04",
    title: "Deployment & Ongoing Engineering Support",
    subtitle: "Smooth launch & scaling",
    description:
      "Automated CI/CD pipelines deploy your product onto Vercel or custom cloud infrastructure, complete with clean documentation and post-launch technical support.",
    deliverables: [
      "Production CI/CD Deployment",
      "Codebase Handoff Documentation",
      "Post-Launch Support",
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "who-is-kumar-kartikey",
    question: "Who is Kumar Kartikey and what frontend services does he provide?",
    answer:
      "Kumar Kartikey is a Senior Frontend Engineer & UI Specialist with over 7+ years of industry experience. He specializes in engineering high-performance web applications, AI-powered SaaS platforms, cross-platform React Native mobile apps, and custom enterprise design systems using React, Next.js, and TypeScript. He is available for freelance projects, fractional technical leadership, agency subcontracting, and full-time senior engineering opportunities.",
  },
  {
    id: "why-hire-senior-engineer",
    question: "Why should startups and businesses hire a Senior Frontend Specialist?",
    answer:
      "Hiring a Senior Frontend Specialist ensures your web product is built right the first time — with bulletproof TypeScript architecture, 95+ PageSpeed scores, WCAG AAA accessibility compliance, and clean code that scales seamlessly without technical debt. This speeds up your time-to-market, lowers maintenance costs, and maximizes visitor-to-customer conversion rates.",
  },
  {
    id: "technologies-used",
    question: "Which technologies and frameworks do you use?",
    answer:
      "My primary tech stack includes React 19, Next.js 16 (App Router & Turbopack), TypeScript, React Native (Expo/SwiftUI), Tailwind CSS, GSAP for rich micro-animations, Zustand/Redux for state management, TanStack Query, REST & GraphQL APIs, and OpenAI / Vercel AI SDK integrations.",
  },
  {
    id: "timeline-and-process",
    question: "How long does custom website or app development take?",
    answer:
      "Timelines depend on project scope. High-converting landing pages or marketing sites typically take 1 to 2 weeks. Full-scale Next.js SaaS web applications, dashboards, or React Native mobile MVP builds typically take 3 to 6 weeks. Every project follows a structured 4-step agile engineering methodology.",
  },
  {
    id: "seo-aeo-geo-explained",
    question: "How do you ensure web applications are SEO and AI Search (AEO / GEO) ready?",
    answer:
      "Every project is built with semantic HTML5 elements, Server-Side Rendering (SSR) / Static Site Generation (SSG), 95+ Core Web Vitals performance, automated XML sitemaps, Open Graph metadata, and rich Schema.org JSON-LD structured data (Person, ProfessionalService, FAQPage, Breadcrumbs). This ensures top rankings on traditional engines like Google and Bing as well as maximum visibility in AI search platforms such as ChatGPT, Perplexity, Gemini, and Claude.",
  },
  {
    id: "freelance-contract-availability",
    question: "Are you available for freelance work, agency subcontracting, or full-time roles?",
    answer:
      "Yes! I actively collaborate with business owners for custom freelance software development, partner with digital agencies as a senior UI contractor, and evaluate high-impact full-time Senior Frontend Engineer opportunities.",
  },
];
