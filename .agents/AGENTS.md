# AGENTS.md — Kumar Kartikey Portfolio

> Context and guidelines for AI coding agents working on this project.

---

## Project Overview

This is a **single-page personal portfolio** for Kumar Kartikey, a Senior Frontend Engineer with 6.5+ years of experience. The site showcases UI skills through premium design, animations, and near-instant load performance.

### Core Objectives
1. **Perfect Lighthouse Scores** — 100/100 across Performance, Accessibility, Best Practices, SEO
2. **TDD** — Every component is built test-first (Red → Green → Refactor)
3. **SonarCloud Passed** — Zero bugs, zero vulnerabilities, 80%+ coverage
4. **Premium UI** — Dark/light themes, GSAP animations, glassmorphism, micro-interactions
5. **Git Discipline** — Conventional commits after every feature

---

## Tech Stack & Versions

| Technology | Version | Notes |
|---|---|---|
| Next.js | 16.x | App Router, React Server Components |
| React | 19.x | Latest stable |
| TypeScript | 5.9.x | Strict mode enabled |
| Tailwind CSS | 4.x | CSS-first config (`@theme` directive, no `tailwind.config.js`) |
| GSAP | 3.15.x | Free plugins only (ScrollTrigger, ScrollToPlugin) |
| @gsap/react | 2.x | `useGSAP` hook for lifecycle management |
| Jest | 30.x | Test runner with `next/jest` wrapper |
| React Testing Library | 16.x | Component testing |
| pnpm | 11.x | Package manager (NOT npm or yarn) |
| ESLint | 9.x | Flat config format |
| Prettier | 3.x | Code formatting |

---

## Architecture Rules

### Server vs Client Components

```
DEFAULT = Server Component (no "use client" directive)
```

- **Server Components (RSC)**: All section wrappers, layout, page.tsx, data constants
- **Client Components** (`"use client"`): Only when GSAP animations, event handlers, or browser APIs are needed
- **Strategy**: Keep the client boundary as small as possible. Wrap only the animated/interactive parts.

### GSAP Integration Pattern

```typescript
// ✅ CORRECT — Centralized GSAP config
// src/lib/gsapConfig.ts
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export { gsap, ScrollTrigger, ScrollToPlugin };
```

```typescript
// ✅ CORRECT — Component with GSAP
"use client";
import { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

export function AnimatedSection() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.from(".element", {
      y: 50, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: ".element", start: "top 80%" }
    });
  }, { scope: container });
  
  return <div ref={container}>...</div>;
}
```

```typescript
// ❌ WRONG — Never use useEffect for GSAP
useEffect(() => {
  gsap.to(...); // Memory leaks, no cleanup
}, []);

// ❌ WRONG — Never register plugins in components
gsap.registerPlugin(ScrollTrigger); // Do this in gsapConfig.ts only
```

### Performance Rules

1. **Images**: Always use `next/image` with `width`, `height`, and `sizes` props. Hero image must have `priority`.
2. **Fonts**: Always use `next/font/google`. Never load fonts via `<link>` tags.
3. **Animations**: Only animate `transform` and `opacity` (GPU-accelerated). Never animate `width`, `height`, `top`, `left`.
4. **Dynamic Imports**: GSAP-heavy components should be dynamically imported with `next/dynamic({ ssr: false })`.
5. **Bundle**: Run `pnpm analyze` before committing significant changes to verify bundle size impact.

### Tailwind CSS v4 Rules

```css
/* ✅ CORRECT — CSS-first configuration */
@import "tailwindcss";

@theme {
  --color-primary: oklch(0.72 0.19 244.08);
  --font-heading: "Space Grotesk", sans-serif;
}

/* ❌ WRONG — No tailwind.config.js exists in this project */
```

- No `tailwind.config.js` or `tailwind.config.ts` — all customization via `@theme` in `globals.css`
- Use `@theme` directive for custom design tokens
- Automatic content detection (no `content` array needed)

---

## Testing Guidelines

### TDD Workflow

For **every new component**:

1. Create the test file first: `__tests__/ComponentName.test.tsx`
2. Write tests that define expected behavior
3. Run tests — they should **FAIL** (Red)
4. Implement the component minimally to pass
5. Run tests — they should **PASS** (Green)
6. Refactor the code for quality
7. Run full suite: `pnpm test`

### Test Patterns

```typescript
// ✅ CORRECT — Test user behavior, not implementation
it("should display the user's name", () => {
  render(<Hero />);
  expect(screen.getByText("Kumar Kartikey")).toBeInTheDocument();
});

it("should navigate to projects when CTA is clicked", async () => {
  const user = userEvent.setup();
  render(<Hero />);
  await user.click(screen.getByRole("link", { name: /view my work/i }));
  // Assert scroll or navigation behavior
});

// ❌ WRONG — Don't test implementation details
it("should set state to true", () => {
  // Testing internal state is fragile
});
```

### Mocking

- **GSAP**: Mocked in `__mocks__/gsap.ts` — all animation methods return the mock for chaining
- **IntersectionObserver**: Mocked in `__mocks__/intersectionObserver.ts`
- **Images**: `next/image` is automatically handled by Jest with Next.js config
- **Fonts**: Mocked by default in the Next.js Jest environment

### Running Tests

