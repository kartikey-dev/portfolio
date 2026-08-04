import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kumarkartikey.com";

export const metadata: Metadata = {
  title: "Kumar Kartikey | Senior Frontend Engineer & UI Expert",
  description:
    "Portfolio of Kumar Kartikey — Senior Frontend Engineer & UI Expert with 7+ years of experience engineering scalable AI-powered SaaS, React, Next.js, and React Native applications.",
  keywords: [
    "Kumar Kartikey",
    "Senior Frontend Engineer",
    "UI Expert",
    "React Developer",
    "Next.js Architect",
    "TypeScript Specialist",
    "AI SaaS Frontend",
    "Web Performance Optimization",
    "GSAP Animations",
    "Design Systems",
    "React Native",
  ],
  authors: [{ name: "Kumar Kartikey", url: siteUrl }],
  creator: "Kumar Kartikey",
  publisher: "Kumar Kartikey",
  category: "technology",
  applicationName: "Kumar Kartikey Portfolio",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Kumar Kartikey | Senior Frontend Engineer & UI Expert",
    description:
      "Senior Frontend Engineer & UI Expert with 7+ years of experience building high-performance AI SaaS, React, Next.js, and React Native applications.",
    siteName: "Kumar Kartikey Portfolio",
    images: [
      {
        url: "/images/kk-nameplate.jpg",
        width: 1200,
        height: 630,
        alt: "Kumar Kartikey - Senior Frontend Engineer & UI Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Kartikey | Senior Frontend Engineer & UI Expert",
    description:
      "Senior Frontend Engineer & UI Expert specializing in Next.js, React, TypeScript, GSAP, and AI UX performance.",
    images: ["/images/kk-nameplate.jpg"],
    creator: "@kartikey_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1C2023" },
    { media: "(prefers-color-scheme: dark)", color: "#1C2023" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Kumar Kartikey",
      jobTitle: "Senior Frontend Engineer & UI Specialist",
      description:
        "Senior Frontend Engineer & UI Specialist with 7+ years of experience building high-performance AI SaaS, React, Next.js, and React Native applications.",
      url: siteUrl,
      email: "mailto:hello@kumarkartikey.com",
      telephone: "+91-9050102547",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ghaziabad",
        addressRegion: "Uttar Pradesh",
        addressCountry: "India",
      },
      sameAs: ["https://linkedin.com/in/kumar-kartikey-web", "https://github.com/kartikey-dev"],
      knowsAbout: [
        "React.js",
        "Next.js 16",
        "TypeScript",
        "Frontend Architecture",
        "UI/UX Engineering",
        "Design Systems",
        "React Native",
        "AI Integration & Prompt Engineering",
        "Web Performance Optimization",
        "Accessibility (WCAG AAA)",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Hestabit Technologies",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Kumar Kartikey — Senior Frontend Engineering & UI Consultancy",
      url: siteUrl,
      description:
        "Premium freelance frontend development, Next.js SaaS architecture, React Native mobile app development, and technical UI audits for startups and scaling businesses.",
      priceRange: "$$",
      telephone: "+91-9050102547",
      email: "hello@kumarkartikey.com",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ghaziabad",
        addressRegion: "Uttar Pradesh",
        addressCountry: "India",
      },
      founder: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kumar Kartikey — Senior Frontend Engineer & UI Expert",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[#709FA8]/30 selection:text-[#709FA8] max-w-full overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
