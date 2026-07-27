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

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://portfolio-topaz-iota-zs571dsyg5.vercel.app";

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
      jobTitle: "Senior Frontend Engineer & UI Expert",
      description:
        "Senior Frontend Engineer & UI Expert with 7+ years of experience engineering scalable AI-powered SaaS, React, Next.js, and React Native applications.",
      url: siteUrl,
      sameAs: [
        "https://linkedin.com/in/kumar-kartikey-web",
        "https://github.com/kartikey-dev",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Frontend Architecture",
        "UI/UX Engineering",
        "Design Systems",
        "React Native",
        "Web Performance Optimization",
        "Accessibility (WCAG 2.1 AA)",
        "GraphQL",
        "Tailwind CSS",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Hestabit Technologies",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kumar Kartikey Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
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
      className={`${plusJakartaSans.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
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