```bash
pnpm test              # Run all tests
pnpm test:watch        # Watch mode
pnpm test:coverage     # Generate coverage report (lcov)
```

### Coverage Requirements

- **Minimum**: 80% across statements, branches, functions, lines
- **Coverage report path**: `coverage/lcov.info` (used by SonarCloud)

---

## File Organization

### Component Structure

```
src/components/sections/Hero.tsx          # Component file
src/components/sections/__tests__/Hero.test.tsx  # Test file
```

### Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `Hero.tsx`, `MagneticButton.tsx` |
| Hooks | camelCase with `use` prefix | `useGsapAnimation.ts` |
| Utils/Libs | camelCase | `gsapConfig.ts`, `constants.ts` |
| Tests | `*.test.tsx` / `*.test.ts` | `Hero.test.tsx` |
| CSS | kebab-case | `globals.css` |
| Types | PascalCase interfaces | `Project`, `Experience` |

### Import Order

```typescript
// 1. React/Next.js imports
import { useRef } from "react";
import Image from "next/image";

// 2. Third-party libraries
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@gsap/react";

// 3. Internal imports (components, hooks, utils)
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";

// 4. Types
import type { Project } from "@/lib/types";
```

---

## Git Workflow

### Branch Strategy

- `main` — Production branch (deployed to Vercel)
- `feat/*` — Feature branches
- `fix/*` — Bug fix branches

### Commit Convention

```
<type>(<scope>): <description>

Types: feat, fix, perf, test, chore, ci, docs, refactor, style
```

### Pre-Commit Checklist

Before every commit:
1. ✅ `pnpm lint` — No lint errors
2. ✅ `pnpm format:check` — Code is formatted
3. ✅ `pnpm test` — All tests pass
4. ✅ `pnpm typecheck` — No TypeScript errors
5. ✅ Manual review of bundle impact

---

## Resume Data (Source of Truth)

### Personal Info
- **Name**: Kumar Kartikey
- **Location**: Ghaziabad, UP, India
- **Email**: webkartikdevloper@gmail.com
- **Phone**: +91 9050102547
- **LinkedIn**: linkedin.com/in/kumar-kartikey-web
- **GitHub**: github.com/kartikey-dev
- **Availability**: Open to PAN India & Remote (US/EU)

### Profile Summary
Senior Frontend Engineer with 6.5+ years of experience architecting scalable AI-powered SaaS, web, mobile, and desktop applications using React, Next.js, TypeScript, and React Native.

### Experience (4 roles)
1. **Software Engineer** — Hestabit Technologies (July 2022 – July 2026)
2. **UI Developer** — New Vision Digital (Dec 2020 – July 2022)
3. **Web Designer** — Softclique Technologies (July 2019 – Dec 2020)
4. **Web Development Intern** — Upturn Private Limited (Jan 2018 – Feb 2018)

### Key Projects
1. **Pulse** — AI Healthcare Platform (React Native, TypeScript, AI/NLP, HIPAA)
2. **Orchard Benefits** — AI Insurance Concierge (React, Next.js, GraphQL)
3. **AI Construction Co-Pilot** — AI Dashboards (Next.js, TypeScript, GraphQL)

### Skills (for Skills section)
- **Languages**: JavaScript (ES6+), TypeScript, HTML5, CSS3
- **Frontend**: React.js, Next.js, React Native, Electron.js
- **Styling**: Tailwind CSS, Storybook, Responsive Design, WCAG, PWA
- **State**: Redux Toolkit, Zustand, TanStack Query
- **API**: REST, GraphQL, Axios
- **Auth**: JWT, OAuth2, NextAuth
- **Testing**: React Testing Library, Playwright, TDD
- **DevOps**: Vite, Webpack, Bun, pnpm, GitHub Actions, Docker, CI/CD

### Education
- BCA — Kurukshetra University (2018)
- Diploma in Web Design & Development — Ducat Institute (2019)
- Claude Code in Action — Anthropic (March 2026)

### Achievements
- Best Client Feedback Award & Excellence in Mentorship Award at Hestabit Technologies
- Lighthouse 95+ and Core Web Vitals 90+ across production apps

---

## CI/CD Configuration

### GitHub Actions

- **CI** (`.github/workflows/ci.yml`): lint → test → coverage → SonarCloud
- **Lighthouse** (`.github/workflows/lighthouse.yml`): Performance audit on deploy

### SonarCloud

- **Config**: `sonar-project.properties`
- **Coverage report**: `coverage/lcov.info`
- **Quality Gate**: "Sonar way" (focus on new code)

---

## Accessibility Requirements

- All images have descriptive `alt` text
- All interactive elements have `aria-label`
- Keyboard navigation works (Tab, Enter, Escape)
- Skip-to-content link in navbar
- `prefers-reduced-motion` media query disables all GSAP animations
- Color contrast ratios ≥ 4.5:1 (WCAG AA)
- Semantic HTML (`<section>`, `<article>`, proper heading hierarchy)

---

## Theme System

- **Dark/Light mode** with system detection (`prefers-color-scheme`)
- Manual toggle switch in navbar
- Theme stored in `localStorage`
- CSS custom properties for theme tokens
- Tailwind `dark:` variant for dark mode styles

---

## Contact

For questions about this project:
- **Email**: webkartikdevloper@gmail.com
- **GitHub**: [@kartikey-dev](https://github.com/kartikey-dev)
