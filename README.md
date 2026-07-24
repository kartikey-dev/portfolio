# Kumar Kartikey — Portfolio

> ⚡ A high-performance, single-page portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and GSAP — targeting **100/100 on Google PageSpeed Insights** across all categories.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38bdf8?logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock)
![Jest](https://img.shields.io/badge/Jest-30-C21325?logo=jest)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Live Demo

> _Coming soon — will be deployed on Vercel_

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Testing (TDD)](#testing-tdd)
- [Performance Targets](#performance-targets)
- [CI/CD Pipeline](#cicd-pipeline)
- [SonarCloud Quality Gates](#sonarcloud-quality-gates)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Personal portfolio of **Kumar Kartikey** — a Senior Frontend Engineer with 6.5+ years of experience architecting scalable AI-powered SaaS, web, mobile, and desktop applications. This portfolio showcases UI/UX skills through a meticulously crafted single-page application with premium animations and near-instant load times.

### Key Features

- 🎨 **Premium Design** — Dark/Light theme with system detection, glassmorphism, gradient accents
- ⚡ **Blazing Fast** — LCP < 1.2s, CLS = 0, targeting 100/100 Lighthouse across all categories
- 🎭 **GSAP Animations** — Scroll-triggered reveals, staggered entrances, magnetic buttons, parallax
- 📱 **Fully Responsive** — Mobile-first design, 320px → 1920px
- ♿ **Accessible** — WCAG AA compliant, `prefers-reduced-motion` support, keyboard navigation
- 🧪 **Test-Driven** — 80%+ coverage with Jest + React Testing Library
- 🔒 **SonarCloud Passed** — Zero bugs, zero vulnerabilities, A ratings across all metrics
- 📊 **SEO Optimized** — Full meta tags, Open Graph, Twitter Cards, structured data

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, React Server Components) |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS v4 (CSS-first config, `@theme` tokens) |
| **Animations** | GSAP 3.15 + ScrollTrigger + ScrollToPlugin |
| **Testing** | Jest 30 + React Testing Library + `@testing-library/user-event` |
| **Code Quality** | ESLint 9 + Prettier + SonarCloud |
| **Package Manager** | pnpm |
| **CI/CD** | GitHub Actions (lint → test → coverage → Sonar → Lighthouse) |
| **Deployment** | Vercel |

---

## Project Structure

```
portfolio/
├── .github/workflows/       # CI/CD pipelines
│   ├── ci.yml                # Lint + Test + Coverage + Sonar
│   └── lighthouse.yml        # Lighthouse CI audit
├── .agents/
│   └── AGENTS.md             # AI agent context & guidelines
├── public/                   # Static assets (images, fonts, favicons)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (fonts, metadata, theme)
│   │   ├── page.tsx          # Single-page entry point
│   │   ├── globals.css       # Tailwind v4 @theme tokens + utilities
│   │   ├── not-found.tsx     # Custom 404
│   │   └── api/contact/      # Contact form API route
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Hero, About, Experience, Projects, Skills, Contact
│   │   └── ui/               # Button, Card, SectionHeading, AnimatedText, etc.
│   ├── lib/
│   │   ├── gsapConfig.ts     # GSAP plugin registration (client-only)
│   │   ├── constants.ts      # Portfolio data (resume content)
│   │   ├── types.ts          # TypeScript interfaces
│   │   └── utils.ts          # Helper functions
│   └── hooks/                # Custom hooks (useGsapAnimation, useSmoothScroll)
├── __mocks__/                # Test mocks (GSAP, IntersectionObserver)
├── jest.config.ts            # Jest configuration
├── jest.setup.ts             # Test setup (RTL matchers, mocks)
├── sonar-project.properties  # SonarCloud configuration
├── postcss.config.mjs        # PostCSS with @tailwindcss/postcss
├── next.config.ts            # Next.js optimizations
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.17
- **pnpm** ≥ 9.0 (`npm install -g pnpm`)
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/kartikey-dev/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## Development Workflow

This project follows **Test-Driven Development (TDD)** with the Red-Green-Refactor cycle:

```
1. 🔴 Write a failing test
2. 🟢 Write minimal code to pass
3. 🔵 Refactor & optimize
4. ✅ Run full test suite
5. 📝 Lint + Format
6. 📦 Git commit (conventional commits)
```

### Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check formatting without writing |
| `pnpm test` | Run Jest tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm analyze` | Analyze bundle size |

### Commit Convention

```
<type>(<scope>): <description>

Types: feat, fix, perf, test, chore, ci, docs, refactor, style
Scope: hero, about, projects, skills, contact, nav, config, ci
```

Examples:
```
feat(hero): add GSAP staggered text reveal animation
perf(images): optimize hero image with AVIF and priority loading
test(contact): add form validation tests
ci(sonar): integrate SonarCloud quality gates
```

---

## Testing (TDD)

Tests live alongside components in `__tests__/` directories. Every component is built test-first.

```bash
# Run all tests
pnpm test

# Watch mode (during development)
pnpm test:watch

# Coverage report
pnpm test:coverage
```

### Coverage Targets

| Metric | Target |
|---|---|
| Statements | ≥ 80% |
| Branches | ≥ 80% |
| Functions | ≥ 80% |
| Lines | ≥ 80% |

---

## Performance Targets

| Metric | Target | Strategy |
|---|---|---|
| **LCP** | < 1.2s | RSC hero, `priority` image, preloaded fonts |
| **CLS** | 0 | Explicit dimensions, `font-display: swap` |
| **INP** | < 100ms | Debounced handlers, GPU-accelerated animations |
| **FID** | < 50ms | Dynamic GSAP imports, code splitting |
| **TBT** | < 150ms | Minimal client JS, deferred animations |

### Lighthouse Score Goals

| Category | Target |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

## CI/CD Pipeline

Every push and PR triggers the following GitHub Actions pipeline:

```
┌─────────┐    ┌──────────┐    ┌───────────┐    ┌─────────────┐
│  Lint   │ → │   Test   │ → │ Coverage  │ → │ SonarCloud  │
│ ESLint  │    │  Jest    │    │  lcov     │    │  Analysis   │
└─────────┘    └──────────┘    └───────────┘    └─────────────┘
                                                       │
                                               ┌───────────────┐
                                               │ Lighthouse CI │
                                               └───────────────┘
```

---

## SonarCloud Quality Gates

| Metric | Target |
|---|---|
| Code Coverage (new code) | ≥ 80% |
| Duplicated Lines | < 3% |
| Maintainability Rating | A |
| Reliability Rating | A |
| Security Rating | A |
| New Bugs | 0 |
| New Vulnerabilities | 0 |

---

## Deployment

This project is deployed on **Vercel** with automatic deployments from the `main` branch.

```bash
# Build locally to verify
pnpm build

# The production build is automatically deployed via Vercel
# on every push to `main`
```

### Environment Variables

| Variable | Description |
|---|---|
| `CONTACT_EMAIL` | Email for contact form delivery |
| `SONAR_TOKEN` | SonarCloud authentication token |

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, tagline, CTA — LCP-optimized with deferred GSAP animations |
| **About** | Bio, profile photo, key stats (6.5+ years, 50K+ users) |
| **Experience** | Animated timeline with 4 roles across companies |
| **Projects** | Bento grid showcasing 3 AI-powered projects |
| **Skills** | Categorized tech stack visualization |
| **Contact** | Form with validation + social links |

---

## Browser Support

| Browser | Version |
|---|---|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| iOS Safari | Last 2 versions |
| Android Chrome | Last 2 versions |

---

## License

MIT © Kumar Kartikey

---

## Contact

- **Email**: webkartikdevloper@gmail.com
- **LinkedIn**: [kumar-kartikey-web](https://linkedin.com/in/kumar-kartikey-web)
- **GitHub**: [kartikey-dev](https://github.com/kartikey-dev)
